about=function(hobby,favGame){
    console.log(this.firstName, this.age,hobby,favGame);
}
user1={
    firstName:"prakash",
    age:18,
}
user2={
    firstName:"rabin",
    age:17,
}
about.call(user2,2,4);// call is specally used for called the particular function which have the specific  data 
about.apply(user2,["poem","chess"]);// apply ask the variable in the form of array of objects
const  func=about.bind(user2,"poem","chess")
func();