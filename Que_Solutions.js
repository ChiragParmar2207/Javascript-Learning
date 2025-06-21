// Hackerrank.com 1 month preparation
// Week 1
// Question 1 : Plus Minus
function plusMinus(arr) {
	const positive = arr.reduce((acc, value) => (value > 0 ? ++acc : acc), 0);
	const nagative = arr.reduce((acc, value) => (value < 0 ? ++acc : acc), 0);
	const zeros = arr.reduce((acc, value) => (value === 0 ? ++acc : acc), 0);
	const length = arr.length;
	console.log(positive / length);
	console.log(nagative / length);
	console.log(zeros / length);
}
// plusMinus([-4, 3, -9, 0, 4, 1]);

// Question 2 : Min-Max Sum
function miniMaxSum(arr) {
	let temp = [];
	for (let i = 0; i < arr.length; i++) {
		let sum = 0;
		for (let j = 0; j < arr.length; j++) {
			if (i !== j) {
				sum += arr[j];
			}
		}
		temp.push(sum);
	}
	console.log(Math.min(...temp), Math.max(...temp));
}
// miniMaxSum([1, 2, 3, 4, 5]);

// Question 3 : Time Conversion
function timeConversion(s) {
	const hour = s.slice(0, 2);
	const minute = s.slice(3, 5);
	const second = s.slice(6, 8);
	if (s.slice(8) === 'PM') {
		const h = hour === '12' ? 12 : Number(hour) + 12;
		return `${h}:${minute}:${second}`;
	} else {
		const h = hour === '12' ? '00' : hour;
		return `${h}:${minute}:${second}`;
	}
}
// console.log(timeConversion('00:05:45AM'));

// Question 4 : Sparse Arrays
function matchingStrings(strings, queries) {
	const temp = [];
	for (const word of queries) {
		let count = 0;
		for (const word1 of strings) {
			if (word === word1) {
				count++;
			}
		}
		temp.push(count);
	}
	return temp;
}
// console.log(matchingStrings(['ab', 'ab', 'abc'], ['ab', 'abc', 'ac']));

// Question 5 : Lonely Integer
function lonelyinteger(a) {
	for (let i = 0; i < a.length; i++) {
		let count = 0;
		for (let j = 0; j < a.length; j++) {
			if (a[i] === a[j]) {
				count++;
			}
		}
		if (count === 1) {
			return a[i];
		}
	}
}
// console.log(lonelyinteger([1, 2, 3, 4, 5, 4, 3, 2, 1]));

// Question 6 : Flipping bits
function flippingBits(n) {
	let zeros = '00000000000000000000000000000000';
	let binary = (n >>> 0).toString(2);
	let z = 32 - binary.length;
	let ans = [];

	let remBits = zeros.slice(0, z);
	let uns = remBits.concat(binary);

	let arr = uns.split('');

	arr.forEach((ele) => {
		ans.push(Math.pow(0, ele));
	});

	return parseInt(ans.join(''), 2);
}
// console.log(flippingBits(4294967294));

// Question 7 : Diagonal Difference
function diagonalDifference(arr) {
	let sum1 = 0;
	let sum2 = 0;
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length; j++) {
			if (arr[i] === arr[j]) {
				sum1 += arr[i][j];
			}
		}
	}

	let temp = 0;
	let temp1 = arr.length - 1;
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length; j++) {
			if (temp === i && temp1 === j) {
				sum2 += arr[i][j];
			}
		}
		temp++;
		temp1--;
	}
	return Math.abs(sum1 - sum2);
}
// console.log(diagonalDifference([[11, 2, 4], [4, 5, 6], [10, 8, -12]]));

// Question 8 :
function countingSort(arr) {
	const res = Array(100).fill(0);
	arr.forEach((n) => {
		res[n]++;
	});
	return res;
}
// console.log(countingSort([63, 25, 73, 1, 98, 73, 56, 84, 86, 57, 16, 83, 8, 25, 81, 56, 9, 53, 98, 67, 99,
// 12, 83, 89, 80, 91, 39, 86, 76, 85, 74, 39, 25, 90, 59, 10, 94, 32, 44, 3, 89, 30, 27, 79, 46, 96, 27, 32,
// 18, 21, 92, 69, 81, 40, 40, 34, 68, 78, 24, 87, 42, 69, 23, 41, 78, 22, 6, 90, 99, 89, 50, 30, 20, 1, 43,
// 3, 70, 95, 33, 46, 44, 9, 69, 48, 33, 60, 65, 16, 82, 67, 61, 32, 21, 79, 75, 75, 13, 87, 70, 33]))

// Question 9 : pangrams
function pangrams(s) {
	s = [...new Set(s.toLowerCase().replaceAll(' ', '').split('').sort())];
	const alpaArr = 'abcdefghijklmnopqrstuvwxyz'.split('');
	if (s.join('') == alpaArr.join('')) {
		return 'pangram';
	} else {
		return 'not pangram';
	}
}
// console.log(pangrams("We promptly judged antique ivory buckles for the prize"));

// Question 10 : Permuting Two Arrays
function twoArrays(k, A, B) {
	A = A.sort((a, b) => a - b); // 1, 1, 2, 2
	B = B.sort((a, b) => b - a); // 4, 3, 3, 3
	for (let i = 0; i < A.length; i++) {
		if (A[i] + B[i] < k) {
			return 'NO';
		}
	}
	return 'YES';
}
// console.log(twoArrays(5, [1, 2, 2, 1], [3, 3, 3, 4]));

// Question 11 : Subarray Division 1
function birthday(s, d, m) {
	const length = s.length;
	let count = 0;
	for (let left = 0, right = m; right <= length; left++, right++) {
		const sumArr = s.slice(left, right);
		const sum = sumArr.reduce((acc, value) => acc + value, 0);
		if (sum === d) {
			count++;
		}
	}
	return count;
}
// console.log(birthday([4, 5, 4, 2, 4, 5, 2, 3, 2, 1, 1, 5, 4], 15, 4));

// Week 2

// Question 1 : Sales by Match
function sockMerchant(n, arr) {
	let tempset = [...new Set(arr)];
	let count = 0;
	tempset.forEach((value) => {
		const total = arr.reduce((acc, v) => (value == v ? ++acc : acc), 0);
		count += Math.floor(total / 2);
	});
	return count;
}
// console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));

// Question 3 : Drawing Book
function pageCount(n, p) {
	const back = Math.floor(p / 2);
	let resultpair = p % 2 === 0 ? p : p - 1;
	let rightpair = n % 2 === 0 ? n : n - 1;
	const front = Math.floor((rightpair - resultpair) / 2);
	return Math.min(front, back);
}
// console.log(pageCount(5, 3));

// Question 4 : Tower Breakers
function towerBreakers(n, m) {
	if (m === 1 || n % 2 === 0) {
		return '2';
	}
	return '1';
}
// console.log(towerBreakers(2, 2));

