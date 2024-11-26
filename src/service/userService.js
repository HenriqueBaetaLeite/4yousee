const { User } = require('../database/models');

const getAllUsers = async () => {
  return await User.findAll();
};

module.exports = {
 getAllUsers,
};
