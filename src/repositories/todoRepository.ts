import { prisma } from "../lib/prisma";
import { TodoType, Todos } from "../types/index";

export const createTodo = (data: TodoType) : Promise<Todos> => {
    return prisma.todos.create({data});
}

export const getAll = ():Promise<Todos[]> => {
    return prisma.todos.findMany();
}

export const getTodo = (id:number): Promise<Todos | null> => {
    return prisma.todos.findUnique({
        where: {id: id},
    });
}

export const deleteTodo = (id:number) : Promise<Todos> => {
    return prisma.todos.delete({
        where: {id: id},
    });
}

export const updateTodo = (id: number, data: TodoType) : Promise<Todos> => {
    return prisma.todos.update({
        where: {id: id},
        data: data
    });
}