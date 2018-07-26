var express = require('express');
var router = express.Router();
const multer  = require('multer');
const upload = multer({ dest: 'tmp/' });
const fs = require('fs');

/* GET home page. */
router.get('/coucou-pug', function(req, res, next) {
  res.render('coucou', { sayHello:'Hello budy !' });
});

router.get('/upload',function(req,res,next) {
  res.render('upload');
});

router.post('/test', upload.array('monfichier'), function (req, res, next) {
  for (var i=0;i<req.files.length;i++){
    if (req.files[i].size>3145728) {
      res.send('Votre fichier est trop lourd');
    }else if (req.files[i].mimetype !== 'image/png') {
      res.send('Votre fichier n\'est pas une image')
    }else {
      fs.rename(req.files[i].path, 'public/images/' + req.files[i].originalname, function(err){
    	    if (err) {
    	        res.send('problème durant le déplacement');
    	    } else {
    	        res.send('Fichier uploadé avec succès');
    	    	console.log(req.file);
          }

        });
    }
  }
});


module.exports = router;
