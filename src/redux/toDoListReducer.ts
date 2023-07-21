import { createSlice } from '@reduxjs/toolkit';
import {v1} from 'uuid';
import type { PayloadAction } from '@reduxjs/toolkit';
import {ToDoList, Tasks, AddNewTask, DeleteTask, 
  ChangeStatus, ChangeListFilter} from '../types/types';

const initialState = {
  toDoLists: [] as Array<ToDoList>,
  tasks: {} as Tasks,
  colors: ['blue', 'green', 'pink', 'violet', 'yellow', 'grey', 'red', 'ocean'],
}


export const toDoListSlice = createSlice({
  name: 'toDoList',
  initialState,
  reducers: {
    addNewList(state: typeof initialState, action: PayloadAction<string>){
      const id = v1();
      const newList = {listID: id, title: action.payload, filter: 'All'};
      state.toDoLists.unshift(newList);
      state.tasks[id] = [];
    },
    deleteList(state: typeof initialState, action: PayloadAction<string>){
      state.toDoLists = state.toDoLists.filter(list => list.listID !== action.payload);
      delete state.tasks[action.payload];
    },
    addNewTask(state: typeof initialState, action: PayloadAction<AddNewTask>){
      const newTask = {id: v1(), title: action.payload.title, isDone: false};
      state.tasks[action.payload.listID].unshift(newTask);
    },
    deleteTask(state: typeof initialState, action: PayloadAction<DeleteTask>){
      let tasks = state.tasks[action.payload.listID];
      state.tasks[action.payload.listID] = tasks.filter(task => task.id !== action.payload.taskID);
    },
    changeStatus(state: typeof initialState, action: PayloadAction<ChangeStatus>){
      let task = state.tasks[action.payload.listID].find(task => task.id === action.payload.taskID);
      if(task){
        task.isDone = !task.isDone;
      }
      
    },
    changeListFilter(state: typeof initialState, action: PayloadAction<ChangeListFilter>){
      state.toDoLists = state.toDoLists.map(list => {
        if(list.listID === action.payload.listID){
          return {...list, filter: action.payload.filter};
        }
        return list;
      })
    }
  },
})


export const {actions: actions} = toDoListSlice;
export default toDoListSlice.reducer;

