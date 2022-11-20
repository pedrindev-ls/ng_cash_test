import { Request, Response, Router } from "express";
import AccountController from "../controllers/AccountController";

const accountRouter = Router()
const accountController = new AccountController()

accountRouter.get('/balance', (req: Request, res: Response) => accountController.getBalance(req, res))
accountRouter.get('/transactions', (req: Request, res: Response) => accountController.getTransactions(req, res))

export default accountRouter