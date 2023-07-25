export type ToDoList = {
    listID: string,
    title: string,
    filter: string,
    backgroundColor: string,
    statuses: {
        all: number,
        active: number,
        done: number,
    },
}

export type Tasks = {
    [key: string]: Array<Task>,
}

export type Task = {
    id: string,
    title: string,
    isDone: boolean,
}

export type AddNewTask = {
    listID: string,
    title: string,
}

export type DeleteTask = {
    listID: string,
    taskID: string,
}

export type ChangeStatus = {
    listID: string,
    taskID: string,
}

export type ChangeListFilter = {
    listID: string,
    filter: string,
}

export type AddNewList = {
   title: string,
}

export type DeleteList = {
    ID: string,
}

export type EditTitle = {
    ListID: string,
    isListTitle: boolean,
    newTitle: string,
    TaskID?: string,
}

export type SetToDoLists = {
    ToDoLists: Array<ToDoList>,
}

export type SetTasks = {
    tasks: Tasks,
}

export type SetBackground = {
    backGround: string,
    listID: string,
}











