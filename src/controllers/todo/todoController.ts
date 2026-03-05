import {Request, Response} from 'express';
import { createTask, deleteTask, getAllTodos, getTodoById, updateTask } from '../../services/todoService';
import { deleteTodo } from '../../repositories/todoRepository';

const todoHomeController = {
    async todoHome(req:Request, res:Response) {
        try{
            const todos = await getAllTodos();
            res.render('todo/index', {
                todos: todos
            });
        }catch(err){
            console.log(err);
        }
    },

    async createTodos(req:Request , res:Response) {
        try{
            let todo_name = req.body.task;
            let status = req.body.status;

            await createTask(todo_name, status);
            res.redirect('/todo');
        }catch(err){
            console.log(err);
        }
    },

    async deleteTodo(req: Request, res: Response) {
        try{
            let taskID = Number(req.params.id);

            await deleteTask(taskID);
            res.redirect('/todo');
        }catch(err){
            console.log(err);
        }
    },
    
    async updateTodoPage(req: Request, res: Response){
        try{
            const id = req.params.id;
            const todos = await getTodoById(Number(id));
            res.render('todo/edit-todo', {
                todo:todos
            });
        }catch(err){
            console.log(err);
        }
    },

    async updateTasks(req: Request, res: Response){
        try{
            let taskID = Number(req.params.id);
            let todo_name = req.body.task;
            let status = req.body.status;

            await updateTask(taskID, todo_name, status );
            res.redirect('/todo');
        }catch(err){
            console.log(err);
        }
    }

    
}

export default todoHomeController;