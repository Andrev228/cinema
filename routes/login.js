var express = require('express');
var bcrypt  = require('bcrypt');
var jwt     = require('jsonwebtoken');
var router  = express.Router();
var users   = require('../db/models/Users.js');
var Promise = require('bluebird');

router.get('/', function (req, res, next) {
    var result = jwt.decode(req.cookies.token);
    if (result) {
        res.send(JSON.stringify({login: result.login}))
    }
});


router.post('/', function(req, res, next) {
    const saltRounds = 10;
    var data = {
        login: req.body.login,
        password: req.body.password
    };

    function sendTokenToClient(data) {
        jwt.sign({id: data._id, login: data.login}, 'test', function (err, token) {
            res.cookie('token', token).send(JSON.stringify({login: data.login}));
        })
    }

    if (!/^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/.test(data.login) ||
        !/[A-Za-z0-9]/.test(data.password))  {
        res.status(403).send()
    } else {
            users.findOne({login: data.login})
            .then(function (res) {
                if (res) {
                    if (bcrypt.compareSync(data.password, res.password)) {
                        sendTokenToClient(res);
                        return Promise.reject();
                    } else {
                        throw new Error('Неправильный пароль');
                    }
                }
                else {
                    return bcrypt.hashSync(data.password, saltRounds);
                }
            })
            .then(function (hash) {
                return new users({
                    login: data.login,
                    password: hash
                });
            })
            .then(function (user) {
                return user.save()
            })
            .then(function (result) {
                if (result) {
                    sendTokenToClient(result);
                } else throw new Error()
            })
            .catch(function (err) {
                next(err);
            })
    }

});

module.exports = router;
