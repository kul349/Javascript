const person={name: 'John', age:22,
    hobbies:["poem","singing","reading book"]// they are also know as key value pairs
}
for(let key in person){
    console.log(person[key]);// it compare the key with above object  and compute the value
    //console.log(person.key) => it will try to find the key in given object 
}
