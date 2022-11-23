import { Request, Response, Router } from "express";
import UserService from "../services/UserService";
import UserController from "../controllers/UserController";

const usersRouter = Router()
const userService = new UserService()
const usersController = new UserController(userService)

usersRouter.post('/', (req: Request, res: Response) => usersController.register(req, res))

export default usersRouter