// Question 5 : Caesar Cipher
function caesarCipher(s, k) {
	let arr = s.split('');

	let abcd = 'abcdefghijklmnopqrstuvwxyz';
	let abcdarr = abcd.split('');
	let abcdarr1 = abcd.split('');

	let ABCD = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	let ABCDarr = ABCD.split('');
	let ABCDarr1 = ABCD.split('');

	for (let i = 0; i < k; i++) {
		const temp = abcdarr.shift();
		abcdarr.push(temp);
		const temp1 = ABCDarr.shift();
		ABCDarr.push(temp1);
	}

	let retarr = [];
	for (let i = 0; i < arr.length; i++) {
		if (abcdarr.includes(arr[i])) {
			const index = abcdarr1.indexOf(arr[i]);
			retarr.push(abcdarr[index]);
		} else if (ABCDarr.includes(arr[i])) {
			const index = ABCDarr1.indexOf(arr[i]);
			retarr.push(ABCDarr[index]);
		} else {
			retarr.push(arr[i]);
		}
	}
	return retarr.join('');
}
// console.log(caesarCipher('middle-Outz', 2))

// Question 6 : Max Min
function maxMin(k, arr) {
	arr.sort((a, b) => a - b);
	let minDiff = Infinity;
	for (let i = 0; i < arr.length - k + 1; i++) {
		let diff = arr[i + k - 1] - arr[i];
		minDiff = Math.min(diff, minDiff);
	}
	return minDiff;
}
// let arr = [4504,1520,5857,4094,4157,3902,822,6643,2422,7288,8245,9948,2822,1784,7802,3142,9739,5629,5413,7232];
const k = 5;
// console.log(maxMin(k, arr));

// Question 8 : Grid Challenge
function gridChallenge(grid) {
	let grid1 = [];
	for (let i = 0; i < grid.length; i++) {
		const temp = grid[i].split('').sort();
		grid1.push(temp);
	}

	let templength = grid1[0].length;
	for (let i = 0; i < grid1.length - 1; i++) {
		for (let j = 0; j < templength; j++) {
			if (grid1[i][j] > grid1[i + 1][j]) {
				return 'NO';
			}
		}
	}
	return 'YES';
}
// console.log(gridChallenge(["abc", "hjk", "mpq", "rtv"]));

// Question 10 : Sherlock and Array
// function balancedSums(arr) {
//     const sum = arr.reduce((acc , n) => acc + n , 0);
//     let leftSum = 0;

//     return arr.some((num , i) => {
//         let found = (sum - num) % 2 == 0 && leftSum == (sum - num) / 2;
//         leftSum += num;
//         return found;
//     }) ? "YES" : "NO";
// }
// console.log(balancedSums([1, 2, 3, 3]));

// Question 11 : Recursive Digit Sum
// function superDigit(n, k) {
//     if (n.length === 1 && k === 1) return Number(n);
//     const total = (n.split('').reduce((a, b) => Number(a) + Number(b))) * k;
//     return superDigit(total.toString(), 1);
// }
// console.log(superDigit('9875', 4))

// Question 12 : Counter game
// function counterGame(n) {
//         let flag = true;
//         while (n > 1) {
//             flag = !flag;
//             if (n  != 0 && (n & (n - 1)) == 0) {
//                 n = n / 2;
//             }
//             else {
//                 let p = Math.floor(Math.log(n) / Math.log(2));
//                 let next = Math.pow(2, p);
//                 n = n - next;
//             }
//         }
//         return flag ? 'Richard' : 'Louise'
//     }
//     console.log(counterGame(6));

// Question 13 : Sum vs XOR
// function sumXor(n) {
//     let zerocount = 0;
//     let bitstr = n.toString(2);
//     for (let i = 0; i < bitstr.length; i++) {
//         if (bitstr[i] === '0') {
//             zerocount++;
//         }
//     }
//     if (n === 0) {
//         zerocount = 0;
//     }
//     return Math.pow(2, zerocount);
// }
// console.log(sumXor(100));

// Extra

// Question :
/*
 * Have the function abCheck(str) take the str parameter being passed and return
 * the string true if the characters a and b are separated by exactly 3 places
 * anywhere in the string at least once (ie. "lane borrowed" would result in
 * true because there is exactly three characters between a and b). Otherwise
 * return the string false.
 *
 * @param  {string} str
 * @return {string} 'true' or 'false'
 */
function abCheck(str) {
	const check = ['a', 'b'];

	if (str.length < 4) {
		return 'false';
	}

	for (let i = 0; i < str.length; i++) {
		if (str.charAt(i) === check[0]) {
			if (str.charAt(i + 4) === check[1]) {
				return 'true';
			}
		}
		if (str.charAt(i) === check[1]) {
			if (str.charAt(i + 4) === check[0]) {
				return 'true';
			}
		}
	}
	return 'false';
}
// console.log(abCheck("lane borrowed"))

// Question :
/*
 * Have the function alphabetSoup(str) take the str string parameter being
 * passed and return the string with the letters in alphabetical order (ie.
 * hello becomes ehllo). Assume numbers and punctuation symbols will not be
 * included in the string.
 *
 * @param  {string} str
 * @return {string}
 */
function alphabetSoup(str) {
	const letters = str.toLowerCase().split('');
	return letters.sort().join('');
}
// console.log(alphabetSoup('alphabetSoup'));// aabehloppstu

// Question :
/*
 * Have the function arithGeo(arr) take the array of numbers stored in arr and
 * return the string "Arithmetic" if the sequence follows an arithmetic pattern
 * or return "Geometric" if it follows a geometric pattern. If the sequence
 * doesn't follow either pattern return -1. An arithmetic sequence is one where
 * the difference between each of the numbers is consistent, where as in a
 * geometric sequence, each term after the first is multiplied by some constant
 * or common ratio. Arithmetic example: [2, 4, 6, 8] and Geometric example: [2,
 * 6, 18, 54]. Negative numbers may be entered as parameters, 0 will not be
 * entered, and no array will contain all the same elements.
 *
 * @param  {array} arr
 * @return {string} or -1 on failure
 */
function arithGeo(arr) {
	if (arr.length === 1 || arr.length === 0) {
		return -1;
	}

	let arithmetic = true;
	let diff = arr[1] - arr[0];
	for (let i = 1; i < arr.length; i++) {
		if (arr[i] - arr[i - 1] !== diff) {
			arithmetic = false;
		}
	}
	if (arithmetic) {
		return 'Arithmetic';
	}

	let geometric = true;
	let divisor = arr[1] / arr[0];
	for (let i = 1; i < arr.length; i++) {
		if (arr[i] / arr[i - 1] !== 3) {
			geometric = false;
		}
	}
	if (geometric) {
		return 'Geometric';
	}
	return -1;
}
// console.log(arithGeo([2, 4, 6, 8, 10, 12]));
// console.log(arithGeo([2, 6, 18, 54, 162, 486]));

