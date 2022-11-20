import { Request, Response } from "express";
import LoginService from "../services/LoginService";

export default class LoginController {
  constructor(private lService = new LoginService) {}
  async login(req: Request, res: Response) {
    const { username, password } = req.body

    const token = await this.lService.login(username, password)

    res.status(200).json({ token })
  }
}