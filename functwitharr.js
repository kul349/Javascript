function findTarget(array, target){
    for(var i=0; i<array.length; i++){
        if(array[i]===target){
            return i;
        }
    }
    return -1;
    
}
const myArray =[1,2,3,4,5];
const ans=findTarget(myArray,4);
console.log(ans);

// this dicleartion of function called anynomous fucntion which doesn't have any name (function expression)
const mywrite=function(){
    console.log("you are a brave person");
}
mywrite();
// arrow fuction 
const myRead=()=>{
    console.log("learning is earning");
}
myRead();