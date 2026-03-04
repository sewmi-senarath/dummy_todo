import { Application } from 'express';
import todoRoutes from './todo';

const routerTodo = (app:Application) => {
    todoRoutes(app);
};

export default routerTodo;