let user=+prompt("enter the temperatuer:")
if(user<0){
    console.log("extermly cold outside");
}else if(user<10){
    console.log("it is cold outside");
}
else if(user<30){
    console.log("cold outside")
}
else{
    console.log("hot outside")
}