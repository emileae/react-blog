// function add (a, b){
//   return a + b;
// };
//
// console.log(add(3, 1));
//
// var toAdd = [9, 5];
//
// console.log(add(...toAdd));

var groupA = ['Aa', "Bb"];
var groupB = ['Cc', 'Dd', ...groupA];
// var final = [3, ...groupA, ...groupB];
//
// console.log(final);

var person = ['Andrew', 25];

function greet (name, age){
  console.log('hello ' + name + ' you are ' + age);
};

greet(...person);

// function yo (names){
//   for (var i=0; i< names.length; i++){
//     console.log("Hi "+names[i]);
//   };
// };
//
// yo(groupB);

groupB.forEach(function(name){
  console.log("Hi " + name);
});
