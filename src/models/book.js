import Sequelize, { Model } from "sequelize";

import { sequelize } from "./index.js";

export default class Book extends Model {}
Book.init(
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "book",
  }
);
