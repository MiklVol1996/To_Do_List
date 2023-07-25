import { RootState } from "./store";

export const giveToDoLists = (state: RootState) => {
    return state.toDoList.toDoLists;
}

export const giveAllTasks = (listID: string, filter: string) => (state: RootState) => {
    switch (filter) {
        case 'All':
            return state.toDoList.tasks[listID];
        case 'Done':
            return state.toDoList.tasks[listID].filter(task => task.isDone === true);
        case 'Active':
            return state.toDoList.tasks[listID].filter(task => task.isDone === false);
    }
}

export const giveColors = (state: RootState) => {
    return state.toDoList.colors;
}









