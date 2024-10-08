// userMethod={
//     about:function(){
//         return`${this.firstName} is ${this.age}`;
          
//       },
//       is18:function(){
//           return this.age<=18;
//       }
//   }
 
 function createUser(firstName,lastName,age,email,address,password) {
    //  const user={};
    // const user=Object.create(userMethod);// Object.create makes {} object and also make proto chain which means it try to take data form avobe method 
    const user=Object.create(createUser.prototype);

     user.firstName=firstName;
     user.lastName=lastName;
     user.email=email;
     user.password=password;
     user.address=address;
     user.age=age;
    //  user.about=userMethod.about;
    //  user.is18=userMethod.is18;
    
 
 return user;
 
 }

// prototype gives us a free space object and allow us to add the method here 
 createUser.prototype.about=function(){
           return`${this.firstName} is ${this.age}`;

 }
 createUser.prototype.is18=function(){
    return this.age<=18;
}
 const user1 = createUser("prakash","karki",23,"prakash123@gmail.com","chaudandigadhi-9","yourlifeyouchoice");
 console.log(user1);
 console.log(user1.about())