let app = require('express')()

app.set('view engine', 'ejs');

app.get('/', (request, response) => {
	response.render('pages/index', {test :'Salut'})
})

app.get('/about', (request, response) => {
	response.render('pages/about', {page : 'About'})
})

app.listen(3000)