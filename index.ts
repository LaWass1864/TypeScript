// variables

let num1:string = '24';
let num2:string;
let numOrString: number | string

// Tableaux
let arr = ['chien', 'chat', 'poisson']
let tableau1: string[] = [];
let tableau: (number | boolean)[] = [];
let jeux = ['sims', 'tomb raider', 'SuperMario']
let last = jeux[jeux.length - 1]

console.log(last);

// Les objects
// Objets
// On ne peut pas ajouter une proprieté comme en JS, il faut crée une interface

interface Player {
    id: number,
    name: string,
    jersey?: number
}

let zidane:Player = {
    id:0,
    name: "Zidane",
}

// Les classes
class Singer {
    id:  number;
    name: string;
    alive: boolean

    constructor(id: number, name: string, alive: boolean)
    {
    this.id = id;
    this.name = name;
    this.alive = alive
    }
}

const prince = new Singer(0, '34', false)

console.log(prince);

