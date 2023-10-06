// access
const h1Element = document.querySelector('h1');
console.log(h1Element);
console.log(h1Element.innerText);

// change
setTimeout(() => {
    h1Element.textContent = "something";
}, 1000);

// create new
const liLastElement = document.querySelector('.last-element');
console.log(liLastElement);
liLastElement.insertAdjacentHTML("afterend", "<li>Straberry</li>");

const button = document.querySelector('button');
console.log(button);

button.addEventListener("click", function() {
    console.log("hej");
    liLastElement.insertAdjacentHTML("afterend", "<li>Straberry</li>");
});


