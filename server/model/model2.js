const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: String,
    age: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    diagnose: String,
    detail: String,
    status: String,
    timestamp: String,
})

const Userdb = mongoose.model('ds_dieutri', schema, 'ds_dieutri');

module.exports = Userdb;