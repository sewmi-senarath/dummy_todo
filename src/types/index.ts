import type { Todos } from "../../generated/prisma/client";

interface TodoType{
    task: string,
    is_completed:boolean,
};

export type { TodoType, Todos};