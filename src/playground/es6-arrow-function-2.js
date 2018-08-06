// arguments objekt - no longer bound with arrow functions

// const add = function.js (a, b) {
//     console.log(arguments);
//     return a+b;
// };
// console.log(add(55,1));

// const add = (a, b) => {
//     console.log(arguments); // in arrow function.js it does not work
//     return a+b;
// };
// console.log(add(55,1));

// this keyword - no longer bound

const user = {
    name: 'Jozef',
    cities: ['Cadca', 'New York', 'Philadelphia'],
    printPlacesLived: function () {
        // const that = this;      // we have to bound
        
        this.cities.forEach((city) => { //it does not bind with its value unlike regular functions !!!!
            console.log(this.name + ' has lived in ' + city)
        })
    }
};

user.printPlacesLived();

const multiplier = {
    numbers: [1, 2, 3, 4, 5],
    multiplyBy: 2,
    multiply () {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};

console.log(multiplier.multiply());