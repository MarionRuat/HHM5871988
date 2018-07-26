http://localhost/phpmyadmin/

Connexion avec la base de donnée en post


EN BACK

const connection = require('../../helpers/db.js');

router.post('/signup',(req,res,next) => {
  let hash = bcrypt.hashSync(req.body.password, 10);
  connection.query("INSERT into users (email,password,name,lastname) Values (?,?,?,?)",
[
  req.body.email,
  req.body.password,
  req.body.name,
  req.body.lastname
]
  ,function(error){
    if (error)
    res.status(500).json({ flash:  error.message });
else
    res.status(200).json({ flash:  "User has been signed up !"
})
})
} );



const mysql = require('mysql');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'jecode4wcs',
  database : 'odyssey'
})

connection.connect(function(err){
if(!err) {
    console.log("Database is connected");
} else {
    console.log("Error while connecting with database");
}
});
module.exports = connection;



EN FRONT 

  handleSubmit=(e)=>{

    e.preventDefault();
   console.log(JSON.stringify(this.state,1,1));

   fetch("/auth/signup",
   {
       method:  'POST',
       headers:  new  Headers({
           'Content-Type':  'application/json'
       }),
       body: JSON.stringify(this.state),
   })
   .then(res  =>  res.json())
   .then(
       res  =>  this.setState({"flash":  res.flash}),
       err  =>  this.setState({"flash":  err.flash})
   )
  //  this.props.history.push('/');
  }


Faire un fetch 


Surcharger material ui
 
const styles =  theme => ({
  toto: {
    backgroundColor: 'green'
  },
  gregre:{
    backgroundColor: 'brown'
  }
});

class Carousel extends Component {
    render() {
      const { classes } = this.props;
      return (
      <AutoRotatingCarousel
          classes={{elevation:classes.toto}} /mofifier la classe en material
          className={classes.gregre} créer une classe pour material

          >


const styles ={
	list : {
		width: 250
	}
}
va avec des className ={classes.list}


à la fin du composant

export default withStyles(styles)(Moncomposant);



ou 

const IconStyle = {
  fontSize: 20,
};

<Icon style= {IconStyle} >


ou <CardContent style={{ 	backgroundColor:'red'}}

  Ajouter une icone avec material ui



  classe Name



  ternaire

  {this.state.images.length > 0 ? (<ImageSearch images={this.state.images} /> ): null}

  function getFee(isMember) {
  return (isMember ? "$2.00" : "$10.00");
}

raccourcis this.state

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      title : "Mon titre"
    }

  render() {
    const {title} = this.state
    return (
<Title myCurrentTitle={title} /> c'est égal à {this.state.title}
    	)


faire un map

        {listPersonnages.map((perso, key) => 
    <li className="Personnage">
        {perso.name} / {perso.alias} / {perso.age}
    </li>)}
 </ul>

 ou 

 data.map((listevoyageur, key)=>{
          return(
            <div key={listevoyageur.id}>
            <p>firstname :{listevoyageur.firstname}</p>
            <p>lastname :{listevoyageur.lastname}</p>
            </div>
          )
      })

Fetch et map
  componentDidMount() { 
      fetch('http://localhost:1234/travelers')
      .then(results =>{
        return  results.json();
      }).then (data=>{
        let voyageurs =data.map((listevoyageur, key)=>{
          return(
            <div key={listevoyageur.id}>
            <p>firstname :{listevoyageur.firstname}</p>
            <p>lastname :{listevoyageur.lastname}</p>
            </div>
          )
      })
      this.setState({voyageur:voyageurs})
      
      })
    }

 récupérer des éléments en dynamque : 

 `${this.state.apiUrl}/?key=${this.state.apiKey}
          &per_page=${this.state.amount}&q=${this.state.searchText}
          &image_type=photo`


true et false
 