const { getUserByEmail } = require("../../service/userService");
const { generateToken } = require("../../service/utils/tokenUtils");
const { compareHash } = require("../../service/utils/bcryptUtils");

const bcrypt = require("bcryptjs");

const invalidMessage = {
  message: "Error message",
};

const userSignInMid = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).send(invalidMessage);
  }

  const userExists = await getUserByEmail(email);

  if (!userExists) {
    return res.status(400).send(invalidMessage);
  }

  req.user = {
    id: userExists.id,
    name: userExists.name,
    email: userExists.email,
  };

  const validPassword = compareHash(password, userExists.password);

  if (!validPassword) {
    return res.status(401).send(invalidMessage);
  }

  next();
};

module.exports = userSignInMid;
