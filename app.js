//step 4 name variable
var myName = "Amanda";

//step 5 states constant
const states = 50;

//step 6 adds two numbers together
var sum = 5 + 4;

//step 8a hello world function
function sayHello() {
    alert("Hello World!");
}
 
//step 8b Calling function
sayHello(); 

//step 9a check age function
function checkAge(name, age){
    if (age < 21) {
        alert("Sorry " + name + ", you aren't old enough to view this page!");
    }
}

//step 9b run through names in checkage function
var charles = {
    name: "Charles",
    age: 21
};

var abby = {
    name: "Abby",
    age: 27
};

var james = {
    name: "James",
    age: 18
};

var john = {
    name: "John",
    age: 17
};

checkAge(charles.name, charles.age);
checkAge(abby.name, abby.age);
checkAge(james.name, james.age);
checkAge(john.name, john.age);

//step 10a favorite veggie array
var veggies = ["corn", "eggplant", "broccoli"];

//step 10b loop through veggies
for (let i = 0; i < veggies.length; i++) {
    console.log(veggies[i]);
}

//step 11 create pet object
var pet = {
    name: "Porsche",
    breed: "DSH"
};

console.log(pet.name, pet.breed);

//step 12a create an array of 5 objects
var friends = [
    {
        name: "Kevin",
        age: 18
    },
    {
        name: "Alex",
        age: 24
    },
    {
        name: "Carolyn",
        age: 32
    },
    {
        name: "Adam",
        age: 20
    },
    {
        name: "Roger",
        age: 25
    }
]

//step 12b loop checkage function for each object
for (var i = 0; i < friends.length; i++) {
    checkAge(friends[i].name, friends[i].age);
}

//step 14 getlength function
function getLength(string){
    return string.length;
}

var length = getLength("Hello World");

if (length % 2 === 0) {
    console.log("The world is nice and even!");
} else {
    console.log("The world is an odd place!");
}