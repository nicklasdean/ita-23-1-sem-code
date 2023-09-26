//Refactoring a function from function declaration to arrow function
//Ask the users name, return as string

const fetchUserName = () => {
    const name = prompt("Hvad er dit navn min ven?");
    return name;
}

const writeAndAlertUser = (name) =>{
    alert(name);
}

const nameFromUser = fetchUserName();
writeAndAlertUser("brugeren indtastede" + nameFromUser);