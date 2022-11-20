import { Request, Response } from "express";
import { send } from "process";
import { useInflection } from "sequelize";
import UserService from "../services/UserService";

export default class UserController {
  constructor(private uService = new UserService) {}

  async getUser(req: Request, res: Response) {
    const item = await this.uService.getUsers()

    res.status(200).json(item)
  }

  async register(req: Request, res: Response) {
    const { username, password } = req.body
    const item = await this.uService.register(username, password)

    res.status(201).send()
  }
}