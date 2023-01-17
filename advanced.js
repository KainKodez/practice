//ternary operation
const ternary = num => {
	num === 5 ?  alert("you win!") : alert("You lose!");
}

const direction = direction => {
	let whathappens;
	switch (direction) { 
	case "forward":
		whathappens = "you found a treasure"
		break;
	case "back":
		whathappens = "You are going the wrong way"
		break;
	}
	return whathappens;
}

// map filter reduce for arrays
const array = [1,2,3,4,5,6,7,8,9,10]
const mapArray = array.map(num => num * 2);
const filterArray = array.filter(num => num > 5);

// objects properties 
let a =5;
let b =3;
let c =100;
const obj = {a,b,c};

//currying and composing
const curry = (a) => (b) => a*b;
const multiby5 = curry(5);
// Destructuring
const obj2 = {
	name: "Kain",
	height: `5'7`,
	weight: 235
};
const {name,height,weight} = obj2;

// Template strings
const name = "Kain"
const template = `this is a template string and my name is ${name}!`



// Arrow functions
const arrowfunction = argument => {
	console.log("This is arrow functions and is the best way to write functions and the cleanest looking");
}
//object.entires object.keys object.values

const obj3 = {
	username1: "santa",
	username2: "elf",
	username3: "Grinch"
};
Object.entries(obj3).map(value => {
	return value[1] + value[0].replace("username", '');
})

Object.entries(obj3).forEach(value => {
	console.log(value);
})

Object.values(obj3).forEach(value=> {
	console.log(value)
})
Object.keys(obj3).forEach((key,index) => {
	console.log(key, obj3[key]);
})

//forEach is used to iterate through an array and execute any code that is written in the function 
//ex.
const animals = ["dog","cat","lion"]
animals.forEach(item => {
	console.log(item);
})

// for of iterating arrays, strings
for (animal of animals) {
	console.log(animal);
}

//for in enumerating- objects

const detailedBasket = {
	apples: 5,
	oranges: 10,
	gapes: 200
}
for (item in detailedBasket) {
	console.log(item)
}

//Optional Chaining operator 
let kain_pokemon = {
  pikachu: {
    species: 'mouse pokemon',
    height: 0.8,
    weight: 25,
    power: 'lightning'
  }
}
let weight2 = kain_pokemon?.raichu?.power ??  'no power'
let kain = "this is practice";

// Nullish Coalescing Operator  




