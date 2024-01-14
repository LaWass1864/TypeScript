"use strict";
// variables
let num1 = '24';
let num2;
let numOrString;
// Tableaux
let arr = ['chien', 'chat', 'poisson'];
let tableau1 = [];
let tableau = [];
let jeux = ['sims', 'tomb raider', 'SuperMario'];
let last = jeux[jeux.length - 1];
console.log(last);
let zidane = {
    id: 0,
    name: "Zidane",
};
// Les classes
class Singer {
    constructor(id, name, alive) {
        this.id = id;
        this.name = name;
        this.alive = alive;
    }
}
const prince = new Singer(0, 'theWeeknd');
console.log(prince);
// Functions
const sayMyName = (name) => {
    console.log(`bonjour ${name}`);
};
sayMyName('Wass');
const ageducapitaine = (age, size) => {
    if (size) {
        console.log(`La taille du capitaine est de ${size} cm et il est agé de : ${age}`);
    }
    else {
        console.log(`Le capitaine est agé de : ${age} ans`);
    }
};
ageducapitaine(16, 185);
// Enum = pour les roles 
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["PREMIUM"] = 1] = "PREMIUM";
    Role[Role["BASIC"] = 2] = "BASIC";
})(Role || (Role = {}));
const user1 = {
    name: "Julien",
    attributes: [34, 'author'],
    // Si membre admin, membre premium
    role: Role.BASIC
};
if (user1.role === Role.ADMIN) {
    console.log('connexion spéciale');
}
console.log(user1.role);
