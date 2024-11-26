const { User } = require('../database/models');

const getAllUsers = async () => {
  return await User.findAll();
};

const userByEmail = async (email) => User.findOne({ where: { email } });

const userbyId = async (id) => User.findByPk(id);

module.exports = {
 getAllUsers,
};
