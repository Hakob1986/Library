import Sequelize, { Model } from "sequelize";

import { sequelize } from "./index.js";

export default class RentBook extends Model {}
RentBook.init(
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    borrow_data: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    return_data: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "rent_book",
  }
);
