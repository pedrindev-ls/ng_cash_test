import * as express from 'express';
import { NextFunction, Request, Response } from 'express'
import 'express-async-errors';
import accountRouter from './routes/AccountRouter';
import loginRouter from './routes/LoginRouter';
import transactionsRouter from './routes/TransactionsRouter';
import usersRouter from './routes/UserRouter';
import CommomErrors from './middlewares/ComomErrors';
import ErrorInterface from './interfaces/errorInterface';

class App {
  public app: express.Express;
  public errorClass = new CommomErrors()

  constructor() {
    this.app = express()

    this.routes()
  }

  private routes():void {
    this.app.use(express.json())
    this.app.use('/user', usersRouter)
    this.app.use('/login', loginRouter)
    this.app.use('/account', accountRouter)
    this.app.use('/transactions', transactionsRouter)
    this.app.use((err: ErrorInterface, req: Request, res: Response, next: NextFunction) => {
      this.errorClass.takeError(err, req, res, next);
    })
  }

  public start(PORT: string | number):void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}

export { App }