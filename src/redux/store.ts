import { useDispatch } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit'
import  toDoListReducer  from './toDoListReducer'

export const store = configureStore({
  reducer: {
    toDoList: toDoListReducer,
  },
}) 

export const AppUseDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
