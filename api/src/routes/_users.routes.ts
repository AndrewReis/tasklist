// dependencies
import { Router } from 'express';

// controllers
import { create } from '../controllers/users/persist.controller';
import { getAll } from '../controllers/users/retrieve.controller';

// routes
export const usersRoutes = Router();

usersRoutes.get('/', getAll);
usersRoutes.post('/create', create);
