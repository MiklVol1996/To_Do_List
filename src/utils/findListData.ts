import { stateType } from "../store/toDoListReducer";
import { ToDoList, Task } from "../store/types";

export const findList = (state: stateType, id: string): ToDoList  => {
    return state.toDoLists.find(list => list.listID === id) as ToDoList;
}

export const findTask = (state: stateType, listID: string, taskID: string): Task => {
    return state.tasks[listID].find(task => task.id === taskID) as Task;
}