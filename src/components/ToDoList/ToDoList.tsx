import React, { useState } from 'react';
import classes from './toDoList.module.scss';
import { useSelector } from 'react-redux';
import { giveAllTasks, giveColors } from '../../redux/selectors';
import { actions } from '../../redux/toDoListReducer';
import { AppUseDispatch } from '../../redux/store';
import EditTitle from '../edit_title/EditTitle';
import check from '../../images/check.png';
import close from '../../images/close.png';
import FilterButtons from '../filter_buttons/FilterButtons';
import SetColorButton from '../set_color_buttons/SetColorButtons';
import NewTaskInput from '../new_task_input/NewTaskInput';

type Props = {
    title: string,
    listID: string,
    filter: string,
}

const ToDoList: React.FC<Props> = React.memo(({ title, listID, filter }) => {

    let [colorMode, setColorMode] = useState(false);
    let [backgroundColor, setBackgroundColor] = useState('violet');
    const tasks = useSelector(giveAllTasks(listID, filter));
    const dispatch = AppUseDispatch();
    const colors = useSelector(giveColors);

    const onDeleteTask = (id: string) => {
        dispatch(actions.deleteTask({ listID: listID, taskID: id }))
    }

    const onStatusChange = (id: string) => {
        dispatch(actions.changeStatus({ listID: listID, taskID: id }));
    }

    const onColorClick = (color: string) => {
        setBackgroundColor(color);
        setColorMode(false);
    }

    const onDeleteList = () => {
        dispatch(actions.deleteList(listID));
    }

    return (
        <div className={classes.ListWrap + ' ' + classes[backgroundColor]}>
            {colorMode && <div className={classes.colors}>
                {
                    colors.map((color, i) => {
                        return (
                            <div key={i} className={classes[color]} onClick={() => onColorClick(color)}>
                            </div>
                        )
                    })
                }
            </div>}
            <div className={classes.title}>
                <EditTitle title={title} />
            </div>
            <NewTaskInput listID={listID} backgroundColor={backgroundColor} />
            <FilterButtons filter={filter} listID={listID} backgroundColor={backgroundColor} />
            <div>
                {
                    tasks?.map((task,) => {
                        return (
                            <div key={task.id} className={task.isDone ? classes['done'] : classes['usual']}>
                                <div className={classes.isDoneChecked + ' ' + classes[backgroundColor]}
                                    onClick={() => onStatusChange(task.id)}>
                                    {task.isDone && <img src={check} />}
                                </div>
                                <EditTitle title={task.title} />
                                <img src={close} onClick={() => onDeleteTask(task.id)}
                                    className={classes.close} />
                            </div>)
                    })
                }
            </div>
            <SetColorButton setColorMode={setColorMode} backgroundColor={backgroundColor} />
            <img src={close} className={classes.closeList} onClick={onDeleteList} />
        </div>
    )
})

export default ToDoList;
