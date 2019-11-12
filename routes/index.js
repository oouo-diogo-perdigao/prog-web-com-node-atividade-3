const express = require('express');
const router = express.Router();
const Products = require('../store/Products');
const Comment = require('../store/Comment');

/* GET home page. */
router.get('/', function(_, res) {
	Products.get().then(function(products) {
		res.render('index', { products });
	});
});

router.get('/products/:id', function(req, res, next) {
	Products.getById(req.params.id).then(function(products) {
		const query = Comment.find({ id: req.params.id });
		query.exec(function(err, comments) {
			console.warn(comments);
			res.render('comment', { products, comments });
		});
	});
});

router.post('/products/:id', function(req, res, next) {
	Comment.create({
		id: req.params.id,
		author: req.body.commentAuthor,
		comment: req.body.commentPost
	});

	Products.getById(req.params.id).then(function(products) {
		const query = Comment.find({ id: req.params.id });
		query.exec(function(err, comments) {
			console.warn(comments);
			res.render('comment', { products, comments });
		});
	});
});

module.exports = router;
