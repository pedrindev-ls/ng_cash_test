import { DataTypes, Model } from 'sequelize';
import db from '.';
import Account from './Account';

class Transaction extends Model {
  public id: number;
  public debitedAccount: number
  public creditedAccount: number
  public value: string
}

Transaction.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  debitedAccount: DataTypes.INTEGER,
  creditedAccount: DataTypes.INTEGER,
  value: DataTypes.STRING,
}, {
  underscored: true,
  sequelize: db,
  tableName: 'Transactions',
  updatedAt: false,
});

Account.hasMany(Transaction, { foreignKey: 'debitedAccount', as: 'giveMoney' })
Account.hasMany(Transaction, { foreignKey: 'creditedAccount', as: 'recieveMoney' })
Transaction.belongsTo(Account, { foreignKey: 'debitedAccount', as: 'giveMoney' })
Transaction.belongsTo(Account, { foreignKey: 'creditedAccount', as: 'recieveMoney' })

export default Transaction