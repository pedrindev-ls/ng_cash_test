import { DataTypes, Model } from 'sequelize';
import db from '.';
import Account from './Account';

class User extends Model {
  public id: number;
  public username: string
  public password: string
  public accountId: number
}

User.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  username: DataTypes.STRING,
  password: DataTypes.STRING,
  accountId: DataTypes.INTEGER,
}, {
  underscored: true,
  sequelize: db,
  tableName: 'Users',
  timestamps: false,
});

Account.hasOne(User, { foreignKey: 'accountId', as: 'userInfo'})
User.belongsTo(Account, { foreignKey: 'id', as: 'accountInfo'})

export default User