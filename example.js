function createUsers(firstName, lastName, age) {
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.age = age;

    return user;
}

const users = [
    createUsers("Prakash", "Karki", 19),
    createUsers("Alice", "Johnson", 17),
    createUsers("Bob", "Smith", 20),
    createUsers("Sara", "Williams", 16),
    createUsers("John", "Doe", 21)
];

// Find all users below 18
const usersBelow18 = users.filter(user => user.age < 18);
const namesBelow18 = usersBelow18.map(user => user.firstName);

console.log("Users below 18:", namesBelow18); // Output: Users below 18: [ 'Alice', 'Sara' ]

// Find all users above 18
const usersAbove18 = users.filter(user => user.age > 18);
const namesAbove18 = usersAbove18.map(user => user.firstName);

console.log("Users above 18:", namesAbove18); // Output: Users above 18: [ 'Prakash', 'Bob', 'John' ]
