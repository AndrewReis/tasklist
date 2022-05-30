/* eslint-disable quote-props */
// dependencies
import { Request, Response } from 'express';
import { validate } from 'jsonschema';

// helpers
import { AppError } from '../../helpers/app-error.helper';
// use-cases
import { createUserUseCase, getAllUsersUseCase } from '../../use-cases/users';

// privates
const _validateBodyCreate = (body: {name: string, email: string, password: string}) => {
  const schema = {
    'id'         : '/CreateUser',
    'type'       : 'object',
    'properties' : {
      'name'     : { 'type': 'string' },
      'email'    : { 'type': 'string' },
      'password' : { 'type': 'string' },
    },
    'required': ['name', 'email', 'password'],
  };

  const result = validate(body, schema);
  if (result.valid) {
    return body;
  }

  throw new AppError(`Body missing some values: ${result.toString()}`, 400);
};

export const create = async (request: Request, response: Response) => {
  const body = _validateBodyCreate(request.body);
  const user = await createUserUseCase.execute(body);
  return response.status(201).json(user);
};

export const getAll = async (request: Request, response: Response) => {
  const users = await getAllUsersUseCase.execute();
  return response.json(users);
};
