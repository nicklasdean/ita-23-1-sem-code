//Make first letter of name capital
const name = "torben";
const firstLetterAsUpper = name[0].toUpperCase();
const nameWithFirstLetterUpperCase = firstLetterAsUpper + name.substring(1);
//document.write(nameWithFirstLetterUpperCase);

const names = ["nicklas","benjamin","claus","lenka","edith"];

//Using a standard for-loop
for (let i = 0; i < names.length; i++) {
    const name = names[i];
    const firstLetterAsUpper = name[0].toUpperCase();
    const nameWithFirstLetterUpperCase = firstLetterAsUpper + name.substring(1);
    //document.write(nameWithFirstLetterUpperCase + " ");
}

//Using a foreach loop with an anonymous function
names.forEach((element) => {
    const name = element;
    const firstLetterAsUpper = name[0].toUpperCase();
    const nameWithFirstLetterUpperCase = firstLetterAsUpper + name.substring(1);
    document.write(nameWithFirstLetterUpperCase + " ");
});

//Calculating the average of a number array using ForEach
const numbers = [1,2,3,4,5,6,7];