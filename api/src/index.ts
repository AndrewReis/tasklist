// dependencies
import 'express-async-errors';
import express, { Request, Response, NextFunction } from 'express';

// helpers
import { AppError } from './helpers/app-error.helper';
import { logger } from './helpers/logger.helper';
// routes
import { routes } from './routes/index.routes';

const app = express();

app.use(express.json());
app.use(routes);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status  : 'error',
      message : err.message,
    });
  }

  return response.status(500).json({
    status  : 'error',
    message : 'Internal server error',
  });
});

app.listen(3333, () => logger.info('Server running at 3333'));
