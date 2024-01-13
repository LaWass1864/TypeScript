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
const prince = new Singer(0, 'Prince', false);
console.log(prince);
