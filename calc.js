var calculation = prompt("How do you want to calulate? ex + - * /")
var calculation2 = calculation;
var prompt1 = prompt("Pick your first number!");
var number1 = parseInt(prompt1);
var prompt2 = prompt("Pick your first number!");
var number2 = parseInt(prompt2);

function calculate(num1, num2) {
	if (calculation2 === "+") {
		var answer = num1 + num2;
	alert(answer);
	} else if (calculation2 === "-") {
		var answer = num1 - num2;
	alert(answer);
	} else if (calculation2 === "*") {
		var answer = num1 * num2;
	alert(answer);
	} else if (calculation2 === "/") {
		var answer = num1 / num2;
	alert(answer);
	}




	
}
calculate(number1, number2);

const greet = ``

function add(a, b) {
return a + b;
}
const add2 = (a, b) => a + b;
// calculation ? expr1 : expr2;

function valid(bool) {
	return bool
}
var answer = valid(false) ? "your awesome" : "your gay"


function game(direction) {
	var whathappens;
	switch (direction) {
		case "forward":
			whathappens = "you move forward";
			break;
		case "back":
			whathappens = "you move back";
			break

	}
	return whathappens;
}

const obj = {
	player: "kain",
	level: 100,
	archetype: "Brute"
}
const { player, level } = obj;



const first = () => {
	const greet = 'Hi';
	const second = () => {
		alert(greet);
	}
	return second;
}

const newFunc = first();
newFunc();

let array = [1,2,3,4,5,6,7];

const newArray = array.forEach((num) => {
	double.push(num * 2);
});
const double = []

const mapArray = array.map((num) => {
	return num * 2;
})
// instantiation
class Player {
	constructor(name, type) {
		console.log(`player`, this);
		this.name = name;
		this.type = type;
	}
	introduce() {
		console.log(`Hi I am ${this.name}, Im a ${this.type}`);
	}
}
class Titan extends Player {
	constructor(name, type) {
		super(name,type) 
		console.log(`Titan`, this);
	}
	play() {
		console.log(`I am a ${this.type} and I will SMASH YOU!!!!`);
	}
}
class Wizard extends Player {
	constructor(name,type) {
		super(name,type);
		console.log(`wizard`, this);
	}
	play() {
		console.log(`Weeeee Im a ${this.type}`);
	}
}

const wizard1 = new Wizard(`shelly`, `Healer`);
const titan1 = new Titan(`Kain`, `Stormbreaker`);
const wizard2 = new Wizard(`Mark`, `ice mage`);

































