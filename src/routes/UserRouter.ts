import { Request, Response, Router } from "express";
import UserController from "../controllers/UserController";

const usersRouter = Router()
const usersController = new UserController()

usersRouter.get('/', (req: Request, res: Response) => usersController.getUser(req, res))
usersRouter.post('/', (req: Request, res: Response) => usersController.register(req, res))

export default usersRouter