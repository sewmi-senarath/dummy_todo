import { createTodo, deleteTodo, getAll, getTodo, updateTodo } from "../repositories/todoRepository";
import { Todos } from "../types";

export const createTask = async (task:string , status:boolean) => {
    return await createTodo({
        task: task.toLowerCase().trim(),
        is_completed: status ? true : false,
    });
};

export const getAllTodos = async(): Promise<Todos[]> => {
    return await getAll();
}

export const getTodoById = async(id:number) : Promise<Todos | null> => {
    return await getTodo(id);
}

export const deleteTask = async(id:number): Promise<Todos> => {
    return await deleteTodo(id);
}

export const updateTask = async (id:number, task:string, status: boolean) : Promise<Todos>=> {
    return await updateTodo(
        id,
        {
            task: task.toLowerCase().trim(),
            is_completed: status ? true: false
        }
    );

}

