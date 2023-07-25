import { Task } from "../../store/types";

export type Props = {
    tasks: Array<Task> | undefined, 
    backgroundColor: string, 
    onStatusChange: (data: string) => void,
    editTaskTitle: (title: string, id: string) => void, 
    onDeleteTask: (data: string) => void,
}