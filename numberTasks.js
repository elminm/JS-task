// Task 1
// const existsUserLogin = "the_best_user";
// const existsUserPassword = "12345678";
// const Login = () => {
//     const login = prompt("Enter Login");
//     if (existsUserLogin === login.trim()) {
//         const password = prompt("Enter Password");
//         if (existsUserPassword === password.trim()) {
//             alert(`Welcome ${login.trim()}`)
//         } else {
//             alert("The password is wrong");
//             Login();
//         }
//     } else {
//         alert('The username is wrong');
//         Login();
//     }
// }
// Login();



// Task 2
// let i = 0;
// do {
//     let newStudent = prompt("Enter the name of the new student" + ' ' + `${i + 1}`);
//     newStudent = newStudent.trim();
//     if (newStudent) {
//         alert(`Welcome ${newStudent}!`)
//     }
// } while (i += 1, i < 3) {
// }



// Task 3
// let sum = 0;
// for (let i = 0; i <= 100; i++) {
//     sum += i;
// }
// alert(sum);



// Task 4
// let correctAnswer = 0;

// let wrongAnswer = 0;

// let first = +prompt('Whats 2+2');

// if (first === 4) {
//     alert("Answer is correct");
//     correctAnswer += 1;
// } else {
//     alert("Answer is incorrect")
//     wrongAnswer += 1;
// }

// let second = +prompt('How much will 2 * 2 be?');

// if (second === 4) {
//     alert("Answer is correct");
//     correctAnswer += 1;
// } else {
//     alert("Answer is incorrect")
//     wrongAnswer += 1;
// }

// let third = +prompt('Petya had 5 apples. He ate 3 of them and gave 1 to a friend. How many apples does Peter have left?');

// if (third === 1) {
//     alert("Answer is correct");
//     correctAnswer += 1;
// } else {
//     alert("Answer is incorrect")
//     wrongAnswer += 1;
// }


// let forth = +prompt('Masha had 10 sweets. She ate 2 and gave 1 to a friend. After that, mom gave Masha 5 more sweets. How many sweets did Masha have left in the end?');

// if (forth === 12) {
//     alert("Answer is correct");
//     correctAnswer += 1;
// } else {
//     alert("Answer is incorrect")
//     wrongAnswer += 1;
// }


// let fifth = +prompt('What is 2 + 2 * 2?');

// if (fifth === 6) {
//     alert("Answer is correct");
//     correctAnswer += 1;
// } else {
//     alert("Answer is incorrect")
//     wrongAnswer += 1;
// }
// alert(`Correct Answer - ${correctAnswer} and Wrong Answer ${wrongAnswer}`)

// Task 5
// let clientName = 'Igor';
// let clientSpentBefore = 110;
// let clientSpentToday = 25;
// let clientSpentAllTime = clientSpentBefore + clientSpentToday;
// let discount = 0;
// if (100 < clientSpentBefore && clientSpentBefore< 300) {
//     discount = 10;
//     alert(`You are given a discount in ${discount}%!`)
// } else if (300 < clientSpentBefore && clientSpentBefore < 500) {
//     discount = 20;
//     alert(`You are given a discount in ${discount}%!`)
// } else if (clientSpentBefore > 500) {
//     discount = 30;
//     alert(`You are given a discount in ${discount}%!`)
// }
// alert(`Thank you, ${clientName}! Payable ${clientSpentToday -( clientSpentToday * discount / 100)}$. For all the time in our restaurant you spent ${clientSpentAllTime}$.`);

// Task 6
// let clientName = prompt("Enter the client's name");
// let clientSpentToday = Number(prompt("How much did the client spend today?"));
// let clientSpentForAllTime = Number(prompt("How much did the client spend all time?"));
// let discount = 0;
// if (isNaN(clientSpentToday) || isNaN(clientSpentForAllTime)) {
//     alert("The amount that the client spent all time and spent today must be a number! Please reload the page to try again.");
// } else {
//     if (100 < clientSpentForAllTime && clientSpentForAllTime < 300) {
//         discount = 10;
//     } else if (300 < clientSpentForAllTime && clientSpentForAllTime < 500) {
//         discount = 20;
//     } else if ( clientSpentForAllTime > 500) {
//         discount = 30;
//     }
//     let totalSpentToday = clientSpentToday -( clientSpentToday * discount / 100);
//     alert(`Thank you, ${clientName}! You need to pay ${clientSpentToday}$ but because of ${discount}%, you should pay ${totalSpentToday}$ today, because you have been rewarded ${discount}% discount because of for all the time in our restaurant spending ${clientSpentForAllTime}$.`);
// }


