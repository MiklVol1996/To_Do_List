import React, { useState } from 'react';
import classes from './edit.module.scss';

type Props = {
  title: string,
}

const EditTitle: React.FC<Props> = React.memo(({ title }) => {

  let [editMode, setEditMode] = useState(false);
  let [inputValue, setInputValue] = useState(title);

  const onSpanClick = () => {
    setEditMode(true);
  }

  return (
    <>
      {editMode
        ? <input value={inputValue} onBlur={() => setEditMode(false)} autoFocus={true}
          onChange={(e) => setInputValue(e.target.value)}
          className={classes.input} />
        : <span onDoubleClick={onSpanClick}>{inputValue}</span>}
    </>
  )
})

export default EditTitle;