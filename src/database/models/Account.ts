import { DataTypes, Model } from 'sequelize';
import db from '.';

class Account extends Model {
  public id: number;
  public balance: string
}

Account.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  balance: DataTypes.STRING,
}, {
  underscored: true,
  sequelize: db,
  tableName: 'Accounts',
  timestamps: false,
});

export default Account