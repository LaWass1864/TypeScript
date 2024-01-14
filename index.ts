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
    alive?: boolean

    constructor(id: number, name: string , alive?: boolean)
    {
    this.id = id;
    this.name = name;
    this.alive = alive
    }
}

const prince = new Singer(0, 'theWeeknd')

console.log(prince);

// Functions

const sayMyName = (name?: string) => {
    console.log(`bonjour ${name}`);
}

sayMyName('Wass');

const ageducapitaine = (age: number | string, size?:number): void => {
    if (size) {
        console.log(`La taille du capitaine est de ${size} cm et il est agé de : ${age}`);
    } else {
    console.log(`Le capitaine est agé de : ${age} ans`);
    }
}
ageducapitaine(16, 185)

// Enum et Tuple
// Tuple
interface User {
    name: string;
    attributes: [number | boolean, string]
    role: Role
}
// Enum = pour les roles 
enum Role {ADMIN, PREMIUM, BASIC}


const user1:User = {
    name: "Julien",
    attributes: [34, 'author'],
    // Si membre admin, membre premium
    role:  Role.BASIC
}
if (user1.role === Role.ADMIN) {
    console.log('connexion spéciale');
    
    
}
console.log(user1.role);

