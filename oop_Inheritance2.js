//Inheritance Between Classes ES6 Classes

class personcl {
	constructor(name, year) {
		this.set_fullname = name;
		this.birthYear = year;
	}

	set set_fullname(name) {
		if (name.includes(' ')) this._fullname = name;
		else alert(`${name} is not a full name`);
	}

	get get_fullname() {
		return this._fullname;
	}
}

class Studentcl extends personcl {
	constructor(fullname, birthYear, course) {
		super(fullname, birthYear);
		this.course = course;
	}

	introduce() {
		console.log(
			`My name is ${this.get_fullname} and I study in ${this.course}`
		);
	}

	clacAge() {
		console.log(`I'm ${2022 - this.birthYear} old.`);
	}
}

const chirag = new Studentcl('Chirag Parmar', 2000, 'Computer Science');
// console.log(chirag);
chirag.introduce();
chirag.clacAge();
