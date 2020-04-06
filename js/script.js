// Learning Functional Programing with JS ES6+//

/*const numbers = [1,2,3,4,5];
numbers.reverse();
console.log(numbers);
const doubledNumbers = [];
for (let i= 0; i< numbers.length; i++) {
    doubledNumbers.push(numbers[i] * 2);
    console.log(doubledNumber);
}
fonctinning 
const numbers = [1,2,3,4,5];
const double = x => x * 2;
const doubledNumbers = numbers.map (double);
console.log(doubledNumbers);

const timeItself = []
const numbers = [1,2,3,4,5];
const multiplyByitself = x => x * x;
for (let i= 0; i< numbers.length; i++); {
    const timeItself = numbers.map (multiplyByitself);
    console.log(timeItself);
}


//filter//

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const isEven = x => x % 2 === 0;
const evenNumbers = numbers.filter(isEven);
console.log(evenNumbers);


const words = [
    'hello',
    'goodbye',
    'tree',
    'Antarctica'
];
const isLongerThan5 = word => word.length > 5;
const longWords = words.filter(isLongerThan5);
console.log(longWords);


//Every/Some
 
const formValues = [
    'Shaun',
    'Watt',
    'Heene',
    'developer'
];
const isNotEmpty = string => !! string;
const allFieldsFilled = formValues.every(isNotEmpty);
console.log(allFieldsFilled);


// Slice & Sort //

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers.slice(2, 8));


const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers.slice());



const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers.slice().reverse());

const mixedUpNumbers = [10, 2, 4, 3, 7, 5, 8, 9, 1, 6];
const ascending = (a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
}

const sortedNumbers = mixedUpNumbers.slice().sort(ascending);
console.log(sortedNumbers);
*/

const mixedUpNumbers = [10, 2, 4, 3, 7, 5, 8, 9, 1, 6];
const descending = (a, b) => {
    if (a > b) return -1;
    if (a < b) return 1;
    return 0;
}

const sortedNumbers = mixedUpNumbers.slice().sort(descending);
console.log(sortedNumbers);