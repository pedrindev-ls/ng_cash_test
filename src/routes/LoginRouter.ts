import { Request, Response, Router } from "express";
import LoginController from "../controllers/LoginController";

const loginRouter = Router()
const loginController = new LoginController()

loginRouter.post('/', (req: Request, res: Response) => loginController.login(req, res))

export default loginRouter