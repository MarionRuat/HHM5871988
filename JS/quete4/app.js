process.stdin.resume()
process.stdin.setEncoding('utf8')

console.log('How old are you ? ')
process.stdin.on('data', (age) => {
	const annee = new Date().getFullYear()
	let resultat = (annee-age)
			if (isNaN(age)) {
				console.log(`Entrez une date de naissance`)
			}
			
			else if ( age > 0 && age < 99) {
				console.log(`You're date of bird is ${resultat}`)
							}	 			
			
			else {
				console.log(`Vous êtes trop vieux ou pas encore né`);
				
			}


			
	process.exit()
		
	})

