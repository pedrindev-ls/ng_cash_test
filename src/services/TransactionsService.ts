import JwtService from "../middlewares/JwtService";
import Transaction from "../database/models/Transactions";
import { Op } from "sequelize";
import ErrorInterface from "../interfaces/errorInterface";
import AccountService from "./AccountService";
import Account from "../database/models/Account";

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

  async createTransaction(debitedAccount: number, creditedAccount: number, value: number) {
    await this.transactions.create({ debitedAccount, creditedAccount, value })
  }

  async newTransactions(debitedAccountId: number, creditedAccountId: number, value: number) {
    const cAccount = await this.aService.getBalanceWithId(debitedAccountId)
    const { dataValues } = cAccount as Account

    if(debitedAccountId === creditedAccountId) {
      const error: ErrorInterface = Error('Impossível realizar uma transferencia para sua propria conta')
      error.status = 400
      throw error
    }

    if(Number(dataValues.balance) < Number(value)) {
      const error: ErrorInterface = Error('Saldo insuficiente')
      error.status = 400
      throw error
    }

    const newDebitedAccountValue = dataValues.balance - value

    const { dataValues: { balance } } = await this.aService.getBalanceWithId(creditedAccountId) as Account

    if(!dataValues) {
      const error: ErrorInterface = Error('Conta não encontrada')
      error.status = 400
      throw error
    }

    const newCreditedAccountValue = balance + value
    
    await this.aService.updateBalance(creditedAccountId, newCreditedAccountValue)
    await this.aService.updateBalance(debitedAccountId, newDebitedAccountValue)
    await this.createTransaction(debitedAccountId, creditedAccountId, value)
  }
}