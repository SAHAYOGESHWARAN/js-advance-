// memory storage

// primitive types : stored on the stack
let name = 'saha';
let age = 25;

// reference types: stored on the heap
let person = {
    name: 'gokul',
    age: 20,
};

let newName = name;
newName = 'stepan';

let newPerson = person;
newPerson.name = 'vetha';

console.log(person.name);




// Output will be 'vetha'
