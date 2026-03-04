import {Request, Response} from 'express';
import { getAllTodos, saveTodo } from '../../services/todoService';

const todoHomeController = {
    async todoHome(req:Request, res:Response) {
        try{
            const todos = await getAllTodos();
            console.log("todos", todos);
            res.render('home/index', {
                todos: todos
            });
        }catch(err){
            console.log(err);
        }
    },

    async addTodo(req:Request , res:Response) {
        try{
            let todo_name = req.body.task;
            await saveTodo(todo_name);
            res.redirect('/todo');
        }catch(err){
            console.log(err);
        }
    }
}

export default todoHomeController;