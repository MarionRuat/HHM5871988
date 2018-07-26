const express = require('express');
const app = express();
const infoRouter = require('./route/info/info');
const  bodyParser  =  require('body-parser');
const  path  =  require('path');
const connection = require('./helper/db.js');

app.use(bodyParser.urlencoded({ extended:  false }));
app.use(bodyParser.json());
app.use(express.static(__dirname  +  '/public'));

app.get('/', function (req, res) {
  res.send('Hello World!')
})



app.use('/info', infoRouter);

// dans le cas d'une route non trouvée, je retourne le code 404 'Not Found'
app.use(function(req, res, next) {
  var  err  =  new  Error('Not Found');
  err.status  =  404;
  next(err);
});

//je lance le serveur node
let  server  =  app.listen( process.env.PORT  ||  5000, function(){
  console.log('Listening on port '  +  server.address().port);
});

module.exports = app;
