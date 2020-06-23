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




// 6 If-else
const courseStatus = 'fail'

if (courseStatus === 'ready'){
    console.log('course is ready')
} else if (courseStatus === 'pending'){
    console.log('course is in developing mode')
} else {
    console.log('course is not here')
}

//  there is a difference between == and === in js for data types




// 7 Boolean logic
// logic operators in js are like && or ||





// 8 Functions
function calculateAge(year) {
    return 2020 - year
}

const myAge = calculateAge(2004)
console.log(myAge)

function logInfoAbout(name, year) {
    const age = calculateAge(year)
    conslole.log('person is ' + age + 'age, and his name is ' + name)

}




// 9 Arrays
const cars = ['mazda', 'mersedes', 'ford']
console.log(cars.length)
console.log(cars)




// 10 Cycles
const cars = ['mazda', 'mersedes', 'ford']

for (let i = 0; i< cars.length; i++) {
    console.log(i)
    const car = cars[i]
    console.log(car)
    
}