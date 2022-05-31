// dependencies
import { Router } from 'express';

// controllers
import { create } from '../controllers/tasks/persist.controller';
import { getAll } from '../controllers/tasks/retrieve.controller';

// routes
export const tasksRoutes = Router();

tasksRoutes.get('/', getAll);
tasksRoutes.post('/create/:userId', create);
