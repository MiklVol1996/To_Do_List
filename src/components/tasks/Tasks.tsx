import React from 'react';
import classes from '../to_do_list/toDoList.module.scss';
import check from '../../images/check.svg';
import deleteTask from '../../images/deleteTask.svg';
import EditTitle from '../edit_title/EditTitle';
import { Props } from './types';


const Tasks: React.FC<Props> = React.memo(({ tasks, backgroundColor, onStatusChange,
    editTaskTitle, onDeleteTask }) => {

    return (
        <div>
            {
                tasks?.map((task,) => {
                    return (
                        <div key={task.id} className={task.isDone ? classes['done'] : classes['usual']}>
                            <div className={classes.isDoneChecked + ' ' + classes[backgroundColor]}
                                onClick={() => onStatusChange(task.id)}>
                                {task.isDone && <img src={check} />}
                            </div>
                            <EditTitle title={task.title}
                                onChangeInputHandler={(newTitle) => editTaskTitle(newTitle, task.id)} />
                            <img src={deleteTask} onClick={() => onDeleteTask(task.id)}
                                className={classes.close} />
                        </div>)
                })
            }
        </div>
    )
})

export default Tasks;