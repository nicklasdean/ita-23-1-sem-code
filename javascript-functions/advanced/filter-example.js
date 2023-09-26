
// Using a filter function
// Using it with an anonymous arrow function
const salaries = [800,1600,1250,2975,1250,2850,2450,3000,5000,1500];

function isHigherThanLimit(salary){
    if(salary > 1500){
        return true;
    }
    else{
        return false;
    }
}

const highSalaries = salaries.filter(isHigherThanLimit)
console.log(highSalaries)
