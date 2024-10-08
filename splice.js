// splice method
// start  delete   inserted 
 // splice(start, delete,insert)
 //      from where i start, how many i should delete, what item i should insert into  it
const myArray=["item1","item2","item3"];
// myArray.splice(1,1);
// myArray.splice(1,0,"newItem")
const ans=myArray.splice(1,2,"item3","item4");
console.log(ans);
console.log(myArray);