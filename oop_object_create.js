const PersonProto = {
	init(firstName, birthAge) {
		this.firstName = firstName;
		this.birthAge = birthAge;
	},

	clacAge() {
		return 2022 - this.birthAge;
	},
};

// First way without init method
const chirag = Object.create(PersonProto);
console.log(chirag);
chirag.firstName = 'Chirag';
chirag.birthAge = 2000;
console.log(chirag.clacAge());
console.log(chirag.__proto__ === PersonProto);

//Second way using init method
const khushi = Object.create(PersonProto);
khushi.init('Khushi', 2001);
console.log(khushi.clacAge());
