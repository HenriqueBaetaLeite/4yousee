const { User } = require('../database/models');

const getAllUsers = async () => {
  return await User.findAll();
};

const getUserByEmail = async (email) => User.findOne({ where: { email } });

const getUserbyId = async (id) => User.findByPk(id);

const createNewUser = async (user) => User.create(user);


module.exports = {
 getAllUsers,
  getUserByEmail,
  getUserbyId,
  createNewUser,
};
