import React, { useState } from "react"
import { ChangeEvent, KeyboardEvent } from "react";
import { AppUseDispatch } from "../../redux/store";
import { actions } from "../../redux/toDoListReducer";
import classes from './add.module.scss';

const AddNewListForm: React.FC = React.memo(() => {

  let [newListTitle, setNewListTitle] = useState('');
  const dispatch = AppUseDispatch();

  const onListAdd = () => {
    if (newListTitle) {
      dispatch(actions.addNewList(newListTitle));
      setNewListTitle('');
    }
  }

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewListTitle(e.target.value);
  }

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      dispatch(actions.addNewList(newListTitle));
      setNewListTitle('');
    }
  }

  return (
    <div className={classes.createListWrap}>
      <input placeholder="Enter new list title..." value={newListTitle} onChange={onInputChange}
        onKeyDown={onKeyDown} />
      <div onClick={onListAdd}>Add new list</div>
    </div>
  )
})

export default AddNewListForm;