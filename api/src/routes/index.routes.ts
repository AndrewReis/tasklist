// dependencies
import express from 'express';

import { tasksRoutes } from './_tasks.routes';
import { usersRoutes } from './_users.routes';

export const routes = express();

// routes
routes.use('/users', usersRoutes);
routes.use('/tasks', tasksRoutes);
