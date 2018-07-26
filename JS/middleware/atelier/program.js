// var somme=0;
// 	for(i=2;i<process.argv.length;i++){
// 		somme+=Number(process.argv[i]);
// 	}
// console.log(somme);

var fs = require('fs') ;
function synchrone(param){
	let data=fs.readFileSync(param[2])
	console.log(data.toString().split('\n').length-1);

}
synchrone(process.argv);

Solution

var fs = require('fs')
    
var contents = fs.readFileSync(process.argv[2])
var lines = contents.toString().split('\n').length - 1
console.log(lines)
