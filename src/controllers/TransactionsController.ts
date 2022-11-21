import { Request, Response } from "express";
import TransactionsService from "../services/TransactionsService";

export default class TransactionsController {
  constructor(private tService = new TransactionsService()) {}

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


  // async newtransaction(req: Request, res: Response) {
  //   const { authorization } = req.headers
  //   const { creaditedAccount, value } = req.body

  //   const item = await this.tService.newTransactions(authorization as string, creaditedAccount, value)

  //   res.status(200).json(item)
  // }
}