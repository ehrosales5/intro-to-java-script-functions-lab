// Exercise 1

const maxOfTwoNumbers = (x, y) => {
    if (x >= y) {
        return x;
    } else {
        return y;
    }

}

console.log('Exercise 1 Result:', maxOfTwoNumbers(1, 10));
console.log('Exercise 1 Result:', maxOfTwoNumbers(2, 9));
console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 8));
console.log('Exercise 1 Result:', maxOfTwoNumbers(4, 7));


// Exercise 2
const isAdult = (age) => {
    if (age >= 18){
        return 'Adult';
    } else {
        return 'Minor';
    }
}

console.log('Excercise 2 Result:', isAdult(29));
console.log('Excersice 2 Result:', isAdult(12));


// Exercise 3
const isCharAVowel = (Char) => {
    const vowel = ('a', 'e', 'i', 'o', 'u');
    return vowel
}

// Exercise 4
const generateEmail = (name, domain) => {
    return `${name}@${domain}`;
}

console.log('Exercise 4 Result:', generateEmail("ehrosales5", "gmail.com"));

console.log('Exercise 4 Result:', generateEmail("ehrosales6", "hotmail.com"));

console.log('Exercise 4 Result:', generateEmail("ehrosales7", "outlook.com"));

// Exercise 5
const greetUser = (name, timeOfDay) => {
    return `Good ${timeOfDay}, ${name}`;
}

console.log('Exercise 5 Result:', greetUser('Edwin', 'morning'));
console.log('Exercise 5 Result:', greetUser('Andrea', 'afternoon'));
console.log('Exercise 5 Result:', greetUser('Angelica', 'evening'));

// Exercise 6

const maxOfThree = (a, b, c) => {
    return Math.max(a, b, c);
}

console.log('Exercise 6 Result:', maxOfThree(1, 2, 3));
console.log('Exercise 6 Result:', maxOfThree(14, 25, 6));
console.log('Exercise 6 Result:', maxOfThree(77, 80, 69));

// Exercise 7

const calculateTip = (num1, num2) => {
    return (num1 * num2) /100;
}

console.log('Exercise 7 Result:', calculateTip(50, 20));
console.log('Exercise 7 Result:', calculateTip(100, 20));

// Exercise 8

const convertTemperature = (temperature, scale) => {
    if (scale === 'C') {
      return (temperature * 9/5) + 32;
    } else if (scale === 'F') {
      return (temperature - 32) * 5/9;
    } else {
      return "Invalid scale";
    }
  }
  
  console.log('Exercise 8 Result:', convertTemperature(50, "C")); 
  console.log('Exercise 8 Result:', convertTemperature(50, "F")); 
  console.log('Exercise 8 Result:', convertTemperature(100, "C")); 
  console.log('Exercise 8 Result:', convertTemperature(100, "F")); 
  
  // exercise 9

  const basicCalculator = (num1, num2, operation) => {
    switch (operation) {
      case 'add':
        return num1 + num2;
      case 'subtract':
        return num1 - num2;
      case 'multiply':
        return num1 * num2;
      case 'divide':
        if (num2 === 0) {
          return "Error: Division by zero is not allowed.";
        }
        return num1 / num2;
      default:
        return "Invalid operation";
    }
}

console.log('Exercise 9 Result:', basicCalculator(10, 5, ''));
console.log('Exercise 9 Result:', basicCalculator(10, 5, ''));
console.log('Exercise 9 Result:', basicCalculator(10, 5, ''));
console.log('Exercise 9 Result:', basicCalculator(10, 5, ''));