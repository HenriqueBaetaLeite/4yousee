const bcrypt = require("bcryptjs");

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          id: 1,
          name: "Lewis Hamilton",
          email: "lewishamilton@gmail.com",
          password: bcrypt.hashSync("123456", 10),
        },
        {
          id: 2,
          name: "Michael Schumacher",
          email: "MichaelSchumacher@gmail.com",
          password: bcrypt.hashSync("passw", 10),
        },
      ],
      { timestamps: false }
    );
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
