import JwtService from "../middlewares/JwtService";
import User from "../database/models/User";
import { Md5 } from "ts-md5"
import jwtInterface from "../interfaces/jwtInterface";

export default class LoginService {
  private _jwtService: JwtService;
  constructor(private user = User) {
    this._jwtService = new JwtService()
  }

  async login(username: string, password: string) {
    const item = await this.user.findOne({ 
      where: { username, password: Md5.hashStr(password) },
      attributes: {  exclude: ['password']}
    })
    
    const info: jwtInterface = item?.dataValues

    return this._jwtService.createToken(info)
  }
}