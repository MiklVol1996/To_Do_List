import React, { useState } from 'react';
import classes from './edit.module.scss';
import { Props } from './types';


const EditTitle: React.FC<Props> = React.memo(({ title, onChangeInputHandler }) => {

  let [editMode, setEditMode] = useState(false);
  let [inputValue, setInputValue] = useState(title);

  const onSpanClick = () => {
    setEditMode(true);
  }

  const onBlur = () => {
    setEditMode(false);
    onChangeInputHandler(inputValue);
  }

  return (
    <>
      {editMode
        ? <input value={inputValue} onBlur={onBlur} autoFocus={true}
          onChange={(e) => setInputValue(e.target.value)}
          className={classes.input} />
        : <span onDoubleClick={onSpanClick}>{inputValue}</span>}
    </>
  )
})

export default EditTitle;