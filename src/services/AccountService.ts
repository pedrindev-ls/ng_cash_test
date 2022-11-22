import Account from "../database/models/Account";
import JwtService from "../middlewares/JwtService";
import User from "../database/models/User";

export default class AccountService {
  private _jwtService: JwtService

  constructor(private user = User, private account = Account) {
    this._jwtService = new JwtService()
  }

  async getUserAndBalance(auth: string) {
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

  async getBalanceWithId(id: number) {
    const item = await this.account.findByPk(id)

    return item
  }

  async updateBalance(id: number, balance: number) {
    return await this.account.update({ balance }, { where: { id } })
  }
}