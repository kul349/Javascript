//defult parameter
function myAPP(a,b=0){
    return a+b;
}
console.log(myAPP(4))
// rest parameter 
const readBook =function(a,b,...c){
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(`c is ${c}`);
}
readBook(1,2,3,4,5,6,7,8,9,10,11,12);

const WriterBook = function(A, B, ...C) {
    console.log(`A is ${A}`);
    console.log(`B is ${B}`);
    console.log(`C is ${C}`);
};

WriterBook("d","e","f","g","h","i","j","k");
