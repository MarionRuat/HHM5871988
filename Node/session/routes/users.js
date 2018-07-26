var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Hey ! It\'s a GET');
});

/* GET user with ID. */
router.put('/:id(\\d+)', function(req, res, next) {
  res.send('Hey ! It\'s a GET with ID ' + req.params.id);
});

/* POST user creation. */
router.post('/', function(req, res, next) {
  res.send('Hey ! It\'s a POST');
});

/* PUT user with bob. */
router.put('/bob', function(req, res, next) {
  res.send("Hey ! my name is bob");
});

// /* DELETE user with ID. */
router.delete('/:id(\\d+)', function(req, res, next) {
  res.send("Hey it's a DELETE ID " + req.params.id);
});

module.exports = router;
