const axios = require('axios');
const querystring = require('querystring');
const PORT = process.env.PORT || 8080
exports.homeRoutes = (req, res) => {
    // Make a get request to /api/users
    axios.get(`http://localhost:${PORT}/api/ds_benhnhan`)
        .then(function (response) {
            res.render('index', {users: response.data});
        })
        .catch(err => {
            res.send(err);
        })


}

exports.add_user = (req, res) => {
    axios.get(`http://localhost:${PORT}/api/ds_dieutri`)
        .then(function (response) {
            res.render('add_user', {users: response.data, id: req.query});
        })
        .catch(err => {
            res.send(err);
        })
}

exports.ds_dieutri = (req, res) => {
    // Make a get request to /api/users
    axios.get(`http://localhost:${PORT}/api/ds_dieutri`)
        .then(function (response) {
            res.render('index', {users: response.data});
        })
        .catch(err => {
            res.send(err);
        })
}

exports.tra_cuu = (req, res) => {
    axios.get(`http://localhost:${PORT}/api/ds_benhnhan`)
        .then(function (response) {
            res.render('tra_cuu', {users: response.data, id: req.query});
            console.log(response.data);
        })
        .catch(err => {
            res.send(err);
        })
}

exports.tra_cuu2 = (req, res) => {
    console.log(req.query);
    axios.get(`http://localhost:${PORT}/api/ds_dieutri`)
        .then(function (response) {
            res.render('tra_cuu', {users: response.data, id: req.query});
            console.log(response.data);
        })
        .catch(err => {
            res.send(err);
        })
}

exports.contrl = (req, res) => {
    console.log(req.query);
    axios.get(`http://localhost:${PORT}/api/ds_dieutri`)
        .then(function (response) {
            res.render('control_panel', {users: response.data, id: req.query});
            console.log(response.data);
        })
        .catch(err => {
            res.send(err);
        })
    // res.render('control_panel');
}

exports.test = (req, res) => {
    axios.get(`http://localhost:${PORT}/api/ds_benhnhan`)
        .then(function (response) {
            res.render('test', {patients: response.data});
            console.log(response.data);
        })
        .catch(err => {
            res.send(err);
        })
}

exports.test2 = (req, res) => {
    axios.get(`http://localhost:${PORT}/api/ds_benhnhan?id=${req.query.id}`)
        .then(function (response) {
            res.render('test2', {patient: response.data, id: req.query.id});
            console.log(response.data);
        })
        .catch(err => {
            res.send(err);
        })
}

exports.test3 = (req, res) => {
    axios.get(`http://localhost:${PORT}/api/ds_dieutri`)
        .then(function (response) {
            res.render('test3', {patients: response.data});
            console.log(response.data);
        })
        .catch(err => {
            res.send(err);
        })
}