// Question :
/*
 * Have the function QuestionsMarks(str) take the str string parameter, which will contain
 * single digit numbers, letters, and question marks, and check if there are exactly 3 question marks
 * between every pair of two numbers that add up to 10. If so, then your program should return the string true,
 * otherwise it should return the string false. If there aren't any two numbers that add up to 10 in the string,
 * then your program should return false as well.
 *
 * For example: if str is "arrb6???4xxbl5???eee5" then your program should return true because there are
 * exactly 3 question marks between 6 and 4, and 3 question marks between 5 and 5 at the end of the string.
 * Examples
 * Input: "aa6?9"
 * Output: false
 * Input: "acc?7??sss?3rr1??????5"
 * Output: true
 */
function QuestionsMarks(str) {
	var res = false;
	for (var i = 0; i < str.length; i++) {
		for (var j = i + 1; j < str.length; j++) {
			if (Number(str[i]) + Number(str[j]) === 10) {
				res = true;
				if (str.slice(i, j).split('?').length - 1 < 3) {
					return false;
				}
			}
		}
	}
	return res;
}
// console.log(QuestionsMarks("aa6?9"));
// console.log(QuestionsMarks("acc?7??sss?3rr1??????5"));

// Question :
/*
c
*/
function arrayAdditionI(arr) {
	arr = arr.sort((a, b) => a - b);
	let sum = 0;
	for (let i = 1; i < arr.length - 1; i++) {
		sum += arr[i];
	}
	if (sum === arr[arr.length - 1]) {
		return true;
	}
	return false;
}
// console.log(arrayAdditionI([4, 6, 23, 10, 1, 3]));

// Question :
/*
 * Have the function countingMinutesI(str) take the str parameter being passed
 * which will be two times (each properly formatted with a colon and am or pm)
 * separated by a hyphen and return the total number of minutes between the two
 * times. The time will be in a 12 hour clock format. For example: if str is
 * 9:00am-10:00am then the output should be 60. If str is 1:00pm-11:00am the
 * output should be 1320.
 *
 * @param  {string} str
 * @return {number}
 */
function countingMinutesI(str) {
	let [time1, time2] = str.split('-');

	// console.log(time1);
	// console.log(time2);

	const index1 = time1.split('').findIndex((value, i) => value === ':');
	const index2 = time2.split('').findIndex((value, i) => value === ':');
	// console.log(index1, index2);

	const t1 = time1
		.split('')
		.findIndex((value, i) => value === 'a' || value === 'p');
	const t2 = time2
		.split('')
		.findIndex((value, i) => value === 'a' || value === 'p');
	// console.log(t1, t2);

	const h1 = Number(time1.slice(0, index1));
	const h2 = Number(time2.slice(0, index2));
	// console.log(h1, h2);

	const m1 = Number(time1.slice(index1 + 1, t1));
	const m2 = Number(time2.slice(index2 + 1, t2));
	// console.log(m1, m2);

	if (
		(time1.charAt(t1) === 'a' && time2.charAt(t2) === 'a') ||
		(time1.charAt(t1) === 'p' && time2.charAt(t2) === 'p')
	) {
		if (h1 === h2) {
			return 1440 + m1 + m2;
		} else if (h1 === 12 && h2 === 11) {
			return 1440 - (m1 + m2);
		}
		return (h2 - h1) * 60 + m1 + m2;
	} else if (
		(time1.charAt(t1) === 'p' && time2.charAt(t2) === 'a') ||
		(time1.charAt(t1) === 'a' && time2.charAt(t2) === 'p')
	) {
		let totalh = h1 === 12 ? 12 + h2 : 12 - h1 + h2;
		return totalh * 60 + m1 + m2;
	}
}
// console.log(countingMinutesI('12:00am-11:59am'));

function countingMinutesI(str) {
	let times = str.split('-');

	times = times.map(function (currentValue, index, array) {
		let pairs = currentValue.split(':');
		let time =
			(pairs[1][2] === 'a'
				? parseInt(pairs[0]) % 12
				: (parseInt(pairs[0]) % 12) + 12) *
				60 +
			parseInt(pairs[1][0] + pairs[1][1]);
		return time;
	});

	let diff = times[1] - times[0];
	return diff < 0 ? diff + 1440 : diff;
}
// console.log(countingMinutesI('12:00am-11:59pm'));

// Question :
/*
 * Have the function dashInsert(str) insert dashes ('-') between each two odd
 * numbers in str. For example: if str is 454793 the output should be 4547-9-3.
 * Don't count zero as an odd number.
 *
 * @param  {string} str
 * @return {string}
 */
function dashInsert(str) {
	let newstr = '';
	for (let i = 0; i < str.length; i++) {
		if (
			Number(str.charAt(i)) % 2 !== 0 &&
			Number(str.charAt(i + 1)) % 2 !== 0
		) {
			newstr += str.charAt(i) + '-';
		} else {
			newstr += str.charAt(i);
		}
	}
	return newstr;
}
// console.log(dashInsert('3343547929'));

// Question :
/*
 * Have the function divisionStringified(num1,num2) take both parameters being
 * passed, divide num1 by num2, and return the result as a string with properly
 * formatted commas. If an answer is only 3 digits long, return the number with
 * no commas (ie. 2 / 3 should output "1"). For example: if num1 is 123456789
 * and num2 is 10000 the output should be "12,346".
 *
 * @param  {number} num1
 * @param  {number} num2
 * @return {string}
 */
function divisionStringified(num1, num2) {
	const num = Math.round(num1 / num2);
	let strnum = '';
	const reversenumber = num.toString().split('').reverse();
	for (let i = 0; i < reversenumber.length; i++) {
		if (i % 3 === 2 && i != reversenumber.length - 1) {
			strnum = ',' + reversenumber[i] + strnum;
		} else {
			strnum = reversenumber[i] + strnum;
		}
	}
	return strnum;
}
// console.log(divisionStringified(12345678912, 10000));

// Question :
/*
 * Have the function exOh(str) take the str parameter being passed and return
 * the string true if there is an equal number of x's and o's, otherwise return
 * the string false. Only these two letters will be entered in the string, no
 * punctuation or numbers. For example: if str is "xooxxxxooxo" then the output
 * should return false because there are 6 x's and 5 o's.
 *
 * @param  {string} str
 * @return {string}
 */
function exOh(str) {
	let xcount = 0;
	let ocount = 0;
	for (let i = 0; i < str.length; i++) {
		if (str.charAt(i) === 'x') {
			xcount++;
		} else {
			ocount++;
		}
	}
	return xcount === ocount ? 'true' : 'false';
}
// console.log(exOh('xxxxoxxooooo'));

// Question :
/*
 * Have the function firstFactorial(num) take the num parameter being passed and
 * return the factorial of it (e.g. if num = 4, return (4 * 3 * 2 * 1)). For the
 * test cases, the range will be between 1 and 18 and the input will always be
 * an integer.
 *
 * @param  {number} num
 * @return {number}
 */
function firstFactorial(num) {
	let fact = 1;
	for (let i = 1; i <= num; i++) {
		fact *= i;
	}
	return fact;
}
// console.log(firstFactorial(7))

// Question :
/*
 * Have the function firstReverse(str) take the str parameter being passed and
 * return the string in reversed order. For example: if the input string is
 * "Hello World and Coders" then your program should return the string
 * "sredoC dna dlroW olleH".
 *
 * @param  {string} str A string to be reversed
 * @return {string} Reversed str
 */
