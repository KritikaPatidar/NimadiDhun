const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
	title: { type: String, required: true },
	category: { type: String, required: true },
	type: { type: String, required: true },
	lyrics: { type: String, required: true },
	audioUrl: { type: String, required: true },
});

const Song = mongoose.model('Song', songSchema);
module.exports = Song;
