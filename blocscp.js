// let and const are the block function (in this function we can't data from  outside )
// var is the function  scope 
// {
// const firstName="prakash"
// console.log(firstName);

// }
// {
// var firstName="lalit"
// }
// console.log(firstName);

// scope function 
function myFunc(){
    if(true){
        var firstName = "prakash";
        console.log(firstName);
    }
    //   because the variable created inside the if can aslo  use outside of the condition
    console.log(firstName);
}
myFunc();


//block function

function myApp(){
    let firstName = "";
    if(true){
        let firstName = "pandit lalit";
        console.log(firstName);
    }
    // console.log(firstName); this statement won't print because it's a block
    
}
myApp();