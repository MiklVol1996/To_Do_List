import React from 'react';
import './App.scss';
import { useSelector } from 'react-redux'
import { giveToDoLists } from './redux/selectors';
import AddNewListForm from './components/add_new_list_form/AddNewListForm';
import ToDoList from './components/ToDoList/ToDoList';


const App: React.FC = React.memo(() => {

  const toDoLists = useSelector(giveToDoLists);

  return (
    <div className='appWrap'>
      <AddNewListForm />
      <div className='flex'>
        {
          toDoLists.map(list => {
            return (
              <ToDoList {...list} key={list.listID}/>
            )
          })
        }
      </div>
    </div>
  );
})

export default App;
