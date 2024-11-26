module.exports = (sequelize, DataTypes) => {
  const UserModel = sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      timestamps: false,
      tableName: "users",
    }
  );

  return UserModel;
};
