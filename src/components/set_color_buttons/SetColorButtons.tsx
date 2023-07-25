import React from 'react';
import classes from '../to_do_list/toDoList.module.scss';
import { Props } from './types';


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