import React from 'react';
import classes from '../to_do_list/toDoList.module.scss';
import newClasses from './filBut.module.scss';
import { AppUseDispatch } from '../../store/store';
import { actions } from '../../store/toDoListReducer';
import { Props } from './types';


const FilterButtons: React.FC<Props> = React.memo(({ listID, filter, backgroundColor, statuses }) => {

  const { all, active, done } = statuses;
  const dispatch = AppUseDispatch();

  const onFilterButClick = (filter: string) => {
    dispatch(actions.changeListFilter({ filter: filter, listID: listID }))
  }

  const getClassName = (currntFilter: string, filter: string) => {
    return currntFilter === filter ? classes.active + ' ' + classes[backgroundColor] : newClasses['usual'];
  }

  return (
    <div className={newClasses.flex}>
      {all > 0 && <div onClick={() => onFilterButClick('All')}
        className={getClassName(filter, 'All')}>
        All {all}
      </div>}
      {active > 0 && <div onClick={() => onFilterButClick('Active')}
        className={getClassName(filter, 'Active')}>
        Active {active}
      </div>}
      {done > 0 && <div onClick={() => onFilterButClick('Done')}
        className={getClassName(filter, 'Done')}>
        Done {done}
      </div>}
    </div>
  )
})

export default FilterButtons;