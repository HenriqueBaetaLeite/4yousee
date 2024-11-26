const bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('users',
      [{
        id: 1,
        name: 'Lewis Hamilton',
        email: 'lewishamilton@gmail.com',
        // password: '$2a$10$TkjY3hj5amLgho8miKYHVeoFHhIRCurW6HiqEQuwgwgT1P4pSqz5m', // 123456
        password: bcrypt.hashSync('123456', 10),
      },
      {
        id: 2,
        name: 'Michael Schumacher',
        email: 'MichaelSchumacher@gmail.com',
        // password: '$2a$10$q4kGT9maptKS65d25IKnA.Xjx1Gn.S8AxjH7qmzJe57fuSTmvmETy', // passw
        password: bcrypt.hashSync('passw', 10),
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};
