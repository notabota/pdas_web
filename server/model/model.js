const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    _id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    diagnose: String,
    timestamp: String,
    detail: String,
    image: String,
    comments: [Object],
})

const Userdb = mongoose.model('ds_benhnhan', schema, 'ds_benhnhan')

module.exports = Userdb;