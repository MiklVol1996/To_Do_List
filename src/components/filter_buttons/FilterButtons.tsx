import React from 'react';
import classes from '../ToDoList/toDoList.module.scss';
import newClasses from './filBut.module.scss';
import { AppUseDispatch } from '../../redux/store';
import { actions } from '../../redux/toDoListReducer';

type Props = {
  filter: string,
  listID: string,
  backgroundColor: string,
}

const FilterButtons: React.FC<Props> = React.memo(({ listID, filter, backgroundColor }) => {

  const dispatch = AppUseDispatch();

  const onFilterButClick = (filter: string) => {
    dispatch(actions.changeListFilter({ filter: filter, listID: listID }))
  }

  return (
    <div className={newClasses.flex}>
      <div onClick={() => onFilterButClick('All')}
        className={filter === 'All' ? classes.active + ' ' + classes[backgroundColor] : newClasses['usual']}>
        All
      </div>
      <div onClick={() => onFilterButClick('Done')}
        className={filter === 'Done' ? classes.active + ' ' + classes[backgroundColor] : newClasses['usual']}>
        Done
      </div>
      <div onClick={() => onFilterButClick('Active')}
        className={filter === 'Active' ? classes.active + ' ' + classes[backgroundColor] : newClasses['usual']}>
        Active
      </div>
    </div>
  )
})

export default FilterButtons;