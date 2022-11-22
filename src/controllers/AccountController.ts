import { Request, Response } from "express";
import AccountService from "../services/AccountService";

export default class AccountController {
  constructor(private aService = new AccountService()) {}

  async getUserAndBalance(req: Request, res: Response) {
    const { authorization } = req.headers
    
    const item = await this.aService.getUserAndBalance(authorization as string)
    console.log(item);

    res.status(200).json(item)
  }
}