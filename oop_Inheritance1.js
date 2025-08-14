// Inheritance Between Classes Constructor Functions

const Person = function (firstName, birthYear) {
	this.firstName = firstName;
	this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
	return 2022 - this.birthYear;
};

const Student = function (firstName, birthYear, course) {
	Person.call(this, firstName, birthYear);
	this.course = course;
};

Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
	return `My Name is ${this.firstName} and I study ${this.course}`;
};

const mike = new Student('Mike', 1998, 'MCA');
console.log(mike.introduce());
console.log(mike.calcAge());

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

console.log(mike.__proto__);
