var Post = require('../../models/post');
var websockets = require('../../websockets');

var router = require('express').Router()

router.get('/', function(req, res, next){
	Post.find().sort('-date').exec(function(err, posts){
		if (err) {return next(err)}
		res.json(posts);
	})
})
router.post('/', function(req, res, next){

	console.log('posts.js : ', req.auth);

	var post = new Post(
			{
				username : req.auth.username
				,body : req.body.body
			}

		)
	post.save(function(err, post){
		if (err) {return next(err)}

		websockets.brodcast('new_post',post);
		res.json(201, post)
	})
})

module.exports = router