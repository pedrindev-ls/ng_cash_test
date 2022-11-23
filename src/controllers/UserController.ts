import { Request, Response } from "express";
import { send } from "process";
import { useInflection } from "sequelize";
import UserService from "../services/UserService";

export default class UserController {
  constructor(private uService = new UserService) {}

  async register(req: Request, res: Response) {
    const { username, password } = req.body
    await this.uService.register(username, password)

    res.status(201).send()
  }
}