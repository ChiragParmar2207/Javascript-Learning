/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!

Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
    and print it to the console. Don't forget that there can be a draw, so test for that
    as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
    team only wins if it has a higher score than the other team, and the same time a
    score of at least 100 points. Hint: Use a logical operator to test for minimum
    score, as well as multiple else-if blocks
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
    both teams have the same score and both have a score greater or equal 100
    points. Otherwise, no team wins the trophy

Test data:
* Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
* Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
* Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106 
*/

const d1 = 96;
const d2 = 108;
const d3 = 89;
const k1 = 88;
const k2 = 91;
const k3 = 110;

// const d1  = 97;
// const d2  = 112;
// const d3  = 101;
// const k1  = 109;
// const k2  = 95;
// const k3  = 123;

// const d1  = 97;
// const d2  = 112;
// const d3  = 101;
// const k1  = 109;
// const k2  = 95;
// const k3  = 106;

// 1
const dAverage = d1 + d2 + d3 / 3;
const kAverage = k1 + k2 + k3 / 3;
console.log(dAverage, kAverage);

// 2
if (dAverage > kAverage) {
	console.log('Dolphins is win the match');
} else if (dAverage < kAverage) {
	console.log('Koalas is win the match');
} else {
	console.log('Match draw');
}

// 3, 4
const minimum = 100;
if (dAverage > kAverage && dAverage >= minimum) {
	console.log('Dolphins is win the match');
} else if (dAverage < kAverage && kAverage >= minimum) {
	console.log('Koalas is win the match');
} else if (dAverage === kAverage && dAverage >= 100 && kAverage >= 100) {
	console.log('Match draw');
} else {
	console.log('No one Win');
}
