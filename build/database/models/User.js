"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = require(".");
const Account_1 = require("./Account");
class User extends sequelize_1.Model {
}
User.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    username: sequelize_1.DataTypes.STRING,
    password: sequelize_1.DataTypes.STRING,
    accountId: sequelize_1.DataTypes.INTEGER,
}, {
    underscored: true,
    sequelize: _1.default,
    tableName: 'users',
    timestamps: false,
});
Account_1.default.hasOne(User, { foreignKey: 'accountId', as: 'userInfo' });
User.belongsTo(Account_1.default, { foreignKey: 'accountId', as: 'accountInfo' });
exports.default = User;
//# sourceMappingURL=User.js.map