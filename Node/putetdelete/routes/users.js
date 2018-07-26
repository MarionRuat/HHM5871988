var express = require('express');
var router = express.Router();
const app = express();

/* GET users listing. */
router.get('/:prenom([a-zA-Z]+)', function(req, res, next) {
	res.render('update-user', { prenom:req.params.prenom});
});

router.put('/:prenom([a-zA-Z]+)', function(req,res){
	res.send('Hey ! The new name is '+req.params.prenom);
});

router.get('/:numero(\\d+)', function(req, res, next) {
	res.render('delete-user', { numero : req.params.numero});
});

router.delete('/:numero(\\d+)', function(req, res, next) {
	res.send('No more user with id '+ req.params.numero);
});

/* GET user with ID. */

router.put('/:id(\\d+)', function(req, res, next) {
  res.send('Hey ! It\'s a GET with ID ' + req.params.id);
});



router.get('/:name([a-zA-Z]+)', function(req, res, next) {
  res.send('Hey ! My name is ' + req.params.name);
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
