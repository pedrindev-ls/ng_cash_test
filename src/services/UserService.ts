import User from "../database/models/User"
import Account from "../database/models/Account";
import { Md5 } from "ts-md5"

export default class UserService {
  constructor(private user = User, private account = Account) {}
  
  async getUsers() {
    const item = await this.user.findAll({})
    // const regex = /[A-Za-z][0-9]|[0-9][A-Za-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]/;

    return item
  }

  async register(username: string, password: string) {
    const regex = /[A-Za-z][0-9]|[0-9][A-Za-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]/;
    const passwordTest = regex.test(password)    
    const usernameTest = await this.user.findOne({ where: { username } })

    if (passwordTest && !usernameTest) {
      const { dataValues } = await this.account.create({ balance: '100,00' })
      const newUser = await this.user.create({ username, password: Md5.hashStr(password), accountId: dataValues.id })
    }
  }
}