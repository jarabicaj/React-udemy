var nameVar = 'Andrew';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);

function getPetName() {
    const petName = 'Hal';
    return petName;
}
const petName = getPetName();
console.log(petName);

// Block scoping

var fullName = 'Jen Mead';

let firstName;
if(fullName) {
    // let firstName; //Ked je definovana v scope nie je dostupna mimo
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);