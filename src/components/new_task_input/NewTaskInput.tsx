import React, { useState } from 'react';
import classes from '../ToDoList/toDoList.module.scss';
import add from '../../images/add.jpg';
import { AppUseDispatch } from '../../redux/store';
import { actions } from '../../redux/toDoListReducer';
import { KeyboardEvent, ChangeEvent } from 'react';

type Props = {
    listID: string,
    backgroundColor: string,
}

const NewTaskInput: React.FC<Props> = React.memo(({ listID, backgroundColor }) => {

    let [newTaskValue, setNewTaskValue] = useState('');

    const dispatch = AppUseDispatch();

    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTaskValue(e.target.value);
    }

    const onAddNewTask = () => {
        dispatch(actions.addNewTask({ listID: listID, title: newTaskValue }));
        setNewTaskValue('');
    }

    const onKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Enter') {
            dispatch(actions.addNewTask({ listID: listID, title: newTaskValue }));
            setNewTaskValue('');
        }
    }

    return (
        <div className={classes.flex}>
            <input value={newTaskValue} placeholder='Enter new task...' onChange={onInputChange}
                onKeyDown={onKeyDown} />
            <div className={classes.isDoneChecked + ' ' + classes[backgroundColor]} onClick={onAddNewTask}>
                <img src={add} className={classes.add} />
            </div>
        </div>
    )
})

export default NewTaskInput;