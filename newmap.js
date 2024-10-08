const person=new Map();
person.set('name', 'prakash');
person.set('email', 'prakash@gmail.com');
person.set('age',21)
console.log(person);
console.log(person.get('name'));
console.log(person.keys());
for(let key of person.keys()) {
    console.log(key,typeof key);
}
