//Getter and setter methods and a statics method

class personcl {
	constructor(name, year) {
		this.set_fullname = name;
		this.birthYear = year;
	}

	//
	set set_fullname(name) {
		console.log(name);
		if (name.includes(' ')) this._fullname = name;
		else alert(`${name} is not a full name`);
	}

	get get_fullname() {
		return this._fullname;
	}

	get get_age() {
		return 2022 - this.birthYear;
	}

	//static method
	static hey() {
		console.log('Hey there...');
		console.log(this);
	}
}

const chirag = new personcl('Chirag Parmar', 2000);
console.log(chirag);
console.log(chirag.get_fullname);
console.log(chirag.get_age);
personcl.hey();
