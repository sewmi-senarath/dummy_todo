import { prisma } from "../lib/prisma"
import { CreateTodo, Todos } from "../types"


export const findAll = ():Promise<Todos[]> => {
    return prisma.todos.findMany();
}

export const create = (data: CreateTodo): Promise<Todos> => {
    return prisma.todos.create({data});
}