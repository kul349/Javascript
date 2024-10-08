// it helps to get the value from array 
const array=["value1","value2","value3","value4","value5","value6","value7","value8"];
// let [var1,var2]=array
let[var1,var2,...myNewArray]=array;//(...)=>i's helps to store the rest value in new variable such as myNewArray
console.log(var1);
console.log(var2);
console.log(myNewArray);


/// this describe about .some() function => this check at least one of the itmes are true if it find anyone is true then ti will give you result as true if it

const users = [
    { name: 'Alice', active: false },
    { name: 'Bob', active: true },
    { name: 'Charlie', active: false }
];

// Check if there is at least one active user
const hasActiveUser = users.some(user => user.active);

if (hasActiveUser) {
    // If there is an active user, find the first active user and get their name
    const activeUser = users.find(user => user.active);
    console.log(`Active user found: ${activeUser.name}`); // Output: Active user found: Bob
} else {
    console.log("No active users found.");
}