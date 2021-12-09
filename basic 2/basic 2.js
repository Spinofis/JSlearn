'use strict'
// let friends = ['Wacek', 'Zbychu'];
// console.log(friends);
// friends = ['Czesiek', 'Zdzisek', 'Genek'];
// console.log(friends);
// friends.push(1);
// console.log(friends);

const person = {
	firstName:'jhon',
	lastName:'doe',
	fullName:function(){
		return this.firstName + this.lastName;
	}
}
console.log(person.fullName());
const person2 = {
	firstName:'jhon',
	lastName:'doe',
	fullName:function(){
		let firstName='andrzej'
		let lastName='duda'
		return this.firstName + this.lastName;
	}
}
console.log(person2.fullName2);
function test1(){
	let firstName='jhon'
	let lastName='doe'
}