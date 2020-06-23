// 1 variables
// UPD: noy only them
//UPD_2.0: I'll delete few comment lines to check the code later

var firstName = 'Dmitriy'
const lastname = 'Schalimov'
let age = 16


// change variable name
firstName = 'Vlad'

console.log(name)




// 2 Mutation
console.log('Name of the person: ' + firstName +', and his age is: ' + age)
console.log(age.toString())

// new window to confirm information
alert('Name of the person: ' + firstName +', and his age is: ' + age)
// this function is not in real js, this is in the browser

const lastName  = prompt('write your surname')
alert(firstName + ' ' + lastName)




// 3 Operators
const currentYear = 2020
const birthYear = 2004

const personAge = currentYear - birthYear
console.log(personAge)

// math operations
const a = 20
const b = 5

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)




// 4 Data Types
const isProgramer = true
const name = "Dmitriy"
const age = 36
console.log(typeof isProgramer)
console.log(typeof name)
console.log(typeof age)
// boolean  string  number  undefined  null



// 5 Operators precendence
const fullAge = 16
const birthYear = 2004
const currentYear = 2020

// <  >  =  <=  >=
const isFullAge = currentYear - birthYear >= fullAge 

