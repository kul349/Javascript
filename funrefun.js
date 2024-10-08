// function myFunc(){
//     function myFunc1() {
//         console.log("hello world");
//     }
//     return myFunc1;
// }
// const ans=myFunc()
// ans();
// forEach
// map 
// filter 
// reduce 
const numbers=[1,2,3,4,5]
function myFunc(ind,number){
    console.log(`index of ${number} and number is ${ind}`)
}
numbers.forEach(myFunc)
