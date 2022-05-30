// dependencies
import { Router } from 'express';

// controllers
import { create, getAll } from '../controllers/users/persist.controller';

// routes
export const usersRoutes = Router();

usersRoutes.get('/', getAll);
usersRoutes.post('/create', create);
