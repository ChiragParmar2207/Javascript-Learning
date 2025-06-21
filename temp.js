// // 1. Write a JavaScript program to find all unique values in given array numbers.
//     const arr1 = [1, 2, 2, 3, 4, 4, 5];

//     // First way
//     // const arrset = new Set(arr1);
//     // const newarr = [...arrset];

//     // Second way
//     const newarr = [...new Set(arr1)];

//     // console.log(newarr)

// // 2. Write a JavaScript program to count the number of arrays inside a given array.
//     const arr2 = [2,8,[6],3,3,5,3,4,[5,4]];
//     const count = arr2.reduce((count, value) => Array.isArray(value) ? count + 1 : count, 0);
//     // const count = arr2.filter(n => Array.isArray(n)).length;
//     // console.log(count);

// // 3. Write a JavaScript program that takes an array with mixed data type and calculate the sum of all numbers.
//     const arr3 = [2, "11", 3, "a2", false, 5, 7, 1];
//     let sum = 0;
//     for (let i = 0; i < arr3.length; i++) {
//         if(typeof arr3[i] === 'number') {
//             sum += arr3[i];
//         }
//     }
//     // console.log(sum); // 18

// // 4. Write a JavaScript program to find the most frequent item of an array.
//     const arr4 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//     const choose = 'a';
//     const repeate = arr4.reduce((acc, cur) => cur === 'a' ? ++acc : acc, 0);
//     // console.log(repeate);  // 5

// // 5. Write a JavaScript function to get a random item from an array.
//     const arr5 = [46, 33, 65, 76, 74, 31, 91];
//     // console.log(arr5);
//     const random = arr5[Math.floor(Math.random() * arr5.length)];
//     // console.log(random);

// // 6.  Plus Minus  (week 1) complete
// There are n = 5 elements, two positive, two negative and one zero.
// // Their ratios are 2 / 5 = 0.400000, 2 / 5 = 0.400000 and 1 / 5 = 0.200000. Results are printed as:
// // output
// // 0.400000
// // 0.400000
// // 0.200000
//     const arr6 = [1, 1, 0, -1, -1];
//     const length = arr6.length;
//     const positive = arr6.filter(num => num > 0).length;
//     const nagetive = arr6.filter(num => num < 0).length;
//     const zero = arr6.filter(num => num === 0).length;
//     // console.log(positive, nagetive, zero, length);

//     // console.log(positive / length);
//     // console.log(nagetive / length);
//     // console.log(zero / length);

// // 7.  Sparse Arrays  (week 1) complete
//     const arr7 = ['aba', 'baba', 'aba', 'xzxb'];
//     const temp = ['aba', 'xzxb', 'ab'];
//     function checknum (arr1, arr2) {
//             for (const value2 of arr2) {
//                 let count = 0;
//                 for (const value1 of arr1) {
//                     if (value2 === value1) {
//                         count++;
//                     }
//                 }
//                 // console.log(count);
//             }
//     }
//     checknum(arr7, temp);

// // 8.  Lonely Integer  (week 1) complete
//     const a = [0, 0, 1, 2, 1];
//     // console.log("a : ", a);
//     // const a = [1];
//     let temp1 = new Map();
//     for (const n of a) {
//         let count = 0;
//         for (const num of a) {
//             if (n === num) {
//                 count++;
//             }
//         }
//         temp1.set(n, count);
//     }
//     // console.log(temp1);
//     // const num = temp1.forEach(function (value, i) {
//     //     if (value === 1)
//     //         return value;
//     // });
//     let num = 0;
//     for (const [k, v] of temp1) {
//         // console.log("k : ", k, "v : ", v);
//         if (v === 1) {
//             num = k;
//         }
//     }
//     // console.log(num);

// // 9.  Mini-Max Sum (week 1) complete
// const arr = [7, 69, 2, 221, 8974];
// let temp3 = [];
// for (let i = 0; i < arr.length; i++) {
//     let sum = 0;
//     for (let j = 0; j < arr.length; j++) {
//         if (i !== j) {
//             sum += arr[j];
//         }
//     }
//     temp3.push(sum);
// }
// console.log(Math.min(...temp3), Math.max(...temp3));
// console.log(temp3);

