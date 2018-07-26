// implémenter l'ensemble des actions de l'API relative aux infos que je veux récupérer
// déclaration des dépendance de routes : avec express router
const  express  =  require('express');
const router = express.Router();
const connection = require('../../helper/db.js');

router.post('/tintin', (req,res,next)=> {
  connection.query("INSERT into tintin (titre, stock, prix, magasin) Values (?,?,?,?)",
    
  [
    req.body.titre,
    req.body.stock,
    req.body.prix,
    req.body.magasin
  ],
),(error,results)=> {
res.send('coucou milou')};
});

router.get('/tintin/titre', (req,res,next)=> {
  connection.query("SELECT titre from tintin",(error, results) => {
    if (error) throw error;
    res.send(JSON.stringify(results));
    console.log(results)
  });
});

module.exports = router;
