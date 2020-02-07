import { DataTypes, Model } from "sequelize";

import sequelize from "./connection";

export class Stories extends Model {}
Stories.init(
  {
    title: {
      allowNull: false,
      type: DataTypes.STRING
    },
    description: {
      allowNull: false,
      type: DataTypes.TEXT
    }
  },
  { sequelize, modelName: "stories" }
);