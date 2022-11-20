import Account from "../database/models/Account";
import JwtService from "../middlewares/JwtService";
import User from "../database/models/User";
import Transaction from "../database/models/Transactions";

export default class AccountService {
  private _jwtService: JwtService

  constructor(private user = User) {
    this._jwtService = new JwtService()
  }

  async getBalance(auth: string) {
    const { data: { username, accountId }} = this._jwtService.verifyToken(auth)
    
    const item = await this.user.findOne({
      include: [{
          model: Account,
          as: 'accountInfo',
          attributes: {
            exclude: ['id']
          }
        }
      ],
      where: { username },
      attributes: {  exclude: ['password', 'accountId']},
    })

    return item?.dataValues
  }

  async getTransactions(auth: string) {
    const { data: { username, accountId }} = this._jwtService.verifyToken(auth)

    const item = await this.user.findAll({
      include: [{
        model: Transaction,
        as: 'giveMoney',
        attributes: {
          exclude: ['id', 'creditedAccount', 'debitedAccount']
        },
      },
      ],
      where: { username },
      attributes: { exclude: ['password'] }
    })
    console.log(item)

    // return item?.dataValues
  }
}