var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var options = {
    useMongoClient: true
};

mongoose.connect('mongodb://localhost/cinema', options);

module.exports = mongoose;