class Person {
    constructor(name = 'Anonymous', age = 0) {  //default if argument is empty
        this.name = name;                       // individual instances
        this.age = age;
    }
    getGreeting () {
        return `Hi, I am ${this.name}!`;
    }
    getDescription () {
        return `${this.name} is ${this.age} year(s) old.`
    }
}

class Student extends Person { //subclass of class Person
    constructor (name, age, major) {
        super(name, age); //call the parent constructor function
        this.major = major;
    }
    hasMajor() {
        return !!this.major; // if exists -> return true; if not -> return false

    }
    getDescription () {
        let description = super.getDescription();

        if(this.hasMajor()) {
            description += ` Their major is ${this.major}`;
        }
        return description;
    }
}

class Traveler extends Person {
    constructor (name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    getGreeting() {
        let greeting = super.getGreeting();
        if (this.homeLocation) {
            return greeting += ` I'm visiting from ${this.homeLocation}.`;
        }
        return greeting;
    }
}

const me = new Student('Andrew Mead',26,'Computer Science');
console.log(me.getDescription());

const other = new Student();
console.log(other.getDescription());