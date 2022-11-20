"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = require(".");
const Account_1 = require("./Account");
class Transaction extends sequelize_1.Model {
}
Transaction.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    debitedAccount: sequelize_1.DataTypes.INTEGER,
    creditedAccount: sequelize_1.DataTypes.INTEGER,
    value: sequelize_1.DataTypes.STRING,
}, {
    underscored: true,
    sequelize: _1.default,
    tableName: 'transactions',
    updatedAt: false,
});
Account_1.default.hasMany(Transaction, { foreignKey: 'debitedAccount', as: 'giveMoney' });
Account_1.default.hasMany(Transaction, { foreignKey: 'creditedAccount', as: 'recieveMoney' });
Transaction.belongsTo(Account_1.default, { foreignKey: 'debitedAccount', as: 'giveMoney' });
Transaction.belongsTo(Account_1.default, { foreignKey: 'creditedAccount', as: 'recieveMoney' });
exports.default = Transaction;
//# sourceMappingURL=Transactions.js.map