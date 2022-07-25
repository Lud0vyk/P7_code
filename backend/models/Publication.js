// models/Publication.js

/* ******* A REVOIR ******* */
const mongoose = require('mongoose');

const publicationSchema = mongoose.Schema({
  userId: { type: String, required: true },
  userName: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Number, required: true },
  validation: { type: Boolean, required: true },
  imageUrl: { type: String, required: true },
  likes: { type: Number, required: true },
  dislikes: { type: Number, required: true },
  usersLiked: { type: [String], required: false },
  usersDisliked: { type: [String], required: false }
});

module.exports = mongoose.model('Publication', publicationSchema);