function firstReverse(str) {
	return str.split('').reverse().join('');
}
// console.log(firstReverse('sredoC dna dlroW olleH'));

// Question :
/*
 * Have the function letterCapitalize(str) take the str parameter being passed
 * and capitalize the first letter of each word. Words will be separated by only
 * one space.
 * @param  {string} str
 * @return {string}
 */
function letterCapitalize(str) {
	let strarr = str.split(' ');
	for (let i = 0; i < strarr.length; i++) {
		strarr[i] = strarr[i].charAt(0).toUpperCase() + strarr[i].slice(1);
	}
	return strarr.join(' ');
}
// console.log(letterCapitalize('Words will be separated by only one space.'));

// Question :
/*
 * Have the function letterChanges(str) take the str parameter being passed and
 * modify it using the following algorithm. Replace every letter in the string
 * with the letter following it in the alphabet (ie. c becomes d, z becomes a).
 * Then capitalize every vowel in this new string (a, e, i, o, u) and finally
 * return this modified string.
 * @param  {string} str
 * @return {string}
 */
function letterChanges(str) {
	const strarr = str.split('');
	const vowel = 'aeiou';

	for (let i = 0; i < strarr.length; i++) {
		if (strarr[i] === 'z') {
			strarr[i] = 'a';
		} else {
			strarr[i] = String.fromCharCode(strarr[i].charCodeAt(0) + 1);
		}
	}

	for (let i = 0; i < strarr.length; i++) {
		if (vowel.includes(strarr[i])) {
			strarr[i] = strarr[i].toUpperCase();
		}
	}
	return strarr.join('');
}
// console.log(letterChanges('abczdhnt'));

// Question :
/*
 * Have the function letterCountI(str) take the str parameter being passed and
 * return the first word with the greatest number of repeated letters. For
 * example: "Today, is the greatest day ever!" should return greatest because it
 * has 2 e's (and 2 t's) and it comes before ever which also has 2 e's. If there
 * are no words with repeating letters return -1. Words will be separated by
 * spaces.
 *
 * @param  {string} str
 * @return {string} or -1
 */

// Question :
/*
 * Have the function longestWord(sen) take the sen parameter being passed and
 * return the largest word in the string. If there are two or more words that
 * are the same length, return the first word from the string with that length.
 * Ignore punctuation and assume sen will not be empty.
 * @param  {string} sen
 * @return {string}
 */
function longestWord(sen) {
	const validCharacters =
		'abcdefghijklmonpqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
	let maxLength = 0;
	let longestWord = '';

	for (let i = 0, length = 0, word = ''; i < sen.length; i++) {
		let c = sen[i];
		if (validCharacters.includes(c)) {
			length++;
			word += c;
		} else {
			length = 0;
			word = '';
		}

		if (length > maxLength) {
			maxLength = length;
			longestWord = word;
		}
	}
	return longestWord;
}
// console.log(longestWord('Today, is the greatest day ever!'));

// Question :
/*
 * Have the function meanMode(arr) take the array of numbers stored in arr and
 * return 1 if the mode equals the mean, 0 if they don't equal each other (ie.
 * [5, 3, 3, 3, 1] should return 1 because the mode (3) equals the mean (3)).
 * The array will not be empty, will only contain positive integers, and will
 * not contain more than one mode.
 *
 * @param  {array} arr
 * @return {number}
 */
function meanMode(arr) {
	// Mean
	const mean = Math.round(
		arr.reduce((acc, value) => acc + value, 0) / arr.length
	);

	// Mode
	let mode = 0;
	let max = 0;
	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1, count = 0; j < arr.length; j++) {
			if (arr[i] === arr[j]) {
				count++;
				if (count > max) {
					mode = arr[j];
				}
			}
		}
	}
	return mean === mode ? 1 : 0;
}
// console.log(meanMode([5, 3, 3, 3, 1, 6]));

// Question :
/*
 * Have the function numberAddition(str) take the str parameter, search for all
 * the numbers in the string, add them together, then return that final number.
 * For example: if str is "88Hello 3World!" the output should be 91. You will
 * have to differentiate between single digit numbers and multiple digit numbers
 * like in the example above. So "55Hello" and "5Hello 5" should return two
 * different answers. Each string will contain at least one letter or symbol.
 *
 * @param  {string} str
 * @return {number}
 */
function numberAddition(str) {
	let numbers = [];
	const digits = '1234567890';
	for (let i = 0; i < str.length; i++) {
		if (digits.includes(str.charAt(i))) {
			let temp = str.charAt(i);
			for (let j = i + 1; j < str.length; j++) {
				if (digits.includes(str.charAt(j))) {
					temp += str.charAt(j);
					i++;
				} else {
					break;
				}
			}
			numbers.push(Number(temp));
		}
	}
	return numbers.reduce((acc, value) => acc + value, 0);
}
// console.log(numberAddition("88Hello 3World!"));
// console.log(numberAddition("55Hello"));
// console.log(numberAddition("5Hello 5"));

// Question :
/*
 * Have the function palindrome(str) take the str parameter being passed and
 * return the string true if the parameter is a palindrome, (the string is the
 * same forward as it is backward) otherwise return the string false. For
 * example: "racecar" is also "racecar" backwards. Punctuation and numbers will
 * not be part of the string.
 * @param  {string} str
 * @return {string}
 */
function palindrome(str) {
	str = str.replace(' ', '');
	return str.split('').reverse().join('') === str ? 'true' : 'false';
}
// console.log(palindrome('racecar'));

// Question :
/*
 * Have the function powersOfTwo(num) take the num parameter being passed which
 * will be an integer and return the string true if it's a power of two. If it's
 * not return the string false. For example if the input is 16 then your program
 * should return the string true but if the input is 22 then the output should
 * be the string false.
 *
 * @param  {number} num
 * @return {string} 'true' or 'false'
 */
function powersOfTwo(num) {
	return Number.isInteger(Math.log(num) / Math.log(2)) ? 'true' : 'false';
}
// console.log(powersOfTwo(16));

// Question :
/*
 * Have the function secondGreatLow(arr) take the array of numbers stored in arr
 * and return the second lowest and second greatest numbers, respectively,
 * separated by a space. For example: if arr contains [7, 7, 12, 98, 106] the
 * output should be 12 98. The array will not be empty and will contain at least
 * 2 numbers. It can get tricky if there's just two numbers!
 *
 * @param  {array} arr
 * @return {string}
 */
function secondGreatLow(arr) {
	arr.sort((a, b) => a - b);

	let secondsmall = arr[1];
	for (let i = 1; i < arr.length; i++) {
		if (arr[i] !== arr[0]) {
			secondsmall = arr[i];
			break;
		}
	}

	let secondlarge = arr[arr.length - 2];
	for (let i = arr.length - 2; i >= 0; i--) {
		if (arr[i] !== arr[arr.length - 1]) {
			secondlarge = arr[i];
			break;
		}
	}
	return `${secondsmall} ${secondlarge}`;
}
// console.log(secondGreatLow([7, 7, 12, 98, 106]));

