// const myArray = ["hello","cat","dog","elephant"];

//  function isLength3(string){
//  return string.length===3;
// }
// const result=myArray.find(isLength3);// it gives the first element like there are cat and dog but cat cames first so it give result as cat 
// console.log(result);


const users=[
{userrId:1,userrName:"prakash"},
{userrId:2,userrName:"lalit"},
{userrId:3,userrName:"ravin"},
{userrId:4,userrName:"dipesh"}

]
const ans=users.find((Id)=>{return Id.userrId===3})
console.log(ans);