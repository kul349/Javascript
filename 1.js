// let age=17;
// if(age>18){
//     console.log("user can play pubg game");
// }
// else{
//     console.log("user study hard");
// }
// let firstName="kulbahadur";
// if(firstName[0]==="k"){
//     console.log("this name contain first letter as k")
// }
// else{
//     console.log("this name doesn't contain first letter as k");
// }
// && this is use for apply for both condition true , it only give  true result only when two condition true
// || this is uer as a or which means if the any one condition get true then it will give you a true result 
let userwinningNumber=9;
let userGuess=+ prompt(" please enter your guess number");
// console.log(typeof userGuess, userGuess);
if(userGuess===userwinningNumber){
    console.log("conguratulation, your guess is correct");

}else{
    if(userGuess>userwinningNumber){
        console.log("your guess is very high")
    }
    else{
        console.log("your guess is too low");
    }
}