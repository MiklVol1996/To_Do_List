export type ToDoList = {
    listID: string,
    title: string,
    filter: string,
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
