import Sequelize, { Model } from "sequelize";

import { sequelize } from "./index.js";

export default class Genre extends Model {}
Genre.init(
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    genre: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "genre",
  }
);
