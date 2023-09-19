const prices = [10, 23, 100];

for (const price of prices) {
    /*console.log(price);*/
}

const numbers = [34, -5, 3, -100];
let firstNumber = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < firstNumber) {
        firstNumber = numbers[i];
    }
}

/*console.log("The smallest number is: " + numbers);*/

const searchData = ['apple', 'banana  ', '  Cherry', 'apple ', 'APPLE', '  Banana'];

// 1. Iterate through the array - check
// 2. remove white space - check
// 3. all elements to lowercase - check
// 4. remove duplicates
const cleanedData = [];
searchData.forEach((currentWord, i) => {
    /*console.log(currentWord);*/
    const trimmedWord = currentWord.trim();
    /*console.log(trimmedWord);*/
    const lowercaseWord = trimmedWord.toLowerCase();
    console.log(lowercaseWord);
    const lowercaseWordNotInArray = !cleanedData.includes(lowercaseWord);

    if(lowercaseWordNotInArray) {
        // add lowercase word to cleaned data array
        cleanedData.push(lowercaseWord);
    }
})

console.log(cleanedData);


