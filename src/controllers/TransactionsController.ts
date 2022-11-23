import { Request, Response } from "express";
import AccountService from "../services/AccountService";
import JwtService from "../middlewares/JwtService";
import TransactionsService from "../services/TransactionsService";

export default class TransactionsController {
  private _jwtService: JwtService
  constructor(private tService = new TransactionsService(), private aService = new AccountService()) {
    this._jwtService = new JwtService()
  }

  async getTransactions(req: Request, res: Response) {
    const { authorization } = req.headers

    const item = await this.tService.getTransactions(authorization as string)

    res.status(200).json(item)
  }

  async getRecievedTransaction(req: Request, res: Response) {
    const { authorization } = req.headers

    const item = await this.tService.getRecievedTransaction(authorization as string)

    res.status(200).json(item)
  }

  async getDebitedTransaction(req: Request, res: Response) {
    const { authorization } = req.headers

    const item = await this.tService.getDebitedTransaction(authorization as string)

    res.status(200).json(item)
  }


  async newtransaction(req: Request, res: Response) {
    const { authorization } = req.headers
    const { creditedAccountId, value } = req.body

    const { data: { accountId } } = this._jwtService.verifyToken(authorization as string)

    await this.tService.newTransactions(accountId, creditedAccountId, value)
    const newBalance = await this.aService.getUserAndBalance(authorization as string)

    res.status(200).json(newBalance)
  }
}