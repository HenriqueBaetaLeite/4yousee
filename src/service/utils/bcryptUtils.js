const bcrypt = require('bcrypt');

const createHash = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

const compareHash = async (password, hash) =>
  bcrypt.compareSync(password, hash);

module.exports = {
  createHash,
  compareHash,
};
