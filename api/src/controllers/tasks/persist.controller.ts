/* eslint-disable quote-props */
// dependencies
import { Request, Response } from 'express';
import { validate } from 'jsonschema';

// helpers
import { AppError } from '../../helpers/app-error.helper';
// use-cases
import { createTaskUseCase } from '../../use-cases/tasks';

// privates
const _validateBodyCreate = (body: {title: string}) => {
  const schema = {
    'id'         : '/CreateTask',
    'type'       : 'object',
    'properties' : {
      'title': { 'type': 'string' },
    },
    'required': ['title'],
  };

  const result = validate(body, schema);
  if (result.valid) {
    return body;
  }

  throw new AppError(`Body missing some values: ${result.toString()}`, 400);
};

export const create = async (request: Request, response: Response) => {
  const { userId } = request.params;
  const body = _validateBodyCreate(request.body);
  const task = await createTaskUseCase.execute(userId, body.title);
  return response.status(201).json(task);
};
