// dependencies
import express from 'express';

// helpers
import { logger } from './helpers/logger.helper';

// routes
import { routes } from './routes/index.routes';

const app = express();

app.use(routes);
app.listen(3333, () => logger.info('Server running at 3333'));