// // 10.  Time Conversion  (week 1) complete
//     const str = `12:45:54PM`;
//     const hour = str.slice(0, 2);
//     const minute = str.slice(3, 5)
//     const second = str.slice(6, 8);
//     if (str.slice(8) === 'PM') {
//         const h = hour === '12' ? 12 : Number(hour) + 12;
//         return `${h}:${minute}:${second}`;
//     }
//     else {
//         const h = hour === '12' ? 00 : hour;
//         return `${h}:${minute}:${second}`;
//     }

// 11.  Diagonal Differance   (week 1) complete
// const arr = [[11, 2, 4], [4, 5, 6], [10, 8, -12]];
// let sum1 = 0;
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//         if (i === j) {
//             sum1 = sum1 + arr[i][j];
//         }
//     }
// }

// let sum2 = 0;
// let temp = arr.length - 1;
// let temp1 = 0;
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//         if (i === temp1 && j === temp) {
//             sum2 = sum2 + arr[i][temp];
//         }
//     }
//     temp--;
//     temp1++;
// }
// console.log(Math.abs(sum1 - sum2));
// console.log(Math.abs(sum1 - sum2));

// 12.  Pangrams  (week 1) incomplete
// let str = "WwmdRukNYPMFBxYFPVtZrzs FAktokrLtdPyVRWCyqSHaqjttuhYNXpwnzwoXDC AdKRP AWwEamzQlOT EweNHXGkYrgJJwzErXvkiYIGOK goZXDYecGz oPHaxcZZC Z ktcXTnPFeuPQgQqoJS LZtk nOA zXc QyDseEIHVueKlgZVcQhgc hNHCQJS NXqvz EIOrqfPcBaXHDmWCHKMufyLXBQPVROdnlWDICRO qUNaVNP I fJAoEK saAnGbE pXvQW nd bitUAdJoIkbhPkwiKVUxpgV NsDCpwztiCXliMHrOEicnEsVc uIiai hLRqwFVeeHQzXXqVgUmNcqc TdHCztGUXwnzFGIPdYNZhfFKPQuUI ynSWARRzzwlRlzL JxsljNx YGfagQnP g VMImbbBNiOjNqtFb ODtQK DxNIfqggIzXgP eGMS kcnelJ kOTAG tSwcSlyMp xVjLZigPdsR yilXJyDa SKGOj yWEROeKfnPE iSFZwHPj ZPwKdllGxEdtpKwTMcB Yuus JgyWdYHj snl HrFqRgVDgVPAh X PBRAkR EwpdMYrlgI QKUnRBfKLwV yXKKGbMkIRIYN dqzaYvIQM vt yvuaGntYHEgEJb TNoPvslu htYlZXayqTlcNclvSOoMyfiTWehzhs W wanyMaAYijgxubvDINMlqHblbjLSJCvCpfvqaWHy qwG lLciwkkuu o NoSTWbytadyGuTRznISvCQhFMtrdqveTmcc mcKNPGowUGBLPmONplkUwZeu N p apQLbHLFSIt vkOcFlSMYZdaZy PzfbRPLTHy gAFo PLRItTAOfuWITfyIzUBc F GEXzyMZHXRpnpxQ NV Cl PIBRgkNNKQTVgGkTNbojQqm VvomeAxXDppIWm I KqyX CTA nt JTSsOH M mKzfGwsT LjXPVYzcJFdVWqkFRNm";
// str = str.replace(/\s/g, "");
// str = str.toLowerCase();
// const temp = str.split('');
// const newstr = [...new Set(temp)];
// console.log(str);

// if (newstr.length === 26)
//     console.log("pangram");
// else
//     console.log("not pangram");

// 13.  Permuting Two Arrays (week 1)  complete
// const q = 2;
// const n = 3;
// const k = 10;
// const a = [2, 1, 3];
// const b = [7, 8, 9];
// a = a.sort((a, b) => a - b);     //  1, 2, 3
// b = b.sort((a, b) => a - b);     //  7, 8, 9
// for (let i = 0; i < n; i++) {
//     if (a[i] + b[n - 1 - i] < k) {
//         console.log("NO");
//         break;
//     }
// }
// console.log("YES");

// 14. test 1 (week 1) complete
// const n = 5;
// if (n % 3 == 0) {
//     console.log("Fizz");
// }
// else if (n % 5 == 0) {
//     console.log("Buzz");
// }
// else if (n % 3 == 0 && n % 5 == 0) {
//     console.log("FizzBuzz");
// }
// else {
//     console.log(n);
// }

