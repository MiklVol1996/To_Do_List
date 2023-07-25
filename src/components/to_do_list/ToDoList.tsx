import React, { useState } from 'react';
import classes from './toDoList.module.scss';
import { useSelector } from 'react-redux';
import { giveAllTasks, giveColors } from '../../store/selectors';
import { actions } from '../../store/toDoListReducer';
import { AppUseDispatch } from '../../store/store';
import EditTitle from '../edit_title/EditTitle';
import close from '../../images/close.svg';
import FilterButtons from '../filter_buttons/FilterButtons';
import SetColorButton from '../set_color_buttons/SetColorButtons';
import NewTaskInput from '../new_task_input/NewTaskInput';
import { Props } from './types';
import SetColors from '../set_colors/SetColors';
import Tasks from '../tasks/Tasks';


const ToDoList: React.FC<Props> = React.memo(({ title, listID, filter, backgroundColor, statuses }) => {

    let [colorMode, setColorMode] = useState(false);
    const tasks = useSelector(giveAllTasks(listID, filter));
    const colors = useSelector(giveColors);
    const dispatch = AppUseDispatch();


    const onDeleteTask = (id: string) => {
        dispatch(actions.deleteTask({ listID: listID, taskID: id }));
    }

    const onStatusChange = (id: string) => {
        dispatch(actions.changeStatus({ listID: listID, taskID: id }));
    }

    const onColorClick = (color: string) => {
        dispatch(actions.setBackground({ backGround: color, listID: listID }));
    }

    const onDeleteList = () => {
        dispatch(actions.deleteList({ ID: listID }));
    }

    const editListTitle = (newTitle: string) => {
        dispatch(actions.editTitle({ isListTitle: true, ListID: listID, newTitle: newTitle }));
    }

    const editTaskTitle = (newTitle: string, id: string) => {
        dispatch(actions.editTitle({ isListTitle: false, ListID: listID, TaskID: id, newTitle: newTitle }));
    }

    const addNewTask = (newTaskValue: string) => {
        dispatch(actions.addNewTask({ listID: listID, title: newTaskValue }));
    }

    return (
        <div className={classes.ListWrap + ' ' + classes[backgroundColor]}>
            <img src={close} className={classes.closeList} onClick={onDeleteList} />
            <div className={classes.title}>
                <EditTitle title={title} onChangeInputHandler={editListTitle} />
            </div>
            <NewTaskInput backgroundColor={backgroundColor} addNewTask={addNewTask} />
            <FilterButtons filter={filter} listID={listID} backgroundColor={backgroundColor}
                statuses={statuses} />
            <Tasks backgroundColor={backgroundColor} editTaskTitle={editTaskTitle}
                onDeleteTask={onDeleteTask} onStatusChange={onStatusChange} tasks={tasks} />
            <SetColorButton setColorMode={setColorMode} backgroundColor={backgroundColor} />
            <SetColors onColorClick={onColorClick} colors={colors} colorMode={colorMode}
                setColorMode={setColorMode} />
        </div>
    )
})

export default ToDoList;
