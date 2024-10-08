function createUser(firstName, lastName, age, email, address, password) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.address = address;
    this.age = age;
}

// Add methods to the prototype of createUser
createUser.prototype.about = function() {
    return `${this.firstName} is ${this.age}`;
};

createUser.prototype.is18 = function() {
    return this.age <= 18;
};

const user1 = new createUser("prakash", "karki", 23, "prakash123@gmail.com", "chaudandigadhi-9", "yourlifeyouchoice");
console.log(user1);
console.log(user1.about());
console.log(user1.is18());
