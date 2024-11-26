const { createNewUser } = require("../service/userService");
const { createHash} = require('../service/utils/bcryptUtils');
const { generateToken } = require("../service/utils/tokenUtils");

const signUp = async (req, res) => {
  const userBody = req.body;
  const hashedPassword = createHash(userBody.password);
  const newUser = await createNewUser({ ...userBody, password: hashedPassword });
  const user = {
    id: newUser.id,
    name: newUser.name,
    email: newUser.email,
  };
    
  const token = generateToken({ data: user });

  const userCreated = {
    id: newUser.id,
    name: newUser.name,
    token: `Bearer ${token}`,
  };
  return res.status(200).send(userCreated);
};

const signIn = async (req, res) => {
  const newUser = req.user;
  const token = generateToken({ data: req.user });

  const userLoggedIn = {
    id: newUser.id,
    name: newUser.name,
    token: `Bearer ${token}`,
  };

  return res.status(200).send(userLoggedIn);
};

module.exports = {
  signUp,
  signIn,
};
