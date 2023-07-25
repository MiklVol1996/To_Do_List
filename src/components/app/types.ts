import { Tasks, ToDoList } from "../../store/types";

export type StorageData = {
    lists: Array<ToDoList>,
    tasks: Tasks,
}