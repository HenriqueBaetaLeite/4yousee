const bcrypt = require('bcryptjs');

const SALT_ROUNDS = 10;

const createHash = (password) => {
  return bcrypt.hashSync(password, SALT_ROUNDS);
};

const compareHash = (password, hash) =>
  bcrypt.compareSync(password, hash);


module.exports = {
  createHash,
  compareHash,
};
