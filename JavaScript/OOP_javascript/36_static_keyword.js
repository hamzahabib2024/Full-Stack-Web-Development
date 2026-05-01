// static keyword:
//    it is keyword that defines properties and methods that belong to the class itself, 
//    rather than to instances/ objects created from the class.
// In short, class owns anything that is static, not the objects created from the class.

class MathUtil {
    static pi = 3.14159; // static property

    static getDiameter(radius){
        return 2 * radius;
    }
    static getCircumference(radius){
        return 2 * this.pi * radius; 
    }
    static getArea(radius){
        return this.pi * radius * radius;
    }
}

console.log(MathUtil.pi); // Accessing static property without creating an instance

const MU1 = new MathUtil();
console.log(MU1.pi); // Accessing static property through an instance (it will give undefined)

console.log(MathUtil.getDiameter(5)); // Accessing static method without creating an instance
console.log(MathUtil.getCircumference(5)); 
console.log(MathUtil.getArea(5)); 



// Example 02:

class User{
    static count = 0; // static property to keep track of the number of users

    constructor(username){
        this.username = username;
        User.count++; 
    }

    sayHello(){
        console.log(`Hello, My username is ${this.username}`);
    }
    static getUserCount(){
        return console.log(`There are ${User.count} users online.`);
    }
}

const user1 = new User("Hamza");
const user2 = new User("Haider");
const user3 = new User("Umar");

console.log(User.count);

console.log(user1.count); // Accessing static property through an instance (it will give undefined)

console.log(user1.username); 
console.log(user2.username);
console.log(user3.username);

user1.sayHello();
user2.sayHello();
user3.sayHello();

User.getUserCount(); // Accessing static method without creating an instance
