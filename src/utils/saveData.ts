import { stateType } from "../store/toDoListReducer";

export const saveData = (state: stateType) => {
    localStorage.setItem('ToDoList', JSON.stringify({ lists: state.toDoLists, tasks: state.tasks }));
}