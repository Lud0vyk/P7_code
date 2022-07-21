// routes/publication.js

// création d'un router
const express = require('express');
const router = express.Router();

// importation du middleware d'autentification
const auth = require('../middleware/auth');
// importation du middleware multer
const multer = require('../middleware/multer-config');

// importation du publicationControllers
const publicationCtrl = require('../controllers/publication');

//importation du controller like.js
const like = require('../controllers/like');


// route /api/stuff pour aller chercher les objets en base de données
router.get('/', auth, publicationCtrl.getAllPublications);
// route POST pour envoyer des objets et fonction middleware
router.post('/', auth, multer, publicationCtrl.createPublication);
// route pour afficher un seul objet grâce à l'id dans la requête du frontend
router.get('/:id', auth, publicationCtrl.getOnePublication);
// route PUT pour modifier l'objet
router.put('/:id', auth, multer, publicationCtrl.modifyPublication);
// route DELETE pour supprimer un objet
router.delete('/:id', auth, publicationCtrl.deletePublication);
// route pour les likes et les dislikes
router.post('/:id/like', auth, like.likeFromUser);
// route pour valider une publication
router.put('/', auth, publicationCtrl.validationPublication);


module.exports = router;