// 15.  sales by match (week 2) complete
// const n = 9;
// const arr = [10, 20, 20, 10, 10, 30, 50, 10, 20];
// let arrmap = new Map();
// for (let i = 0; i < n; i++) {
//     let count = 0;
//     for (let j = 0; j < n; j++) {
//         if (arr[i] === arr[j]) {
//             count++;
//         }
//     }
//     arrmap.set(arr[i], count);
// }
// let count = 0;
// arrmap.forEach(function (value, key) {
//     temp = Math.floor(value / 2);
//     count += temp;
// });
// console.log(count);

// 16.  Zig Zag sequence       (week 2)  incomplete
// const arr = [2, 3, 5, 1, 4];
// const n = arr.length;
// let flag = true;
// for(let i = 0; i <= n - 2; i++)
// {
//     // "<" relation expected
//     if (flag)
//     {
//         // If we have a situation like
//         // A > B > C, we get A > B < C
//         // by swapping B and C
//         if (arr[i] > arr[i + 1]) {
//             let temp = arr[i];
//             arr[i] = arr[i + 1];
//             arr[i + 1] = temp;
//         }
//     }

//     // ">" relation expected
//     else
//     {
//         // If we have a situation like
//         // A < B < C, we get A < C > B
//         // by swapping B and C
//         if (arr[i] < arr[i + 1]) {
//              let temp = arr[i];
//              arr[i] = arr[i + 1];
//              arr[i + 1] = temp;
//         }
//     }

//     // Flip flag
//     flag = !flag;
// }
// console.log(arr);

// 17.  Drawing book   (week 2) cpmplete
// const n = 2;
// const p = 1;
// let f = 0;
// let b = 0;
// for (let i = 1; i < n; i++) {
//     if (n === 2) {
//         f = 0;
//         break;
//     }
//     if (p === i || p === (i + 1)) {
//         f = i + 1;
//         break;
//     }
// }
// let temp = 0;
// for (let i = n; i > 1; i--) {
//     if (p === (n-1) && n % 2 != 0) {
//         b = 0;
//         break;
//     }
//     if (p === (n-1)) {
//         b = 2;
//         break;
//     }
//     if (p === i || p === (i + 1)) {
//         b = temp;
//         break;
//     }
//     temp++;
// }
// console.log("f : ", Math.floor(f / 2));
// console.log("b : ", Math.floor(b / 2));

// 18.   MAx Min   (week 2)  complete
// let arr = [4504,1520,5857,4094,4157,3902,822,6643,2422,7288,8245,9948,2822,1784,7802,3142,9739,5629,5413,7232];
// const k = 5;

function maxMin(k, arr) {
	arr.sort((a, b) => a - b);
	let minDiff = Infinity;
	for (let i = 0; i < arr.length - k + 1; i++) {
		let diff = arr[i + k - 1] - arr[i];
		minDiff = Math.min(diff, minDiff);
	}
	return minDiff;
}
// console.log(maxMin(k, arr));

// 19.

// if (str.length < 4 || str.length > 25) return false;
//   if (str.charAt(str.length - 1) === '_') return false
//   if (!startsWithLetter(str.charAt(0))) return false;

//   for (const letter of str) {
//     if (!isAlphaNumericOrUnderscore(letter)) return false;
//   }

//  20. complete

// function LongestWord(sen) {
//   const strarr = sen.split(" ");
//   console.log(strarr);
//   let str = "";
//   for (let i = 0; i < strarr.length; i++) {
//     let temp = strarr[i].replace(/[^a-zA-Z ]/g, "");
//     if (str.length < temp.length) {
//       if (strarr[i]) {
//         str = temp;
//       }
//     }
//   }
//   return str;
// }
// console.log(LongestWord(readline()));

