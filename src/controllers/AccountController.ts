import { Request, Response } from "express";
import AccountService from "../services/AccountService";

export default class AccountController {
  constructor(private aService = new AccountService()) {}

  async getBalance(req: Request, res: Response) {
    const { authorization } = req.headers
    
    const item = await this.aService.getBalance(authorization as string)
    console.log(item);

    res.status(200).json(item)
  }

  async getTransactions(req: Request, res: Response) {
    const { authorization } = req.headers
    
    const item = await this.aService.getTransactions(authorization as string)
    console.log(item);

    res.status(200).json(item)
  }
}