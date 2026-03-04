import express from "express";
import todoHomeController from '../../controllers/home/todoController';

const todoHomeRoutes = express.Router();

todoHomeRoutes.get('/', todoHomeController.todoHome);

export default todoHomeRoutes;