// middleware/auth.js

const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {

  try {

    const token = req.headers.authorization;
    const decodedToken = jwt.verify(token, `${process.env.DB_TOKEN}`);
    const userId = decodedToken.userId;
    req.auth = { userId };

    console.log("token auth.js");
    console.log(req.auth);
    console.log(token);
    if (req.body.userId && req.body.userId !== userId) {
      throw 'Invalid user ID';
    } else {
      next();
    }
  } catch {
    res.status(401).json({
      error: new Error('Invalid request!')
    });
  }
}