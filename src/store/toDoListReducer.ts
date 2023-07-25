import { createSlice } from '@reduxjs/toolkit';
import { v1 } from 'uuid';
import type { PayloadAction } from '@reduxjs/toolkit';
import {
  ToDoList, Tasks, AddNewTask, DeleteTask, ChangeStatus,
  ChangeListFilter, AddNewList, DeleteList, EditTitle,
  SetToDoLists, SetTasks, SetBackground
} from './types';
import { saveData } from '../utils/saveData';
import { findList, findTask } from '../utils/findListData';

const initialState = {
  toDoLists: [] as Array<ToDoList>,
  tasks: {} as Tasks,
  colors: ['blue', 'green', 'pink', 'violet', 'yellow', 'grey', 'red', 'ocean'],
}

export type stateType = typeof initialState;

export const toDoListSlice = createSlice({
  name: 'toDoList',
  initialState,
  reducers: {
    addNewList(state: stateType, action: PayloadAction<AddNewList>) {
      const id = v1();
      const newList = {
        listID: id,
        title: action.payload.title,
        filter: 'All',
        backgroundColor: 'violet',
        statuses: { all: 0, done: 0, active: 0, }
      };
      state.toDoLists.unshift(newList);
      state.tasks[id] = [];
      saveData(state);
    },
    deleteList(state: stateType, action: PayloadAction<DeleteList>) {
      const { ID } = action.payload;
      state.toDoLists = state.toDoLists.filter(list => list.listID !== ID);
      delete state.tasks[ID];
      saveData(state);
    },
    addNewTask(state: stateType, action: PayloadAction<AddNewTask>) {
      const { title, listID } = action.payload;
      const newTask = { id: v1(), title: title, isDone: false };
      state.tasks[listID].unshift(newTask);
      const list = findList(state, listID);
      list.statuses.all += 1;
      list.statuses.active += 1;
      list.filter = 'Active';
      saveData(state);
    },
    deleteTask(state: stateType, action: PayloadAction<DeleteTask>) {
      const {listID, taskID} = action.payload;
      const tasks = state.tasks[listID];
      let isDone = null;
      state.tasks[listID] = tasks.filter(task => {
        if (task.id !== taskID) {
          return true;
        } else {
          isDone = task.isDone;
          return false;
        }
      });
      const list = findList(state, listID);
      if (isDone) {
          list.statuses.done -= 1;
          list.statuses.all -= 1;
      } else {
          list.statuses.active -= 1;
          list.statuses.all -= 1;
      }
      if (list.filter === 'Active' && list.statuses.active === 0){
        list.filter = 'All';
      } 
      if (list.filter === 'Done' && list.statuses.done === 0){
        list.filter = 'All';
      } 
      saveData(state);
    },
    changeStatus(state: stateType, action: PayloadAction<ChangeStatus>) {
      const {listID, taskID} = action.payload;
      const task = findTask(state, listID, taskID);
      const list = findList(state, listID);
      if (task.isDone) {
          list.statuses.done -= 1;
          list.statuses.active += 1;
      } else {
          list.statuses.done += 1;
          list.statuses.active -= 1;
      }
      task.isDone = !task.isDone;
      if (list.filter === 'Active' && list.statuses.active === 0){
        list.filter = 'All';
      }  
      if (list.filter === 'Done' && list.statuses.done === 0){
        list.filter = 'All';
      }    
      saveData(state);
    },
    changeListFilter(state: stateType, action: PayloadAction<ChangeListFilter>) {
      const {listID, filter} = action.payload;
      const list = findList(state, listID);
      list.filter = filter;
      saveData(state);
    },
    editTitle(state: stateType, action: PayloadAction<EditTitle>) {
      const {isListTitle, ListID, TaskID , newTitle} = action.payload;
      if (isListTitle) {
        const list = findList(state, ListID);
        list.title = newTitle;
      } else {
        const task = findTask(state, ListID, TaskID as string);
        task.title = newTitle;
      }
      saveData(state);
    },
    setToDoLists(state: stateType, action: PayloadAction<SetToDoLists>) {
      state.toDoLists = action.payload.ToDoLists;
    },
    setTasks(state: stateType, action: PayloadAction<SetTasks>) {
      state.tasks = action.payload.tasks;
    },
    setBackground(state: stateType, action: PayloadAction<SetBackground>) {
      const list = findList(state, action.payload.listID);
      list.backgroundColor = action.payload.backGround;
      saveData(state);
    },
  },
})

export const { actions: actions } = toDoListSlice;
export default toDoListSlice.reducer;
