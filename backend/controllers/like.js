// controllers/like.js

// création d'un router
const express = require('express');
const router = express.Router();

// Importation du models de la bdd
const Publication = require('../models/publication');
const User = require('../models/user');


// pour les likes
exports.likeFromUser = (req, res, next) => {

  Publication.findOne({ _id: req.params.id })
    .then((publication) => {
      
      // si l'id de l'utilisateur n'est pas dans le tableau usersLiked et si like = 1
      if (!publication.usersLiked.includes(req.body.userId) && req.body.like === 1) {
  
        Publication.updateOne({ _id: req.params.id }, {
          $inc: {likes: 1},
          $push: {usersLiked: req.body.userId}
        })
        .then(() => res.status(200).json({ message: 'Like +1 !'}))
        .catch((error) => {res.status(400).json({error: error});});
      }
  
      if (publication.usersLiked.includes(req.body.userId) && req.body.like === 0) {
  
        Sauce.updateOne({ _id: req.params.id }, {
          $inc: {likes: -1},
          $pull: {usersLiked: req.body.userId}
        })
        .then(() => res.status(200).json({ message: 'Like -1 !'}))
        .catch((error) => {res.status(400).json({error: error});});
      }
    
      if (!publication.usersDisliked.includes(req.body.userId) && req.body.like === -1) {
  
        Publication.updateOne({ _id: req.params.id }, {
          $inc: {dislikes: 1},
          $push: {usersDisliked: req.body.userId}
        })
        .then(() => res.status(200).json({ message: 'dislikes +1 !'}))
        .catch((error) => {res.status(400).json({error: error});});
      }
  
      if (publication.usersDisliked.includes(req.body.userId) && req.body.like === 0) {
  
        Publication.updateOne({ _id: req.params.id }, {
          $inc: {dislikes: -1},
          $pull: {usersDisliked: req.body.userId}
        })
        .then(() => res.status(200).json({ message: 'dislikes -1 !'}))
        .catch((error) => {res.status(400).json({error: error});});
      }
    })
    .catch((error) => {res.status(400).json({error: error});});
}
