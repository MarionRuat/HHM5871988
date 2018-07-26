var express = require('express');
var router = express.Router();
const multer  = require('multer');
const upload = multer({ dest: 'tmp/' });
const fs = require('fs');
const Session = require('express-session');
const FileStore = require('session-file-store')(Session);

router.get('/session-in', (req, res, next) => {
req.session.song='be bop a lula' //initialisation de la variable
res.end();//stop la requête et stock la variable
});

router.get('/session-out', (req, res, next) => {
res.send(req.session.song)//receptionne la requête et affiche
});


/* GET home page. */


router.get('/coucou-pug', function(req, res, next) {
  res.render('coucou', { sayHello:'Hello budy !' });
});

router.get('/upload',function(req,res,next) {
  res.render('upload');
});

router.post('/test', upload.array('monfichier',3), function (req, res, next) {
  for (var i=0;i<req.files.length;i++){
    if (req.files[i].size>3145728) {
      res.send('Votre fichier est trop lourd');
    }
      fs.rename(req.files[i].path, 'public/images/' + req.files[i].originalname, function(err){
    	    if (err) {
    	        res.send('problème durant le déplacement');
    	    } else {
    	        res.send('Fichier uploadé avec succès');
    	    	console.log(req.file);
    	    }
        });
    };
});


module.exports = router;
