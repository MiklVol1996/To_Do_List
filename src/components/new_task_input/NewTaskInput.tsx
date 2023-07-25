import React, { useState } from 'react';
import classes from '../to_do_list/toDoList.module.scss';
import plus from '../../images/plus.svg';
import { KeyboardEvent, ChangeEvent } from 'react';
import { Props } from './types';

const NewTaskInput: React.FC<Props> = React.memo(({  backgroundColor, addNewTask }) => {

    let [newTaskValue, setNewTaskValue] = useState('');

    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTaskValue(e.target.value);
    }

    const onAddNewTask = () => {
        addNewTask(newTaskValue);
        setNewTaskValue('');
    }

    const onKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Enter') {
            addNewTask(newTaskValue);
            setNewTaskValue('');
        }
    }

    return (
        <div className={classes.flex}>
            <input value={newTaskValue} placeholder='Enter new task...' onChange={onInputChange}
                onKeyDown={onKeyDown} />
            <div className={classes.isDoneChecked + ' ' + classes[backgroundColor]} onClick={onAddNewTask}>
                <img src={plus} className={classes.add} />
            </div>
        </div>
    )
})

export default NewTaskInput;