//const person={name: 'John', age:33}// creating the object
const key='email'
const person={name: 'John', age:22,
    hobbies:["poem","singing","reading book"]// they are also know as key value pairs
}
console.log(person);
console.log("name",person.name);
console.log("age",person.age);
console.log("hobbies",person.hobbies);
person.gender="male"
person["blood"]="A+"
person[key]="kkarki349@rku.ac.in"// here key compute the value  form the above key where it have email values  so it's returns the email insted of key 
console.log(person);