// Question :
/*
 * Have the function simpleAdding(num) add up all the numbers from 1 to num. For
 * example: if the input is 4 then your program should return 10 because 1 + 2 +
 * 3 + 4 = 10. For the test cases, the parameter num will be any number from 1
 * to 1000.
 *
 * @param  {number} num
 * @return {number}
 */
function simpleAdding(num) {
	let sum = 0;
	for (let i = 1; i <= num; i++) {
		sum += i;
	}
	return sum;
}
// console.log(simpleAdding(5));

// Question :
/*
 * Have the function simpleSymbols(str) take the str parameter being passed and
 * determine if it is an acceptable sequence by either returning the string true
 * or false. The str parameter will be composed of + and = symbols with several
 * letters between them (ie. ++d+===+c++==a) and for the string to be true each
 * letter must be surrounded by a + symbol. So the string to the left would be
 * false. The string will not be empty and will have at least one letter.
 *
 * @param  {string} str
 * @return {string} 'true' or 'false'
 */
function simpleSymbols(str) {
	const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
	let flag = 'true';
	for (let i = 0; i < str.length; i++) {
		if (letters.includes(str.charAt(i))) {
			if (str.charAt(i - 1) !== '+' && str.charAt(i + 1) !== '+') {
				return 'false';
			}
		}
	}
	return flag;
}
// console.log(simpleSymbols('++d+===+c++==+a+'));

// Question :
/*
 * Have the function swapCase(str) take the str parameter and swap the case of
 * each character. For example: if str is "Hello World" the output should be
 * hELLO wORLD. Let numbers and symbols stay the way they are.
 *
 * @param  {string} str
 * @return {string}
 */
function swapCase(str) {
	const letters = 'abcdefghijklmnopqrstuvwxyz';
	const letters1 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

	const newstr = str.split('').map((char) => {
		if (letters.includes(char)) {
			return char.toUpperCase();
		} else if (letters1.includes(char)) {
			return char.toLowerCase();
		}
		return char;
	});

	return newstr.join('');
}
// console.log(swapCase("Hello World."));

// Question :

/**
 * Have the function thirdGreatest(strArr) take the array of strings stored in
 * strArr and return the third largest word within in. So for example: if strArr
 * is ["hello", "world", "before", "all"] your output should be world because
 * "before" is 6 letters long, and "hello" and "world" are both 5, but the
 * output should be world because it appeared as the last 5 letter word in the
 * array. If strArr was ["hello", "world", "after", "all"] the output should be
 * after because the first three words are all 5 letters long, so return the
 * last one. The array will have at least three strings and each string will
 * only contain letters.
 *
 * @param  {array} strArr
 * @return {string}
 */
function thirdGreatest(strArr) {
	const newarr = strArr.sort((a, b) => b.length - a.length);
	return newarr[2];
}
// console.log(thirdGreatest(["hello", "world", "after", "all"]));

// Question :
/*
 * Have the function timeConvert(num) take the num parameter being passed and
 * return the number of hours and minutes the parameter converts to (ie. if num
 * = 63 then the output should be 1:3). Separate the number of hours and minutes
 * with a colon.
 * @param  {number} num
 * @return {string} number of hours and minutes.  hours:minutes
 */
function timeConvert(num) {
	const h = Math.floor(num / 60);
	const m = num % 60;
	return `${h}:${m}`;
}
// console.log(timeConvert(136));

// Question :
/*
 * Have the function vowelCount(str) take the str string parameter being passed
 * and return the number of vowels the string contains (ie. "All cows eat grass
 * and moo" would return 8). Do not count y as a vowel for this challenge.
 * @param  {string} str
 * @return {number}
 */
function vowelCount(str) {
	const vowels = 'aeiouAEIOU';
	const vowelcount = str.split('').filter((char) => {
		return vowels.includes(char);
	}).length;
	return vowelcount;
}
// console.log(vowelCount('All cows eat grass and moo'));

// Question :
/*
 * Have the function wordCount(str) take the str string parameter being passed
 * and return the number of words the string contains (e.g. "Never eat shredded
 * wheat or cake" would return 6). Words will be separated by single spaces.
 * @param  {string} str
 * @return {number}
 */
function wordCount(str) {
	return str.split(' ').length;
}
// console.log(wordCount('Never eat shredded wheat or cake'));

// Question :
/*
 * Using the JavaScript language, have the function arrayMinJumps(arr) take the
 * array of integers stored in arr, where each integer represents the maximum
 * number of steps that can be made from that position, and determine the least
 * amount of jumps that can be made to reach the end of the array. For example:
 * if arr is [1, 5, 4, 6, 9, 3, 0, 0, 1, 3] then your program should output the
 * number 3 because you can reach the end of the array from the beginning via
 * the following steps: 1 -> 5 -> 9 -> END or 1 -> 5 -> 6 -> END. Both of these
 * combinations produce a series of 3 steps. And as you can see, you don't
 * always have to take the maximum number of jumps at a specific position, you
 * can take less jumps even though the number is higher.
 *
 * If it is not possible to reach the end of the array, return -1.
 *
 * @param  {array} arr of integers
 * @return {number}
 */
function arrayMinJumps(arr) {}
// console.log(arrayMinJumps([1, 5, 4, 6, 9, 3, 0, 0, 1, 3]));

// Question :
/**
 * Have the function lruCache(strArr) take the array of characters stored in
 * strArr, which will contain characters ranging from A to Z in some arbitrary
 * order, and determine what elements still remain in a virtual cache that can
 * hold up to 5 elements with an LRU cache algorithm implemented. For example:
 * if strArr is ["A", "B", "C", "D", "A", "E", "D", "Z"], then the following
 * steps are taken:
 *
 * 1. A does not exist in the cache, so access it and store it in the cache.
 *
 * 2. B does not exist in the cache, so access it and store it in the cache as
 * well. So far the cache contains: ["A", "B"].
 *
 * 3. Same goes for C, so the cache is now: ["A", "B", "C"].
 *
 * 4. Same goes for D, so the cache is now: ["A", "B", "C", "D"].
 *
 * 5. Now A is accessed again, but it exists in the cache already so it is
 * brought to the front: ["B", "C", "D", "A"].
 *
 * 6. E does not exist in the cache, so access it and store it in the cache:
 * ["B", "C", "D", "A", "E"].
 *
 * 7. D is accessed again so it is brought to the front: ["B", "C", "A", "E",
 * "D"].
 *
 * 8. Z does not exist in the cache so add it to the front and remove the least
 * recently used element: ["C", "A", "E", "D", "Z"].
 *
 * Now the caching steps have been completed and your program should return the
 * order of the cache with the elements joined into a string, separated by a
 * hyphen. Therefore, for the example above your program should return
 * C-A-E-D-Z.
 *
 * @param  {array} strArr
 * @return {string}
 */
