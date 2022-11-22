import { Request, Response, Router } from "express";
import AccountController from "../controllers/AccountController";

const accountRouter = Router()
const accountController = new AccountController()

accountRouter.get('/', (req: Request, res: Response) => accountController.getUserAndBalance(req, res))

export default accountRouter