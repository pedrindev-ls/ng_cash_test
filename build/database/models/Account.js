"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = require(".");
class Account extends sequelize_1.Model {
}
Account.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    balance: sequelize_1.DataTypes.STRING,
}, {
    underscored: true,
    sequelize: _1.default,
    tableName: 'accounts',
    timestamps: false,
});
exports.default = Account;
//# sourceMappingURL=Account.js.map