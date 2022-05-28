// dependencies
import express from 'express';

import { usersRoutes } from './_users.routes';

export const routes = express();

// routes
routes.use('/users', usersRoutes);
