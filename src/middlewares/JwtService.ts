import * as jwt from "jsonwebtoken";
import jwtInterface from "../interfaces/jwtInterface";
import 'dotenv/config'


export default class JwtService {
  createToken = (data: jwtInterface) => {
    return jwt.sign({ data }, process.env.JWT_SECRET || 'secretJWT')
  }

  verifyToken = (token: string) => {
    const items = jwt.verify(token, process.env.JWT_SECRET || 'secretJWT')
    console.log(items)
    
    return items as jwt.JwtPayload
  }
}