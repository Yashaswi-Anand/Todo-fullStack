const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/TODOAPP_FULLSTACK');

const db = mongoose.connection;

db.on('error', console.error.bind(console,'Error conection on mongodb'));

db.once('open', function(){
    console.log('Connected to database :: MongoDB');
});

module.exports = db;