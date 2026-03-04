import { Application } from 'express';
import homeRoutes from './todoRoutes';

const homeTodoRoutes = (app:Application) => {
    app.use('/todo',homeRoutes);
};

export default homeTodoRoutes;