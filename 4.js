const fruit=["mango","orange","cucumber","apple"];
 const fruit1=[];
// for(let fruty of fruit) {
//     fruit1.push(fruty.toUpperCase());
// }
// console.log(fruit1);


// "for and IN" loop using by the help of index
for(let fruty  in fruit) {
    fruit1.push(fruit[fruty].toUpperCase());
}
console.log(fruit1);
