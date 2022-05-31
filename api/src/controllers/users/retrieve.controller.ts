// dependencies
import { Request, Response } from 'express';

// use-cases
import { getAllUsersUseCase } from '../../use-cases/users';

export const getAll = async (request: Request, response: Response) => {
  const users = await getAllUsersUseCase.execute();
  return response.json(users);
};
