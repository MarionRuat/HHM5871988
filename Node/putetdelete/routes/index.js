var express = require('express');
var router = express.Router();
const multer  = require('multer');
const upload = multer({ dest: 'tmp/' });
const fs = require('fs');

/* GET home page. */
router.get('/coucou-pug', function(req, res, next) {
  res.render('coucou', { sayHello:'Hello budy !' });
});


module.exports = router;
