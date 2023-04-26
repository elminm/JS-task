// Task 1 
// function getSumOfSequence(num) {
//     let arr = [];

//     for (let i = 1; i <= num; i++) {
//         arr.push(i)
//     }

//     return arr[0] + arr[arr.length - 1];
// }

// console.log(getSumOfSequence(111));


// Task 2
// const peopleWaiting = ['Kristina', 'Oleg', 'Kirill', 'Maria', 'Svetlana', 'Artem', 'Gleb'];

// peopleWaiting.splice(0, 2);


// const indexOfKirill = peopleWaiting.indexOf('Kirill');
// if (indexOfKirill !== -1) {
//     const removedPeople = peopleWaiting.splice(indexOfKirill);
//     removedPeople.shift(); 
//     alert(`The following people left the queue: ${removedPeople.join(', ')}`);
// }

// function giveParcel() {
//     const name = peopleWaiting.shift();
//     if (name) {
//         alert(`${name} received the package. There are ${peopleWaiting.length} people left in the queue.`);
//     } else {
//         alert('No one is waiting in the queue.');
//     }
// }


// function leaveQueueWithoutParcel(name) {
//     const index = peopleWaiting.lastIndexOf(name);
//     if (index !== -1) {
//         peopleWaiting.splice(index, 1);
//         alert(`${name} did not receive the package and left the queue. There are ${peopleWaiting.length} people left in the queue.`);
//     } else {
//         alert(`${name} is not in the queue.`);
//     }
// }

// giveParcel();
// leaveQueueWithoutParcel('Maria');



// Task 3
// const numbers = [10, 4, 100, -5, 54, 2];
// const sum = numbers.reduce((acc, number) => {
//     return acc + Math.pow(number, 3);
// }, 0);
// console.log(sum);

// Task 4
// const coffees = ['Latte', 'Cappuccino', 'Americano'];

// const coffeeName = prompt('Search coffee by name:').toLowerCase(); // converting to lowercase

// const coffeeIndex = coffees.findIndex(coffee => coffee.toLowerCase() === coffeeName);

// if (coffeeIndex !== -1) {
//   alert(`Keep your favorite coffee ${coffees[coffeeIndex]}. It is ${coffeeIndex + 1}-th most popular in our coffee shop.`);
// } else {
//   alert('Unfortunately, this type of coffee is not available');
// }

// Task 5

// const coffees = ['Latte', 'Cappuccino', 'Americano'];
// const prices = [1.5, 1, 2];


// const increasedPrices = prices.map(price => price + 0.5);

// coffees.forEach((coffee, index) => {
//   const increasedPrice = increasedPrices[index];
//   alert(`${coffee} is now worth ${increasedPrice} euro`);
// });

// Task 6

// const clientsEstimations = [];

// function askClientToGiveEstimation() {
//   const estimation = Number((prompt('How do you rate our coffee shop from 1 to 10?')));
//   if (!isNaN(estimation) && estimation >= 1 && estimation <= 10) {
//     clientsEstimations.push(estimation);
//   }
// }

// for (let i = 0; i < 5; i++) {
//   askClientToGiveEstimation();
// }

// const positiveEstimations = clientsEstimations.filter(estimation => estimation > 5);
// const negativeEstimations = clientsEstimations.filter(estimation => estimation <= 5);

// alert(`Total positive estimates: ${positiveEstimations.length}; Total negative ratings: ${negativeEstimations.length}`);


// Task 7

// const goals = [8, 1, 1, 3, 2, -1, 5];

// const maximumGoals = Math.max(...goals.filter(goal => goal > 0));
// const maxGoalIndex = goals.indexOf(maximumGoals);
// alert(`The most scoring match was at number ${maxGoalIndex + 1}. There were ${maximumGoals} goals scored in it.`);


// const minimumGoals = Math.min(...goals.filter(goal => goal > 0));
// const minimumIndexes = goals.reduce((acc, cur, i) => {
//     if (cur === minimumGoals) {
//         acc.push(i + 1);
//     }
//     return acc;
// }, []);
// alert(`The most unsuccessful matches were under the numbers ${minimumIndexes.join(', ')}. In each of them, ${minimumGoals} ball(s) were scored.`);

// const totalGoals = goals.reduce((acc, cur) => {
//     return cur > 0 ? acc + cur : acc;
// }, 0);
// alert(`The total number of goals for the season is equal to ${totalGoals}`);

// const hasDefeats = goals.includes(-1);
// alert(`There were automatic defeats: ${hasDefeats ? 'yes' : 'no'}`);


// const numMatches = goals.filter(goal => goal >= 0).length;
// const avgGoals = totalGoals / numMatches;
// alert(`The average number of goals per match is equal to ${avgGoals}`);


// const sortedGoals = goals.filter(goal => goal >= 0).sort((a, b) => a - b);
// alert(`Sorted goals in ascending order: ${sortedGoals.join(', ')}`);
