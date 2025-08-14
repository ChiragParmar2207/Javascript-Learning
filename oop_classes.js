class personcl {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	//Instance Method
	//this method will be added to .prototype property
	calAge() {
		console.log(2022 - this.age);
	}

	greet() {
		console.log(`Hello ${this.name}`);
	}
}

const chirag = new personcl('Chirag', 2000);
chirag.greet();
chirag.calAge();
