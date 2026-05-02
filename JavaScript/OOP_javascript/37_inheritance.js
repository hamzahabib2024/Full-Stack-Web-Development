// Inheritence in JavaScript:
//    Inheritence allows a new class to inherit properties and methods
//     from an existing class (parent -> child).

// Inheritence helps with code reusability and saves alot of code and time.

class Animal {

    alive = true;
    eat() {
        console.log(`This ${this.name} is eating.`);
    }
    sleep() {
        console.log(`This ${this.name} is sleeping.`);
    }
}

class Rabbit extends Animal {
    name = "Rabbit";
    run(){
        console.log(`This ${this.name} is running.`);
    }
}
class Fish extends Animal {
    name = "Fish";
    swim(){
        console.log(`This ${this.name} is swimming.`);
    }
}
class Hawk extends Animal {
    name = "Hawk";
    fly(){
        console.log(`This ${this.name} is flying.`);
    }
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

console.log(rabbit);
console.log(fish);
console.log(hawk);

fish.eat();
hawk.sleep();

console.log(rabbit.alive);
rabbit.run();
rabbit.eat();
rabbit.sleep();

console.log(fish.alive);
fish.swim();
fish.eat();
fish.sleep();

console.log(hawk.alive);
hawk.fly();
hawk.eat();
hawk.sleep();