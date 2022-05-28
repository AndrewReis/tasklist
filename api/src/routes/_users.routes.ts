// dependencies
import { Router } from 'express';

// controllers

// routes
export const usersRoutes = Router();

usersRoutes.get('/', (request, response) => response.status(200).send());
