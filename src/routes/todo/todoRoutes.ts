import express from "express";
import todoHomeController from "../../controllers/todo/todoController";

const todoHomeRoutes = express.Router();

todoHomeRoutes.get('/', todoHomeController.todoHome);
todoHomeRoutes.post('/add-todo', todoHomeController.createTodos);
todoHomeRoutes.post('/delete/:id', todoHomeController.deleteTodo);
todoHomeRoutes.get('/update/:id', todoHomeController.updateTodoPage);
todoHomeRoutes.post('/edit/:id', todoHomeController.updateTasks);

export default todoHomeRoutes;