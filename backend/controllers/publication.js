// controllers/publication.js

const Publication = require('../models/publication');
const fs = require('fs');
const user = require('../models/user');

// création d'une nouvelle publication
exports.createPublication = (req, res, next) => {

  const publicationObject = req.body;
  const publication = new Publication({
    ...publicationObject,
    imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
    validation: false,
    likes: 0,
    dislikes: 0,
  });
  publication.save()
    .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
    .catch(error => res.status(400).json({ error }));
};

// pour afficher la publication sélectionnée
exports.getOnePublication = (req, res, next) => {
  Publication.findOne({ _id: req.params.id })
    .then((publication) => { res.status(200).json(publication)})
    .catch((error) => {res.status(404).json({error: error});}
  );
}

// pour modifier une publication
exports.modifyPublication = (req, res, next) => {
  const publicationObject = req.file ?
    {
      ...JSON.parse(req.body.publication),
      imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    } : { ...req.body }

    // pour supprimer la photo dans le dossier
    if(Publication) {
      Publication
      .findOne({ _id: req.params.id })
      .then(publication => {

        const filename = publication.imageUrl.split('/images/')[1];
        fs.unlink(`images/${filename}`, (error) => {
          if(error) throw error;
        })
      })
    .then(() => res.status(200).json({ message: 'Objet modifié !'}))
    .catch(error => res.status(404).json({ error }))
    }

    Publication.updateOne({ _id: req.params.id }, { ...publicationObject, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Objet modifié !'}))
    .catch(error => res.status(400).json({ error }));
}

// pour supprimer une publication
exports.deletePublication = (req, res, next) => {
    Publication.findOne({ _id: req.params.id })
    .then(publication => {
      const filename = publication.imageUrl.split('/images/')[1];
      fs.unlink(`images/${filename}`, () => {
        Publication.deleteOne({ _id: req.params.id })
          .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
          .catch(error => res.status(400).json({ error }));
      });
    })
    .catch(error => res.status(500).json({ error }));
}

// pour afficher toutes les publications
exports.getAllPublication = (req, res, next) => {
  Publication.find()
    .then((publications) => {res.status(200).json(publications);})
    .catch((error) => {res.status(400).json({error: "no publication"});});
}

// pour valider une publication
exports.validationPublication = (req, res, next) => {

  // vérification de l'admin
  if(req.user.role === admin) {

    Publication.updateOne({ _id: req.params.id }, { ...publicationObject, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Objet validé !'}))
    .catch(error => res.status(400).json({ error }));
  }
}
