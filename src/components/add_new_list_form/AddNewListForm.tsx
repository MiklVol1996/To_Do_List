import React, { useState } from "react"
import { ChangeEvent, KeyboardEvent } from "react";
import classes from './add.module.scss';
import { Props } from "./types";


const AddNewListForm: React.FC<Props> = ({ addNewList }) => {

  let [newListTitle, setNewListTitle] = useState('');

  const onListAdd = () => {
    if (newListTitle) {
      addNewList(newListTitle);
      setNewListTitle('');
    }
  }

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewListTitle(e.target.value);
  }

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      addNewList(newListTitle);
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
}

export default AddNewListForm;