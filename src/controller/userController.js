const { getAllUsers } = require('../service/userService');

const signUp  = async (req, res) => {
  const users = await getAllUsers();
    
  res.status(200).send(users);
}

const signIn = async (req, res) => {
  res.send('signin');
}

module.exports = {
  signUp,
  signIn
};
