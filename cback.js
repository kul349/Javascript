// call back function
function myFunc2(name){
    console.log("i am function 2")
    console.log(`my name is ${name}`)
}
function myFunc(callback){
    // callback();// ths is a call back function 
    console.log("hello there, i am lazy rebort")
    callback("prakash")// we can put the name in the callback function
}
myFunc(myFunc2);