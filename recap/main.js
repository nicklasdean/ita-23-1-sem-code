console.log("init script");

let age = 23;

const name = "benjamin";

/*const isOld = true;*/

console.log(23 + 45);

const isOld = age > 45;
if (isOld) {
    console.log("you are old");
}

console.log(true && false);

console.log(age == 23);
console.log(age == "23");
console.log(age === "23");

for (let i = 0; i < 10; i++) {
    console.log(i);
}

const numbers = [23, 45, 1, 2];
const userindenumber = 0;

console.log(numbers[userindenumber])
console.log(numbers[0])

const user = {
    name: "benjami",
    age: 36,
}

console.log(user.age);

function smileyLogger(emoji) {
    console.log("👍");

    return "hej";
}

const result = smileyLogger("👍");
console.log(result);


/*smileyLogger("👍");
smileyLogger("😂");*/

console.log(document);

const button = document.querySelector("section.interactive button");
const p = document.querySelector("section.interactive p");
console.log(button);
console.log(p);

console.log(1)
button.addEventListener("click", function() {
    console.log("hello");
    console.log(2);
    const name = "benjamin";
    p.innerText = name;
    p.setAttribute("class", "hjasbdjhsdb");

    const img = document.createElement('img');
    img.setAttribute("src", "https://education.nationalgeographic.org/resource/sun/");
    document.querySelector("body").appendChild(img);
});
console.log(3)

setTimeout(function() {
    console.log("asd");
}, 1000);


const ctx = document.querySelector('#chart').getContext('2d');
const chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            data: [12, 19, 3, 5, 2, 3],
        }]
    }
});

const rolePTag = document.querySelector(".role");
console.log(1)
fetch('https://api.spacexdata.com/v5/launches/latest')
    .then(response => response.json())
    .then(function(spacexData) {
        console.log(spacexData);
        const role = spacexData.crew[0].role;
        rolePTag.innerText = role;
        console.log(2)
    });
console.log(3)





