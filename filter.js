// const number=[1,2,3,4,5,6,7,8,9];

// const isEven=function(numbers){
//     return numbers%2===0;
// }
// const evenumber=number.filter(isEven);// here we have to store data in some variable 
// console.log(evenumber);
// const numbers=[1,2,3,4,5,6,7,8,9];
// const iseven=(numbers)=>{
//     return numbers%2===0;
// };
// const evenNumber=numbers.filter(iseven);
// console.log(evenNumber);

const name=["prakash","Ramash","Hari","Gopal","Dibash","Lalit"]
const isName=(name)=>{
    return name.startsWith("p");
};
const filterdName=name.filter(isName);
console.log(filterdName);

const AName=(name)=>{
    return name[1]==="a";
};
const fitlerAName=name.filter(AName);
const collectName=fitlerAName.map(name=>name.toUpperCase());
console.log(collectName);
console.log(fitlerAName);
// learning the removing the data

const removeData=(name)=>{
    for(let i=name.length-1; i>=0; i--){
        if(name[i][1]==='o'){
            const deletedName=name.splice(i, 1);
            console.log(deletedName);
        }
    }
}
removeData(name);