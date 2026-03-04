import { create, findAll } from "../repositories/todoRepository";
import { Todos } from "../types";

export const getAllTodos = async(): Promise<Todos[]> => {
    return await findAll();
}

export const saveTodo = async(task: string) => {
    return await create({
        task: task.trim(),
        is_completed: false
    });
}