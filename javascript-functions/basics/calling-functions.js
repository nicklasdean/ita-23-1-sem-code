//array sorting
array = [5,2,4,3,4,4,423,4,5,6,7,2,3,4];
// console.log(array);
const sortedArray = array.sort();

// console.log("array " + array)
// console.log("sortedArray " + sortedArray)

//split example for exercise
const str = 'Nicklas;33;Lecturer';
const splitString = str.split(";");
// console.log(splitString[1]);

//concat example for exercise
anotherArray = [0,0,0,0,0,0,0,0];
const joinedArray = array.concat(anotherArray);

//Sorting the joinedArray
const sortedJoinedArray = joinedArray.sort();

// console.log(sortedJoinedArray);


//Exercise A3.

// Create the initial javascript like this:
// Calculate the total age of all participants
participants = ["nicklas;33","benjamin;44","lars;55","Kasper;23"];

let sum = 0;

for (let i = 0; i < participants.length; i++) {
    let currentElement = participants[i];
    let currentElementAsArray = currentElement.split(";");
    let currentElementNumberOnly = parseInt(currentElementAsArray[1]);
    sum = sum + currentElementNumberOnly;
}

console.log(sum);
