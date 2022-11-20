import * as express from 'express';
import loginRouter from './routes/LoginRouter';
import usersRouter from './routes/UserRouter';

class App {
  public app: express.Express;

  constructor() {
    this.app = express()

    this.routes()
  }

  private routes():void {
    this.app.use(express.json())
    this.app.use('/user', usersRouter)
    this.app.use('/login', loginRouter)
  }

  public start(PORT: string | number):void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}

export { App }