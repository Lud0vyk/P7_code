// controllers/user.js

const jwt = require('jsonwebtoken');

const bcrypt = require('bcrypt');

const User = require('../models/user');

// pour s'enregistrer sur la bdd
exports.signup = (req, res, next) => {
  console.log(req.body);
    bcrypt.hash(req.body.password, 10)
      .then(hash => {
        console.log(hash);
        const user = new User({
          email: req.body.email,
          password: hash,
          name: req.body.name,
          role: 'user'
        });
        console.log(user);
        user.save()
          .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
          .catch(error => res.status(400).json({ error }));
      })
      .catch(error => res.status(500).json({ error }));
};

// pour se connecter
exports.login = (req, res, next) => {
    User.findOne({ email: req.body.email })
      .then(user => {
        if (!user) {
          return res.status(401).json({ error: 'Utilisateur non trouvé !' });
        }
        bcrypt.compare(req.body.password, user.password)
          .then(valid => {
            if (!valid) {
              return res.status(401).json({ error: 'Mot de passe incorrect !' });
            }
            res.status(200).json({
              userId: user._id,
              userName: user.name,
              role: user.role,
              token: jwt.sign(
                { userId: user._id },
                `${process.env.DB_TOKEN}`,
                { expiresIn: '24h' }
              )
            });
          })
        .catch(error => res.status(500).json({ error }));
      })
      .catch(error => res.status(500).json({ error }));
};
