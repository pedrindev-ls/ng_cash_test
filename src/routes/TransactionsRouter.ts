import { Request, Response, Router } from "express";
import TransactionsController from "../controllers/TransactionsController";

const transactionsRouter = Router()
const transactionsController = new TransactionsController()

transactionsRouter.get('/credited', (req: Request, res: Response) => transactionsController.getRecievedTransaction(req, res))
transactionsRouter.get('/debited', (req: Request, res: Response) => transactionsController.getDebitedTransaction(req, res))
transactionsRouter.get('/', (req: Request, res: Response) => transactionsController.getTransactions(req, res))
// transactionsRouter.post('/', (req: Request, res: Response) => transactionsController.newtransaction(req, res))

export default transactionsRouter