import User from "../database/models/User"
import Account from "../database/models/Account";
import { Md5 } from "ts-md5"
import ErrorInterface from "../interfaces/errorInterface";

export default class UserService {
  constructor(private user = User, private account = Account) {}
  
  async getUsers() {
    const item = await this.user.findAll({})

    return item
  }

  async register(username: string, password: string) {
    const regex = /[A-Z]+[a-z]+[0-9]+|[0-9]+[A-Z]+[a-z]+|[0-9]+[a-z]+[A-Z]+|[a-z]+[A-Z]+[0-9]+/;
    const passwordTest = regex.test(password)    
    const usernameTest = await this.user.findOne({ where: { username } })

    if(password.length < 8 || username.length < 3) {
      const error: ErrorInterface = new Error('Usuário ou Senha fora dos parâmetros');
      error.status = 406;
      throw error;
    }

    console.log('primeiro erro');
    

    if (passwordTest && !usernameTest) {
      const { dataValues } = await this.account.create({ balance: '100,00' })
      console.log(dataValues);
      const newUser = await this.user.create({ username, password: Md5.hashStr(password), accountId: dataValues.id })
      console.log('newUser');
    } else {
      const error: ErrorInterface = new Error('Credenciais invalidas');
      error.status = 401;
      throw error;
    }
  }
}