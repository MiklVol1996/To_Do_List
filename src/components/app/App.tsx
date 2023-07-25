import React, { useEffect } from 'react';
import './App.scss';
import { useSelector } from 'react-redux'
import { giveToDoLists } from '../../store/selectors';
import AddNewListForm from '../add_new_list_form/AddNewListForm';
import ToDoList from '../to_do_list/ToDoList';
import { AppUseDispatch } from '../../store/store';
import { actions } from '../../store/toDoListReducer';
import { StorageData } from './types';


const App: React.FC = () => {

  const toDoLists = useSelector(giveToDoLists);
  const dispatch = AppUseDispatch();

  useEffect(() => {
    const dataFromStorage = localStorage.getItem('ToDoList');
    const parsedData: StorageData = JSON.parse(dataFromStorage as string);
    if (parsedData?.lists.length) {
      dispatch(actions.setToDoLists({ ToDoLists: parsedData.lists }));
      dispatch(actions.setTasks({ tasks: parsedData.tasks }));
    }
  }, []);

  const addNewList = (newListTitle: string) => {
    dispatch(actions.addNewList({ title: newListTitle }));
  }

  return (
    <div className='appWrap'>
      <AddNewListForm addNewList={addNewList} />
      <div className='flex'>
        {
          toDoLists.map(list => {
            return (
              <ToDoList {...list} key={list.listID} />
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
