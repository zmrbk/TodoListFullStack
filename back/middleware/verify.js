const jwt = require('jsonwebtoken');
const { KEY_REST } = require('../configs');

const verifyToken = (req, res, next) => {
  const token = req.headers['token'];
  if (!token) {
    return res.status(403).send('Unauthorized');
  }
  try {
    const decoded = jwt.verify(token, KEY_REST);
    req.user = decoded;
  } catch (error) {
    return res.status(401).send('Invalid token');
  }
  return next();
};

module.exports = verifyToken;