// 21   Recursive Digit Sum  (week 2) complete
const n =
	'7404954009694227446246375747227852213692570890717884174001587537145838723390362624487926131161112710589127423098959327020544003395792482625191721603328307774998124389641069884634086849138515079220750462317357487762780480576640689175346956135668451835480490089962406773267569650663927778867764315211280625033388271518264961090111547480467065229843613873499846390257375933040086863430523668050046930387013897062106309406874425001127890574986610018093859693455518413268914361859000614904461902442822577552997680098389183082654625098817411306985010658756762152160904278169491634807464356130877526392725432086439934006728914411061861235300979536190100734360684054557448454640750198466877185875290011114667186730452681943043971812380628117527172389889545776779555664826488520325234792648448625225364535053605515386730925070072896004645416713682004600636574389040662827182696337187610904694029221880801372864040345567230941110986028568372710970460116491983700312243090679537497139499778923997433720159174153';
const k = 100000;

function superDigit(n, k) {
	if (n.length === 1 && k === 1) return parseInt(n);
	let total = n.split('').reduce((a, b) => parseInt(a) + parseInt(b)) * k;
	return superDigit(total.toString(), 1);
}
console.log(superDigit(n, k));

// 22

// const arr = ['ebacd', 'fghij', 'olmkn', 'trpqs', 'xywuv'];

// function gridChallenge(grid) {
//     const sortedGrid = grid.map(s => s.split('').sort());
//     const stringsInGridLength = grid[0].length;

//     for(let i = 0; i < stringsInGridLength; i++){
//         for(let j = 1; j < sortedGrid.length; j++){
//             if(sortedGrid[sortedGrid.length-j][i] < sortedGrid[sortedGrid.length-j -1][i]){
//                 return 'NO'
//             };
//         }
//     }
//     return 'YES';
// }

// console.log(gridChallenge(arr));

// 23.

// const s = "aaab";
// const copy = s.split("");
// const sarr = s.split("");
// const rarr = sarr.reverse();
// const rstr = rarr.join("");
// if (s === rstr) {

// }
// for (let i = 0; i < s.length; i++) {
//     const tempstr = [...copy];
//     const newstr = tempstr.slice(0 , i);
//     const newstr1 = tempstr.slice(i + 1);
//     const com = [...newstr, ...newstr1];
//     const com1 = [...com];

//     if (com1.join("") === com.reverse().join("")) {
//         console.log(i);
//     }
// }

// 23/
// const date = "14-05-8838 21-11-9693"

// function processData(date) {
//     let month = [];
//     function updateLeapYear(year) {
//         if(year % 400 == 0) {
//             month[2] = 29;
//         } else if(year % 100 == 0) {
//             month[2] = 28;
//         } else if(year % 4 == 0) {
//             month[2] = 29;
//         } else {
//             month[2] = 28;
//         }
//     }

//     function storeMonth() {
//         month[1] = 31;
//         month[2] = 28;
//         month[3] = 31;
//         month[4] = 30;
//         month[5] = 31;
//         month[6] = 30;
//         month[7] = 31;
//         month[8] = 31;
//         month[9] = 30;
//         month[10] = 31;
//         month[11] = 30;
//         month[12] = 31;
//     }

//     function findPrimeDates (d1, m1, y1, d2, m2, y2) {
//         storeMonth();
//         let result = 0;
//         while (true) {
//             let x = d1;
//             x = x * 100 + m1;
//             x = x * 10000 + y1;
//             if(x % 4 == 0 || x % 7 == 0) {
//                 result = result + 1;
//             }
//             if(d1 == d2 && m1 == m2 && y1 == y2) {
//                 break;
//             }
//             updateLeapYear(y1);
//             d1 = d1 + 1;
//             if(d1 > month[m1]) {
//                 m1 = m1 + 1;
//                 d1 = 1;
//                 if(m1 > 12) {
//                     y1 =  y1 + 1;
//                     m1 =  1;
//                 }
//             }
//         }
//         return result
//     }

//     const d1 = Number(date.slice(0,2));
//     const m1 = Number(date.slice(3,5));
//     const y1 = Number(date.slice(6,10));
//     const d2 = Number(date.slice(11,13));
//     const m2 = Number(date.slice(14,16));
//     const y2 = Number(date.slice(17));
//     console.log(findPrimeDates(d1, m1, y1, d2, m2, y2));
// }
// processData(date);

// 24.
// const s = "middle-Outz";
// const k = 2;
// let arr = s.split('');
// let abcd = "abcdefghijklmnopqrstuvwxyz"
// let abcdarr = abcd.split('');
// let abcdarr1 = abcd.split('');

// let ABCD = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
// let ABCDarr = ABCD.split('');
// let ABCDarr1 = ABCD.split('');

