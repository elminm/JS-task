// Task 1
// function getName1(name) {
//     return `Name equals ${name}`;
// }

// const getName2 = function (name) {
//     return `Name equals ${name}`;
// };

// const getName3 = (name) => {
//     return `Name equals ${name}`;
// };

// console.log(getName1('Ali'));
// console.log(getName2('Vali'));
// console.log(getName3('Pirvali'));

// Task 2

// function getSumOfNumbers(num, type) {
//     let sum = 0;
//     for (let i = 0; i <= num; i++) {
//         if (type === 'odd' && i % 2 === 1) {
//           sum += i;
//         } else if (type === 'even' && i % 2 === 0) {
//           sum += i;
//         } else if (type === '') {
//           sum += i;
//         }
//       }
//       return sum;
//     }

//     console.log(getSumOfNumbers(9, 'odd'));
//     console.log(getSumOfNumbers(10, 'even'));
//     console.log(getSumOfNumbers(8, ''));

//Task 3

// function getDivisors(num) {
//     if (isNaN(num) || num < 0) {
//         alert("Number must be an integer and greater than zero!")
//     }
//     let dividers = 0;
//     for (let i = 1; i <= num; i++) {
//         if (num % i === 0) {
//             dividers++;
//         }
//     }
//     return dividers;
// }

// console.log(getDivisors(10));

// Task 4
// function checkQuestionAnswer(question, correctAnswer) {
//     let userAnswered = prompt(question)
//     const answered = userAnswered.trim().toLowerCase();
//     const correctAnswered = correctAnswer.trim().toLowerCase();
//     if (correctAnswered === answered || correctAnswered === answered) {
//         alert("Answer is correct");
//     }

//     else {
//         alert("Answer is wrong")
//     }
// }
// checkQuestionAnswer('Is the watermelon a fruit or a berry?', 'A berry');
// checkQuestionAnswer('How many teeth does an average adult have?', '32');
// checkQuestionAnswer('What is the name of the smallest bird in the world?', 'Hummingbird');