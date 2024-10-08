// function inside the
function  myfunc(){
    const addM=(num1,num2) =>{
        return num1+num2;
    }
    const sub=function(num1,num2){
        return num1-num2;
    }
    console.log("inside myFunc");
    console.log(addM(2,3));
    console.log(sub(5,2));
}
myfunc();