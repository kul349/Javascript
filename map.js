// // map method 
// map give the return in the form of array 
// const number=[1,2,3,4,5,6,7,8,9]
// const square=function(numbers){
//     return numbers*numbers;
// }
// const squareNumber=number.map(square);
// console.log(squareNumber);

// in map we have to store data in some variable such as line number 15
const user=[{firstName: 'John', lastName: 'doe'},
    {firstName:"Prakash",lastName:"karki"},
    {firstName:"Dipesh",lastName:"Thapa"}
]
const userName=user.map((users)=>{
    return users.firstName;
});
console.log(userName);