// set is itterable 
// no duplcation is allowed 
// set also have it's own method 
// no index-based access
// unique item only(no duplication allowed)
const item=["item1", "item2", "item3"];
const number=new Set();
number.add(1);
number.add(2);
number.add(["item1","item2"]);
number.add(["item1","item2"]);// now the location of this array are different so it will  print both items
number.add(item);
console.log(number);
// const user={
//     firstName: "John",
//     age:27
// }
// for(let users in user) {//  basically for in is for object 
//     console.log(users);
// }
// const items=["item1", "item2", "item3"];//  for of is basically for array 
// for(let item of items) {
// console.log(item);
// }