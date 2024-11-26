const { getUserByEmail } = require('../../service/userService');

const invalidMessage = {
  message: 'Error message',
};

const userSignUpMid = async (req, res, next) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).send(invalidMessage);
  }

  const emailRegex = /\S+@\S+\.\S+/;
  if (!emailRegex.test(email)) {
    return res.status(400).send(invalidMessage);
  }

  if (password.length < 6) {
    return res.status(400).send(invalidMessage);
  }

  if (name.length < 3) {
    return res.status(400).send(invalidMessage);
  }

  if (name.length > 100) {
    return res.status(400).send(invalidMessage);
  }

  if (typeof(name) !== 'string' || typeof(email) !== 'string' || typeof(password) !== 'string') {
    return res.status(400).send(invalidMessage);
  }

  const userExists = await getUserByEmail(email);

  if (userExists) {
    return res.status(409).send(invalidMessage);
  }

  next();
}

module.exports = userSignUpMid;
