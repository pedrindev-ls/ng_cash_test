import * as jwt from "jsonwebtoken";
import jwtInterface from "../interfaces/jwtInterface";
import 'dotenv/config'


export default class JwtService {
  createToken = (data: jwtInterface) => {
    return jwt.sign({ data }, process.env.JWT_SECRET || 'secretJWT')
  }
}