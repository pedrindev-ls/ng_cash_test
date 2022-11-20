"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config = require("../config/database");
exports.default = new sequelize_1.Sequelize(config);
//# sourceMappingURL=index.js.map