var mongoose = require('mongoose');

var commentsSchema = new mongoose.Schema({
    name: String,
    comment: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

var comments = mongoose.model('comments', commentsSchema);

module.exports = comments;

