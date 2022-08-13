// Exercises: Level 1
//1) Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

// Enter your age: 30
// You are old enough to drive.

// Enter your age:15
// You are left with 3 years to drive.
//2) Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

// Enter your age: 30
// You are 5 years older than me.
//3) If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways

// using if else
// ternary operator.
//   let a = 4
//   let b = 3
//   4 is greater than 3
// 4)Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

// Enter a number: 2
// 2 is an even number

// Enter a number: 9
// 9 is is an odd number.

//solution to level 1
//solution 1
//solution 2
const myAge = Number(prompt("Enter age"));
const yourAge = Number(prompt("Enter your age"));

if (myAge > yourAge) {
  consoleo.log(`I am ${myAge - yourAge} older than you`);
} else if (yourAge > myAge) {
  console.log(`You are ${yourAge - myAge} older than me`);
} else {
  console.log(`We are age mates`);
}

//solution 3
//using if else
let a = 4;
let b = 3;
if (a > b) {
  console.log(`${a} is greater than ${b}`);
} else {
  console.log(`${a} is less than ${b}`);
}

//ternary operator
a > 3
  ? console.log(`${a} is greater than ${b}`)
  : console.log(`${a} is less than ${b}`);

//solution 4

// Exercises: Level 2
// Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F
// Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer
// Check if a day is weekend day or a working day. Your script will take day as an input.
//     What is the day  today? Saturday
//     Saturday is a weekend.

//     What is the day today? saturDaY
//     Saturday is a weekend.

//     What is the day today? Friday
//     Friday is a working day.

//     What is the day today? FrIDAy
//     Friday is a working day.

//solution to level 2
//solution 1
const studentGrade = Number(prompt("Enter students grade"));

if (studentGrade >= 80) {
  console.log("You have an A");
} else if (studentGrade >= 70 && studentGrade <= 89) {
  console.log("You have a B");
} else if (studentGrade >= 60 && studentGrade <= 69) {
  console.log("You have a C");
} else if (studentGrade >= 50 && studentGrade <= 59) {
  console.log("You have a D");
} else {
  console.log("You have an F");
}

//solution 2
let monthUserInput = prompt("What day is today ?");
let season = monthUserInput.toLowerCase();

switch (season) {
  case "september":
  case "october":
  case "november":
    console.log("The season is Autumn");
    break;
  case "december":
  case "january":
  case "february":
    console.log("The season is Winter");
    break;
  case "march":
  case "april":
  case "may":
    console.log("The season is Spring");
    break;
  case "june":
  case "july":
  case "august":
    console.log("The season is Summer");
    break;
}

//solution 3
let day = prompt("what day is today");
let dayCheck = day.toLowerCase();
switch (dayCheck) {
  case "monday":
  case "tuesday":
  case "wednesday":
  case "thursday":
  case "friday":
    console.log("it is a working day");
    break;
  case "saturday":
  case "sunday":
    console.log("its a weekend");
    break;
}

// Exercises: Level 3
// Write a program which tells the number of days in a month.
//   Enter a month: January
//   January has 31 days.

//   Enter a month: JANUARY
//   January has 31 day

//   Enter a month: February
//   February has 28 days.

//   Enter a month: FEbruary
//   February has 28 days.
// Write a program which tells the number of days in a month, now consider leap year

//solution to level 3
//solution 1
const month = prompt("Enter month");
const daysInMonth = month.toLowerCase();

switch (daysInMonth) {
  case "april":
  case "june":
  case "november":
  case "september":
    console.log("it has 30 days");
    break;
  case "februray":
    console.log("It has 28days");
    break;
  case "december":
  case "january":
  case "july":
  case "august":
  case "october":
    console.log("it has 31days");
    break;
}
