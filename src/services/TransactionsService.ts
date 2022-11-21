import JwtService from "../middlewares/JwtService";
import Transaction from "../database/models/Transactions";
import { Op } from "sequelize";
import ErrorInterface from "../interfaces/errorInterface";
import AccountService from "./AccountService";
import userInterface from "../interfaces/userInterface";
import User from "../database/models/User";

export default class TransactionsService {
  private _jwtService: JwtService
  constructor(private transactions = Transaction, private aService = new AccountService()) {
    this._jwtService = new JwtService()
  }

  async getTransactions(token: string) {
    const { data: { username, accountId }} = this._jwtService.verifyToken(token)

    const items = await this.transactions.findAll({
      where: {
        [Op.or]: [
          { creditedAccount: accountId },
          { debitedAccount: accountId },
        ]
      }
    })

    return items
  }

  async getRecievedTransaction(token: string) {
    const { data: { accountId }} = this._jwtService.verifyToken(token)

    const items = await this.transactions.findAll({
      where: {
          creditedAccount: accountId
      }
    })

    return items
  }

  async getDebitedTransaction(token: string) {
    const { data: { accountId }} = this._jwtService.verifyToken(token)

    const items = await this.transactions.findAll({
      where: {
        debitedAccount: accountId
      }
    })

    return items
  }

  // async newTransactions(token: string, creditedAccount: number, value: string) {
  //   const debitedUser = await this.aService.getBalance(token)
  //   const { accountInfo } = debitedUser
  //   const creditedUser = await this.aService.getBalanceWithId(creditedAccount) as User

  //   if(Number(accountInfo.balance) > Number(value)) {
  //     const error: ErrorInterface = new Error('Saldo Insuficiente');
  //     error.status = 400;
  //     throw error;
  //   }
  //   if(creditedAccount === debitedUser.id) {
  //     const error: ErrorInterface = new Error('Impossível enviar uma transferencia para a sua própria conta');
  //     error.status = 400;
  //     throw error;
  //   }
    
  //   accountInfo.balance = JSON.stringify(Number(accountInfo.balance) - Number(value))

  //   return creditedUser
  // }
}