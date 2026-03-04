import type{Todos} from '../../generated/prisma/client';

export type {Todos};

export interface CreateTodo {
    task: string;
    is_completed: boolean;
}