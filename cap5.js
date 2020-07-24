//To get the answer just do a console.log(QX); X is the number of the question

var arrays = [[1, 2, 3], [4, 5], [6]]

//Using reduce method to concatenate an array of arrays.
const Q1 = arrays.reduce(function(array,b){
    return array.concat(b)
});

//Average of the difference between the age of mothers and their children using:
var ANCESTRY_FILE = require('./ANCESTRY_FILE');
const { indexOf } = require('./ANCESTRY_FILE');
var ancestry = JSON.parse(ANCESTRY_FILE);

function average(array) {
    function plus(a, b) { return a + b; }
    return array.reduce(plus) / array.length;
  }
  
  var byName = {};
  ancestry.forEach(function(person) {
    byName[person.name] = person;
  });
/*This function below returns two arrays, the first one is an array of objects
and the objects is the mothers of the respective persons, the second one is
an array of numbers which contains the age difference between the mothers
and their respective children */
function hasKnownMother(){
  var mothers = []
  var diff = []
  for(i=0;i<ancestry.length;i++){
    mothers.push(byName[ancestry[i].mother])
    if(mothers[i] != undefined){
      diff.push(ancestry[i].born - mothers[i].born);
    }
  }
  return diff
}
/* Now we can work with the diff array in average function */ 
const Q2 = average(hasKnownMother()); 

/* In this example, we have to return the average for the age
of persons based in the century when they lived */
//first, I'll add a property called century to my object person in ancestry array
ancestry.forEach(function(person){
  person.century = Math.ceil(person.died/100)});
/*this function below get a century as element 
and return the values for age of people who lived
in that century as an array*/  
function groupBy(element){
  cent = []
  ancestry.map(person => {
    if(person.century == element){
      cent.push(person.died-person.born) 
    }
  })
  return cent;
};
/* this function map us the centuries that exists
in our ancestry array and then organize them using sort*/
function getCents(){
  cents = []
  ancestry.map(person => {
    cents.indexOf(person.century) == -1 ?
    cents.push(person.century) :
    null;
  })
  return cents.sort()
};
/*Here is the answer*/
var cents = getCents()
for(i in cents){
   var Q3 = cents[i]+": "+Math.round(average(groupBy(cents[i]))*10)/10;
   //console.log(Q3);
  }
/*Alternative solution:*/
//getCents().map(century => `${century}: ${Math.round(average(groupBy(century))*10)/10}`)


/* Now we will make functions that do tests with the arrays to return Booleans
asking if EVERY terms of the array respond to the action or if SOME of then do it */
function every(array,action){
  for (var i = 0; i < array.length-1; i++)
    var state = action(array[i]) && action(array[i+1]);
  return state;
}

function some(array,action){
  for (var i = 0; i < array.length-1; i++){
    if(action(array[i])){
      var state = true;
      break
    }
    else{
      var state = action(array[i]) || action(array[i+1])
    }
  }
  return state
}
/* I didn't prepared a var for this question, so
if you want the answers just remove the "//" from console.log */ 
//console.log(every([NaN, NaN, NaN], isNaN));
//console.log(every([NaN, NaN, 4], isNaN));
//console.log(some([NaN, 3, 4], isNaN));
//console.log(some([2, 3, 4], isNaN));