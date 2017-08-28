var express  = require('express');
var router   = express.Router();
var comments = require('../db/models/Comments');
var jwt      = require('jsonwebtoken');


router.get('/', function (req, res, next) {
    res.render('index');
});


router.get('/api', function(req, res, next) {

    var user_data = jwt.decode(req.cookies.token);
    comments.find()
        .then(function(result) {
            return JSON.parse(JSON.stringify(result));
            })
        .then(function (res) {
            return res.map(function (comment) {
                user_data ? comment.current = (comment.name === user_data.login) : comment.current = false;
                comment.editable = false;
                return comment;
            });
        })
        .then(function(comments) {
            res.send(JSON.stringify({
                login: user_data ? user_data.login : '',
                comments: comments
            }));
        })
        .catch(function (err) {
            next(err);
        })
});

router.put('/api', function(req, res, next) {
    comments.findByIdAndUpdate(req.body.id,
        {
            $set: {
                comment: req.body.comment
            }
        }, function(err) {
        err ? next(err) : res.status(200).send();
    });

});

router.post('/api', function(req, res, next) {
    var data = {
        name: req.body.name,
        comment: req.body.comment
    };
    var comment = new comments(data);
    comment.save(function(err, comment) {
        err ? next(err) : res.send(
            JSON.stringify({id: comment._id})
        );
    });
});

router.delete('/api', function(req, res, next) {
    comments.deleteOne({ _id: req.body.id }, function (err) {
        !!err ? next(err) : res.status(200).send();
    })
});

module.exports = router;
