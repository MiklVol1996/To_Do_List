import React from 'react';
import classes from '../to_do_list/toDoList.module.scss';
import close from '../../images/close.svg';
import { Props } from './types';


const SetColors: React.FC<Props> = React.memo(({ onColorClick, colors, colorMode, setColorMode }) => {

    return (
        <div className={classes.colorsWrap}>
            {
                colorMode &&
                <div className={classes.colors}>
                    {
                        colors.map((color, i) => {
                            return (
                                <div key={i} className={classes[color]} onClick={() => onColorClick(color)}>
                                </div>
                            )
                        })
                    }
                </div>
            }
            {colorMode && <img src={close} onClick={() => setColorMode(false)} />}
        </div>
    )
})

export default SetColors;