function lruCache(strArr) {
	const MAX = 5;
	let catchMemory = [];
	for (let i = 0; i < strArr.length; i++) {
		if (catchMemory.length === MAX) {
			if (catchMemory.includes(strArr[i])) {
				for (let j = 0; j < MAX; j++) {
					if (catchMemory[j] === strArr[i]) {
						if (j === 0) {
							catchMemory.shift();
						} else {
							catchMemory[j] = '';
						}
						break;
					}
				}
				catchMemory = catchMemory.join('').replace(' ', '');
				catchMemory = catchMemory.split('');
				catchMemory.push(strArr[i]);
			} else {
				catchMemory.shift();
				catchMemory.push(strArr[i]);
			}
		} else {
			if (catchMemory.includes(strArr[i])) {
				for (let j = 0; j < MAX - 1; j++) {
					if (catchMemory[j] === strArr[i]) {
						if (j === 0) {
							catchMemory.shift();
						} else {
							catchMemory[j] = '';
						}
						break;
					}
				}
				catchMemory = catchMemory.join('').replace(' ', '');
				catchMemory = catchMemory.split('');
			}
			catchMemory.push(strArr[i]);
		}
	}
	return catchMemory.join('-');
}
// console.log(lruCache(["A", "B", "C", "D", "A", "E", "D", "Z"]));

// Question :
/*
 * Have the function permutationStep(num) take the num parameter being passed
 * and return the next number greater than num using the same digits. For
 * example: if num is 123 return 132, if it's 12453 return 12534. If a number
 * has no greater permutations, return -1 (ie. 999).
 *
 * @param  {number} num
 * @return {number}
 */
function permutationStep(num) {
	let str = num.toString();
	let text = '9';
	let numLength = str.length;
	let range = Number(text.repeat(numLength));
	let arrOfGivenNumber = str.split('');
	let ans = 0;

	for (let i = num + 1; i < range; i++) {
		newI = i.toString().split('');
		let res = true;
		for (let j = 0; j < newI.length; j++) {
			if (!newI.includes(arrOfGivenNumber[j])) {
				res = false;
				break;
			}
		}
		if (res == true) {
			ans = i;
			break;
		}
	}
	return ans;
}
// console.log(permutationStep(123));

// Question :
/*
 * Have the function primeTime(num) take the num parameter being passed and
 * return the string true if the parameter is a prime number, otherwise return
 * the string false. The range will be between 1 and 2^16.
 * @param  {number} num
 * @return {string}
 */
function primeTime(num) {
	let max = Math.floor(num / 2);
	for (let i = 2; i <= max; i++) {
		if (num % i === 0) return 'false';
	}
	return 'true';
}
// console.log(primeTime(5));

// Question :
/*
 * Have the function ArrayRotation(arr) take the arr parameter
 * being passed which will be an array of non-negative integers
 * and circularly rotate the array starting from the Nth
 * element where N is equal to the first integer in the array.
 *
 * For example: if arr is [2, 3, 4, 1, 6, 10] then your program
 * should rotate the array starting from the 2nd position
 * because the first element in the array is 2.
 * The final array will therefore be [4, 1, 6, 10, 2, 3], and
 * your program should return the new array as a string, so for
 * this example your program would return 4161023.
 * The first element in the array will always be an integer
 * greater than or equal to 0 & less than the size of the array
 *
 * Examples
 * Input 1: [3,2,1,6]
 * Output 1: 6321
 *
 * Input 2: [4,3,4,3,1,2]
 * Output 2: 124343
 */
function ArrayRotation(arr) {
	const start = arr[0];
	let str = '';
	for (let i = start; i < arr.length; i++) {
		str += arr[i];
	}
	for (let i = 0; i < start; i++) {
		str += arr[i];
	}
	return str;
}
// console.log(ArrayRotation([4, 3, 4, 3, 1, 2]));
// console.log(ArrayRotation([2, 3, 4, 1, 6, 10]));  // 4161023
// console.log(ArrayRotation([3, 2, 1, 6]));  // 6321

// Question :
/*
 * Have the function ClosestEnemy(arr) take the array of numbers
 * stored in arr and from the position in the array where a 1
 * is, return the number of spaces either left or right you
 * must move to reach an enemy which is represented by a 2.
 * For example: if arr is [0, 0, 1, 0, 0, 2, 0, 2] then your
 * program should return 3 because the closest enemy (2) is 3
 * spaces away from the 1. The array will contain any number of
 * 0's and 2's, but only a single 1. It may not contain any 2's
 * at all as well, where in that case your program should
 * return a 0. 							*
 *
 * Examples
 * Input 1: [1, 0, 0, 0, 2, 2, 2]
 * Output 1: 4
 *
 * Input 2: [2, 0, 0, 0, 2, 2, 1, 0]
 * Output 2: 1
 */
function ClosestEnemy(arr) {
	const index = arr.findIndex((value) => value === 1);

	let back = 0;
	let backflag = false;
	for (let i = index; i < arr.length; i++) {
		if (arr[i] === 2) {
			backflag = true;
			break;
		} else {
			back++;
		}
	}

	let front = 0;
	let frontflag = false;
	for (let i = index; i > 0; i--) {
		if (arr[i] === 2) {
			frontflag = true;
			break;
		} else {
			front++;
		}
	}

	if ((backflag === frontflag) === true) {
		return Math.min(back, front);
	} else if (backflag === true) {
		return back;
	} else {
		return front;
	}
}
// console.log(ClosestEnemy([1, 0, 0, 0, 2, 2, 2]));  // 4
// console.log(ClosestEnemy([2, 0, 0, 0, 2, 2, 1, 0]));  // 1

// Question :
/*
 * Have the function HDistance(strArr) take the array of strings
 * stored in strArr, which will only contain two strings of
 * equal length and return the number of characters at each
 * position that are different between them.
 *
 * For example: if strArr is ["house", "hours"] then your
 * program should return 2. The string will always be of equal
 * length and will only contain lowercase characters from the
 * alphabet and numbers.
 *
 * Examples
 * Input 1: ["10011", "10100"]
 * Output 1: 3
 *
 * Input 2: ["abcdef", "defabc"]
 * Output 2: 6
 */
function HDistance(strArr) {
	const str1 = strArr[0];
	const str2 = strArr[1];
	let count = 0;
	for (let i = 0; i < str1.length; i++) {
		if (str1.charAt(i) !== str2.charAt(i)) {
			count++;
		}
	}
	return count;
}
// console.log(HDistance(["house", "hours"]));

// Question :
/*
 * Have the function LargestFour(arr) take the array of integers
 * stored in arr, and find the four largest elements and return
 * their sum.
 *
 * For example: if arr is [4, 5, -2, 3, 1, 2, 6, 6] then the
 * four largest elements in this array are 6, 6, 4, and 5 and
 * the total sum of these numbers is 21, so your program should
 * return 21.
 *
 * If there are less than four numbers in the array your program
 * should return the sum of all the numbers in the array.
 *
 * Examples
 * Input 1: [1, 1, 1, -5]
 * Output 1: -2
 *
 * Input 2: [0, 0, 2, 3, 7, 1]
 * Output 2: 13
 */
