import express, { Express, NextFunction, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

import { router } from './src/routes';

const app: Express = express();

app.use(express.json());
app.use(router);

app.use((err: Error | any, request: Request, response: Response, _next: NextFunction) => {
  if (err && err.error && err.error.isJoi) {
    return response.status(400).json({
      type: err.type, // will be "query" here, but could be "headers", "body", or "params"
      message: err.error.toString(),
    });
  }
  return response.status(500).json({
    status: 'Error',
    message: `Internal server error ${err.message}`,
  });
});

export { app };
