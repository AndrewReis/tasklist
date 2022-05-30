/* eslint-disable quote-props */
// dependencies
import { Request, Response } from 'express';
import { validate } from 'jsonschema';

// helpers
import { AppError } from '../../helpers/app-error.helper';

// privates
const _validateBodyCreate = (body: object) => {
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

export const create = (request: Request, response: Response) => {
  const body = _validateBodyCreate(request.body);
  return response.status(201).json(body);
};

export const getAll = (request: Request, response: Response) => response.json({ ok: true });
