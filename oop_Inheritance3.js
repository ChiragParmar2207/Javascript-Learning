const PersonProto = {
	init(firstName, bitrhYear) {
		this.firstName = firstName;
		this.bitrhYear = bitrhYear;
	},

	clacAge() {
		console.log(2022 - this.bitrhYear);
	},
};

const StudentProto = Object.create(PersonProto);

StudentProto.init = function (firstName, bitrhYear, course) {
	PersonProto.init.call(this, firstName, bitrhYear);
	this.course = course;
};

StudentProto.introduce = function () {
	console.log(`My Name is ${this.firstName} and I study in ${this.course}`);
};

const khushi = Object.create(StudentProto);
khushi.init('Khushi', 2001, 'Computer Science');
console.log(khushi);
khushi.introduce();
khushi.clacAge();