function LargestFour(arr) {
	arr = arr.sort((a, b) => b - a);
	let sum = 0;
	for (let i = 0; i < 4; i++) {
		sum += arr[i];
	}
	return sum;
}
// console.log(LargestFour([4, 5, -2, 3, 1, 2, 6, 6]));
// console.log(LargestFour([1, 1, 1, -5]));
// console.log(LargestFour([0, 0, 2, 3, 7, 1]));

// Question :
/*
 * Have the function WaveSorting(arr) take the array of positive integer
 * stored in arr and return the string true if the numbers can be
 * arranged in a wave pattern: a1 > a2 < a3 > a4 < a5 > ..., otherwise
 * return the string false. For example, if arr is: [0, 1, 2, 4, 1, 4],
 * then a possible wave ordering of the numbers is: [2, 0, 4, 1, 4, 1].
 * So for this input your program should return the string true.
 * The input array will always contain at least 2 elements.
 * More examples are given below as sample test cases.
 *
 * Examples
 * Input 1: [0, 1, 2, 4, 1, 1, 1]
 * Output 1: false
 *
 * Input 2: [0, 4, 22, 4, 14, 4, 2]
 * Output 2: true
 */
function WaveSorting(arr) {
	arr = arr.sort((a, b) => a - b);
	let array1 = arr.slice(0, Math.floor(arr.length / 2));
	let array2 = arr.slice(Math.floor(arr.length / 2), arr.length);
	for (let i = 0; i < array1.length; i++) {
		if (array1[i] >= array2[i]) {
			return false;
		}
	}
	return true;
}
// console.log(WaveSorting([0, 4, 22, 4, 14, 4, 2]));

// Question :
/*
 * Have the function ArrayMatching(strArr) read the array of
 * strings stored in strArr which will contain only two elements
 * both of which will represent an array of positive integers.
 * For example: if strArr is ["[1, 2, 5, 6]", "[5, 2, 8, 11]"],
 * then both elements in the input represent two integer arrays
 * and your goal for this challenge is to add the elements in
 * corresponding locations from both arrays. For the example
 * input your program should do the following additions:
 * [(1 + 5), (2 + 2), (5 + 8), (6 + 11)] which then
 * equals [6, 4, 13, 17]. Your program should finally return
 * this resulting array in a string format with each element
 * separated by a hyphen: 6-4-13-17.
 * If the two arrays do not have the same amount of elements,
 * then simply append the remaining elements onto the new array
 * (example shown below). Both arrays will be in the
 * format: [e1, e2, e3, ...] where at least one element will
 * exist in each array.
 *
 * Examples
 * Input 1: ["[5, 2, 3]", "[2, 2, 3, 10, 6]"]
 * Output 1: 7-4-6-10-6
 *
 * Input 2: ["[1, 2, 1]", "[2, 1, 5, 2]"]
 * Output 2: 3-3-6-2
 */
function ArrayMatching(strArr) {
	let arr1 = strArr[0]
		.substring(1, strArr[0].length - 1)
		.replaceAll(' ', '')
		.split(',');
	let arr2 = strArr[1]
		.substring(1, strArr[1].length - 1)
		.replaceAll(' ', '')
		.split(',');
	let maxLength = arr1.length >= arr2.length ? arr1 : arr2;
	let minLength = arr1.length >= arr2.length ? arr2 : arr1;
	console.log(maxLength);
	console.log(minLength);
	let ansstr = '';
	for (let i = 0; i < maxLength.length; i++) {
		if (i < minLength.length) {
			let sum = Number.parseInt(maxLength[i]) + Number.parseInt(minLength[i]);
			ansstr += sum + '-';
		} else {
			ansstr += maxLength[i] + '-';
		}
	}
	return ansstr.substring(0, ansstr.length - 1);
}
// console.log(ArrayMatching(["[5, 2, 3]", "[2, 2, 3, 10, 6]"]));

// Question :
/*
 * Have the function ElementMerger(arr) take the array of
 * positive integers stored in arr and perform the following
 * algorithm: continuously get the difference of adjacent
 * integers to create a new array of integers, then do the same
 * for the new array until a single number is left and return
 * that number.
 *
 * For example: if arr is [4, 5, 1, 2, 7] then taking the
 * difference of each pair of elements produces the following
 * new array: [1, 4, 1, 5]. Then do the same for this new array
 * to produce [3, 3, 4] -> [0, 1] -> 1. So for this example your
 * program should return the number 1 because that is what's
 * left at the end.
 *
 * Examples
 * Input 1: [5, 7, 16, 1, 2]
 * Output 1: 7
 *
 * Input 2: [1, 1, 1, 2]
 * Output 2: 1
 */

function merge(arr) {
	let newarr = [];
	for (let i = 0; i < arr.length - 1; i++)
		newarr.push(Math.abs(arr[i] - arr[i + 1]));
	return newarr;
}

function ElementMerger(arr) {
	while (true) {
		if (arr.length === 1) break;
		else arr = merge(arr);
	}
	return arr[0];
}
// console.log(ElementMerger([5, 7, 16, 1, 2]));
// console.log(ElementMerger([1, 1, 1, 2]));
// console.log(ElementMerger([4, 5, 1, 2, 7]));

// Question :
/*
 * Have the function EquivalentKeypresses(strArr) read the array
 * of strings stored in strArr which will contain 2 strings
 * representing two comma separated lists of keypresses.
 * Your goal is to return the string true if the keypresses
 * produce the same printable string and the string false if
 * they do not.
 *
 * A keypress can be either a printable character or a backspace
 * represented by -B.
 *
 * You can produce a printable string from such a string of
 * keypresses by having backspaces erase one preceding character
 *
 * For example: if strArr contains ["a,b,c,d", "a,b,c,c,-B,d"]
 * the output should return true because those keypresses
 * produce the same printable string.
 *
 * The array given will not be empty. The keypresses will only
 * contain letters from the alphabet and backspaces.
 *
 * Examples
 * Input 1: ["a,b,c,d", "a,b,c,d,-B,d"]
 * Output 1: true
 *
 * Input 2: ["c,a,r,d", "c,a,-B,r,d"]
 * Output 2: false
 */
function EquivalentKeypresses(strArr) {
	let arr1 = strArr[0].split(',');
	let arr2 = strArr[1].split(',');
	let tempArr = [];

	for (let i = 0; i < arr2.length; i++) {
		if (arr2[i] === '-B') {
			tempArr.pop();
		} else {
			tempArr.push(arr2[i]);
		}
	}
	for (let i = 0; i < arr1.length; i++) {
		if (arr1[i] !== tempArr[i]) {
			return 'false';
		}
	}
	return 'true';
}
// console.log(EquivalentKeypresses(["a,b,c,d", "a,b,c,d,-B,d"]));
// console.log(EquivalentKeypresses(["c,a,r,d", "c,a,-B,r,d"]));
// console.log(EquivalentKeypresses(["a,b,c,d", "a,b,c,c,-B,d"]));

