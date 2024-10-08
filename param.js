// param distructuring 

// commonly use in :
// object and react 
const person={
    firstName:"prakash",
    lastName:"karki",
    gender:"male"

}
// function personDetials(obj){
//     console.log(obj.firstName);
//     console.log(obj.lastName);
//     console.log(obj.gender);
// }
function personDetials({firstName, lastName,gender}){
console.log(firstName);
console.log(lastName);
console.log(gender);
}
personDetials(person);