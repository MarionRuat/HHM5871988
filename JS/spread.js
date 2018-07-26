// const address = {
//     city: "Lyon",
//     state: "FR",
//     zip: 69001
//   };

  // const sportList = ['Football', 'BasketBall']
  // const otherSportList = ['Boxe', 'Judo']

//   const address = { 
//   adresse: "14 Rue Mandar",
//   ville: "Paris"
//  };

//   const gps  = { 
//     long: 45.675757, 
//     lat: 4.55333
//   };

//   const total = { ...address, ...gps };
//   console.log(total);

  // let fruits = ['pomme', 'poire', 'abricot']
  // let vegetables = ['salade', 'asperge']
  // let words = ['automne', 'hiver', ...fruits, 'voiture', ...vegetables]
  // console.log(words);
  // // affiche [ 'automne', 'hiver', 'pomme', 'poire', 'abricot', 'voiture', 'salade', 'asperge' ]

  // const myString = "wilders"
  // console.log([...myString]) // ["w", "i", "l", "d", "e", "r", "s"]

  
  // var obj1 = { toto: 'truc', x: 42 };
  // var obj2 = { toto: 'bidule', y: 13 };
  
  // var clone = { ...obj1 };
  // // Object { toto: 'truc', x: 42 }

//   values = ['pomme', 'poire', 'abricot']

//  function foods(keys, ...values) {
//   let object = {};
//   object[keys] = values; 
//   return object;
// }

// const obj = foods('fruits', 'pomme', 'poire', 'abricot')

const address = {
  city: "Lyon",
  state: "FR",
  zip: 69001
};

const sportList = ['Football', 'BasketBall']
const otherSportList = ['Boxe', 'Judo']

const list =[...sportList, ...otherSportList];
console.log(list)
// function display(value, maListe={}){
//   sportList.push(...otherSportList)

// }
