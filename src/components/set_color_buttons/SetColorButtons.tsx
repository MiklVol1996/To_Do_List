import React from 'react';
import classes from '../ToDoList/toDoList.module.scss';

type Props = {
    setColorMode: (data: boolean) => void,
    backgroundColor: string,
}


const SetColorButton: React.FC<Props> = React.memo(({ setColorMode, backgroundColor }) => {

    const onSetColor = () => {
        setColorMode(true);
    }

    return (
        <div>
            <div className={classes.setColor + ' ' + classes[backgroundColor]}
                onClick={onSetColor}>
                Set color
            </div>
        </div>
    )
})

export default SetColorButton;