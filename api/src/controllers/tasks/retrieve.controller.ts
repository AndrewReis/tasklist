// dependencies
import { Request, Response } from 'express';

// use-cases
import { getAllTasksUseCase } from '../../use-cases/tasks';

export const getAll = async (request: Request, response: Response) => {
  const tasks = await getAllTasksUseCase.execute();
  return response.json(tasks);
};
