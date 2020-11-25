/** @format */

function HashTable() {
	this.table = new Array(137);
	this.simpleHash = simpleHash;
	this.betterHash = betterHash;
	this.display = display;
	this.put = put;
	// this.get = get;
}

function simpleHash(data) {
	let total = 0;
	for (let i = 0; i < data.length; i++) {
		total += data.charCodeAt(i);
	}
	return total % this.table.length;
}

function betterHash(string) {
	let primeNum = 31;
	let total = 0;

	for (i = 0; i < string.length; i++) {
		total += primeNum * total + string.charCodeAt(i);
	}

	total = total % this.table.length;
	if (total < 0) {
		total += this.table.length - 1;
	}
	return parseInt(total);
}

// put function will insert or place a data in the hash table.
// it will get the array index value from the simpleHash method, then store that data element in that position.
function put(data) {
	const position = this.simpleHash(data);
	this.table[position] = data;
}

function put(data) {
	const position = this.betterHash(data);
	this.table[position] = data;
}

// this function will display the data in the hash table
function display() {
	const number = 0;
	for (let i = 0; i < this.table.length; i++) {
		if (this.table[i] !== undefined) {
			console.log(`${i} ${this.table[i]}`);
		}
	}
}

// Haging Integers

// this function allows a max and a min random number

function randomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

// this function will loop thru the array of student data,then will generated an ID for a student,
// which after that it does also generates a random grade for the student and it is concatenated to the student ID.

function studentData(array) {
	for (let i = 0; i < array.length; i++) {
		let num = "";
		for (let j = 1; j <= 9; j++) {
			num += Math.floor(Math.random() * 10);
		}
		num += randomInt(50, 100);
		array[i] = num;
	}
}

const numStudents = 10;
const arraySize = 97;
const idLength = 9;
const students = new Array(numStudents);
studentData(students);

console.log(`Students Data \n`);
for (let i = 0; i < students.length; i++) {
	console.log(`${students[i].substring(0, 8)} ${students[i].substring(9)}`);
}

console.log(`\n\n Data Distribution: \n`);
const hash = new HashTable();
for (let i = 0; i < students.length; i++) {
	hash.put(students[i]);
}
hash.display();
