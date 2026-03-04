import { Application } from 'express';
import todoRoutes from './home';

const routerTodo = (app:Application) => {
    todoRoutes(app);
};

export default routerTodo;