// for (let i = 0; i < k; i++) {
//     const temp = abcdarr.shift();
//     abcdarr.push(temp);
//     const temp1 = ABCDarr.shift();
//     ABCDarr.push(temp1);
// }

// let retarr = [];
// for (let i = 0; i < arr.length; i++) {
//     if (abcdarr.includes(arr[i])) {
//         const index = abcdarr1.indexOf(arr[i]);
//         retarr.push(abcdarr[index]);
//     }
//     else if (ABCDarr.includes(arr[i])) {
//         const index = ABCDarr1.indexOf(arr[i]);
//         retarr.push(ABCDarr[index]);
//     }
//     else {
//         retarr.push(arr[i]);
//     }
// }
// console.log(retarr.join(''));

// 25.
// const arr = [2, 5, 3, 1];
// const n = arr.length;
// let countasc = 0;
// for (let i = 0; i < n; i++) {
//     if (arr[i] > arr[n - 1]) {
//         countasc++;
//         const temp = arr[i];
//         arr[i] = arr[n - 1];
//         arr[n - 1] = temp;
//     }
// }
// let countdesc = 0;
// for (let i = 0; i < n; i++) {
//     if (arr[i] < arr[n - 1]) {
//         countdesc++;
//         const temp = arr[i];
//         arr[i] = arr[n - 1];
//         arr[n - 1] = temp;
//     }
// }
// console.log(Math.min(countasc, countdesc));

// 26.
// const findThirdLargest = arr => {
//     arr = arr.sort((a, b) => b.length - a.length);
//     return arr[2];
// }
// const str = ['hello', 'world', 'before', 'all'];
// console.log(findThirdLargest(str));

// 27.

const mathChallange = (str) => {
	for (let i = 0; i <= 100; i++) {
		const data = str.split('=');
		if (data[0].includes('x')) {
			data[0] = data[0].replace('x', i);
			if (eval(data[0]) === data[1]) {
				return i;
			} else {
				data[0] = data[0].replace(i, 'x');
			}
		} else {
			return eval(data[0]);
		}
	}
	return str;
};
console.log(mathChallange('4x - 2 = 38'));

// 28.
/*
Split Word into Two and Check Existence in Comma Separated String Sequence
*/
const strArr1 = ['powerhouse', 'p,pow,power,house,pose,poser'];
const strArr2 = ['baseball', 'b,ba,base,ball,baseba,all'];

function splitWordIntoTwo(strArr) {
	const word = strArr[0];
	const wordArr = strArr[1].split(',');
	const newArr = [];

	for (let i = 0; i < wordArr.length; i++) {
		for (let j = 0; j < wordArr.length; j++) {
			if (wordArr[i] + wordArr[j] === word) {
				newArr.push(wordArr[i]);
				newArr.push(wordArr[j]);
			}
		}
	}
	return newArr.toString();
}

// console.log(splitWordIntoTwo(strArr1));
// console.log(splitWordIntoTwo(strArr2));

// 29.
/*
Separate Number From String
Sum Of All Numbers
Count Total No Of Letters In String
return round of (sum / total no of letter)
*/
// const str1 = "Hello5,23-32,defge";
// const str2 = "1o5,2e3d6fg9jhvjhv32s2";
// function strOps(str) {
//     let sum = 0;

//     //  Array of numbers
//     const numArr = str.split("").filter((value) => {
//         return Number.isInteger(Number.parseInt(value));
//     }); // Here Array ele is number but type is string. ex. ['1','2','3']

//     // Sum of all numbers
//     numArr.forEach((value) => {
//         sum += Number.parseInt(value);
//     });

//     //   Letters Array
//     const letterArr = str.split("").filter((value) => {
//         return value.match(/[a-zA-Z]/);
//     });

//     console.log(sum);
//     console.log(letterArr);
//     return Math.round(sum / letterArr.length);
// }

// console.log(strOps(str1));
// console.log(strOps(str2));

// 30.
const strArr = ['baseball', 'a,all,b,ball,bas,base,cat,code,d,e,quit,z'];
const word = strArr[0];
const discArr = strArr[1].split(',');

let ansarr = [];
for (let i = 0; i < discArr.length; i++) {
	// if ()
}
// console.log(word);
// console.log(discArr);
