import express from "express";
import todoHomeController from '../../controllers/todo/todoController';

const todoHomeRoutes = express.Router();

todoHomeRoutes.get('/', todoHomeController.todoHome);
todoHomeRoutes.post('/add-todo', todoHomeController.addTodo);

export default todoHomeRoutes;