// Question :
/*
 * Have the function OverlappingRanges(arr) take the array of
 * numbers stored in arr which will contain 5 positive integers,
 * the first two representing a range of numbers (a to b), the
 * next 2 also representing another range of integers (c to d),
 * and a final 5th element (x) which will also be a positive
 * integer, and return the string true if both sets of ranges
 * overlap by at least x numbers.
 * For example: if arr is [4, 10, 2, 6, 3] then your program
 * should return the string true.
 * The first range of numbers are 4, 5, 6, 7, 8, 9, 10 & the
 * second range of numbers are 2, 3, 4, 5, 6.
 * The last element in t[4, 10, 2, 6, 3]he array is 3, and there are 3 numbers
 * that overlap between both ranges: 4, 5, and 6.
 * If both ranges do not overlap by at least x numbers,
 * then your program should return the string false.
 *
 * Examples
 * Input 1: [5,11,1,5,1]
 * Output 1: true
 *
 * Input 2: [1,8,2,4,4]
 * Output 2: false
 */
function OverlappingRanges(arr) {
	let arr1 = [];
	for (let i = arr[0]; i <= arr[1]; i++) {
		arr1.push(i);
	}

	let arr2 = [];
	for (let i = arr[2]; i <= arr[3]; i++) {
		arr2.push(i);
	}

	let count = 0;
	for (let i = 0; i < arr1.length; i++) {
		for (let j = 0; j < arr2.length; j++) {
			if (arr1[i] === arr2[j]) {
				count++;
			}
		}
	}

	if (count === arr[4]) return 'true';
	else return 'false';
}
// console.log(OverlappingRanges([4, 10, 2, 6, 3]));
// console.log(OverlappingRanges([5,11,1,5,1]));
// console.log(OverlappingRanges([1,8,2,4,4]));

// Question :
/*
 * Have the function Superincreasing(arr) take the array of
 * numbers stored in arr and determine if the array forms a
 * superincreasing sequence where each element in the array is
 * greater than the sum of all previous elements. The array will
 * only consist of positive integers.
 * For example: if arr is [1, 3, 6, 13, 54] then your program
 * should return the string "true" because it forms a
 * superincreasing sequence. If a superincreasing sequence
 * isn't formed, then your program should return the string
 * "false"
 *
 * Examples
 * Input 1: [1,2,3,4]
 * Output 1: false
 *
 * Input 2: [1,2,5,10]
 * Output 2: true
 */
function Superincreasing(arr) {
	let sum = 0;
	let flag = true;
	for (let i = 0; i < arr.length; i++) {
		if (i > 0 && sum >= arr[i]) {
			flag = false;
			break;
		}
		sum = sum + arr[i];
	}
	return flag;
}
// console.log(Superincreasing([1, 2, 3, 5, 15]));

// Question :
/*
 * Have the function SumMultiplier(arr) take the array of
 * numbers stored in arr and return the string true if any two
 * numbers can be multiplied so that the answer is greater than
 * double the sum of all the elements in the array. If not,
 * return the string false.
 * For example: if arr is [2, 5, 6, -6, 16, 2, 3, 6, 5, 3] then
 * the sum of all these elements is 42 and doubling it is 84.
 * There are two elements in the array, 16 * 6 = 96 and 96 is
 * greater than 84 so your program should return the string true
 *
 * Examples
 * Input 1: [2, 2, 2, 2, 4, 1]
 * Output 1: false
 *
 * Input 2: [1, 1, 2, 10, 3, 1, 12]
 * Output 2: true
 */
function SumMultiplier(arr) {
	const sum = arr.reduce((acc, value) => acc + value, 0);
	const double = sum + sum;
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length; j++) {
			if (i !== j) {
				const ans = arr[i] * arr[j];
				if (ans > double) return true;
			}
		}
	}
	return false;
}
// console.log(SumMultiplier([1, 1, 2, 10, 3, 1, 12]));
// console.log(SumMultiplier([2, 2, 2, 2, 4, 1]));
// console.log(SumMultiplier([2, 5, 6, -6, 16, 2, 3, 6, 5, 3]));

// Question :
/*
 * Have the function OtherProducts(arr) take the array of
 * numbers stored in arr and return a new list of the products
 * of all the other numbers in the array for each element.
 * For example: if arr is [1, 2, 3, 4, 5] then the new array,
 * where each location in the new array is the product of all
 * other elements, is [120, 60, 40, 30, 24].
 * The following calculations were performed to get this answer
 * [(2*3*4*5), (1*3*4*5), (1*2*4*5), (1*2*3*5), (1*2*3*4)].
 * You should generate this new array and then return the
 * numbers as a string joined by a hyphen: 120-60-40-30-24.
 * The array will contain at most 10 elements and at least 1
 * element of only positive integers.
 *
 * Examples
 * Input 1: [1,4,3]
 * Output 1: 12-3-4
 *
 * Input 2: [3,1,2,6]
 * Output 2: 12-36-18-6
 */
function OtherProducts(arr) {
	let ansstr = '';
	for (let i = 0; i < arr.length; i++) {
		let mul = 1;
		for (let j = 0; j < arr.length; j++) {
			if (i !== j) {
				mul *= arr[j];
			}
		}
		ansstr += mul + '-';
	}
	return ansstr.substring(0, ansstr.length - 1);
}
// console.log(OtherProducts([1, 2, 3, 4, 5]));
// console.log(OtherProducts([1, 4, 3]));
// console.log(OtherProducts([3, 1, 2, 6]));

// Question :
/*
 * Have the function FindIntersection(strArr) read the array of
 * strings stored in strArr which will contain 2 elements: the
 * first element will represent a list of comma-separated
 * numbers sorted in ascending order, the second element will
 * represent a second list of comma-separated numbers
 * (also sorted).
 *
 * Your goal is to return a comma-separated string containing
 * the numbers that occur in elements of strArr in sorted order.
 * If there is no intersection, return the string false.
 *
 * Examples
 * Input 1: new string[] {"1, 3, 4, 7, 13", "1, 2, 4, 13, 15"}
 * Output 1: 1,4,13
 *
 * Input 2: new string[] {"1, 3, 9, 10, 17, 18", "1, 4, 9, 10"}
 * Output 2: 1,9,10
 */
function FindIntersection(strArr) {
	const arr1 = strArr[0].split(', ').map((value) => (value = Number(value)));
	const arr2 = strArr[1].split(', ').map((value) => (value = Number(value)));
	let str = '';
	for (let i = 0; i < arr1.length; i++) {
		for (let j = 0; j < arr2.length; j++) {
			if (arr1[i] === arr2[j]) {
				str += arr1[i] + ',';
			}
		}
	}
	return str.substring(0, str.length - 1);
}
// console.log(FindIntersection(["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]));
// console.log(FindIntersection(["1, 3, 9, 10, 17, 18", "1, 4, 9, 10"]));

// Question :
/*
    
*/
function primefind(num) {
	let arr = [];
	let temp = 0;
	let i = 1;
	while (true) {
		let count = 0;
		for (let j = 0; j < i; j++) {
			if (i % j === 0) {
				count++;
			}
		}
		if (count < 2) {
			arr.push(i);
			temp++;
		}
		if (temp === num + 1) {
			break;
		}
		i++;
	}
	return arr[arr.length - 1];
}
console.log(primefind(9));
