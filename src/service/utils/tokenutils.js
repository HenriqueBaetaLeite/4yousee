const jwt = require('jsonwebtoken');

const jwt_secret = process.env.JWT_SECRET;

const generateToken = async (payload) => {
  return jwt.sign(payload, jwt_secret, {
    expiresIn: "3d",
  });
};

const verifyToken = async (token) => {
  try {
    return jwt.verify(token, jwt_secret);
  } catch (error) {
    return { error: error.message };
  }
};

module.exports = {
  generateToken,
  verifyToken,
};