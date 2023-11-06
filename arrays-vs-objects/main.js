const fruits = ["apple", "banana", "pear"];
console.log(fruits);
const firstElement = fruits[0];
const secondIndex = 1;
console.log(fruits[secondIndex]);

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

fruits.forEach(function (fruit) {
    console.log(fruit);

    if(fruit[0] === 'a') {
        console.log(fruit);
    }
});

// first item is firstname, last is account money
// const user = ["Per", "per@gmail.com", 23, 55];

const user = {
    firstname: "Per",
    email: "per@gmail.com",
    age: 23,
    amount: 55,
}

console.log(user.age);
console.log(user['age']);

function addUser() {

}

const addUser = () => {

}



