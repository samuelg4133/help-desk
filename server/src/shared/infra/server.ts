import cors from 'cors';
import express, { Express } from 'express';
import 'express-async-errors';
import helmet from 'helmet';
import morgan from 'morgan';

import { RequestError } from './http/middlewares/RequestError';
import { routes } from './http/Routes';

export class Server {
  private readonly app: Express;

  private constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
    this.errors();

    this.app.set('port', process.env.PORT || 3000);
  }

  private errors() {
    this.app.use(RequestError.error);
  }

  private routes() {
    this.app.use('/', routes);
  }

  private middlewares(): void {
    this.app.use(helmet());
    this.app.use(express.json({ limit: '10mb' }));
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cors());
    this.app.use(morgan('dev'));
  }

  public static getInstance(): Server {
    return new Server();
  }

  public start(): void {
    this.app.listen(this.app.get('port'), () => {
      console.log(`🚀 Server is running on http://localhost:${this.app.get('port')}`);
    });
  }
}
