// arrays revision

//Array Declaration
let names = ['Andrews', 'Gilbert', 'Salvatores', 'Jones', 'Coopers', 'Blossoms', {
  'club':'serpents',
  'members':[
  {'name':'Jughead Jones', 'serpent': true},
  {'name': 'Sweet Pea', 'serpent': true},
  {'name': 'Cheryl Blossom', 'serpent':true},
  {'name': 'Betty Cooper', 'serpent': false}
    ]
}];

// Array methods

// 1) First property - Length
// console.log(names.length); // gives us the number of elements in the array

// expected out: 7

// 2) Accessing elements - O(1)
// console.log(names[4]) // want cooper especially Betty :)

// 3) Access last element of the array
// Lets 
console.log(names[names.length-1]['club'])



