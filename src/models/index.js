import Sequelize from "sequelize";

export const sequelize = new Sequelize("Librari", "root", "25horizon25", {
  dialect: "postgres",
  host: "localhost",
  define: {
    timestamps: false,
  },
});
