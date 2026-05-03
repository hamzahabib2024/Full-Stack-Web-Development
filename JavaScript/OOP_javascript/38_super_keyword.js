// super keyword:
//   super is a keyword that is used in class to call the constructor
//   or access the properties and methods of a parent (super class)

// this = this object
// super = the parent

class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    move(speed){
        console.log(`The ${this.name} moves at a speed of ${speed} km/h`);
    }
}

class Rabbit extends Animal {
    constructor(name, age, runSpeed){
        super(name, age);
        this.runSpeed = runSpeed;
    }

    run(){
        console.log(`The ${this.name} can run.`);
        super.move(this.runSpeed);
    }
}

class Fish extends Animal{
    constructor(name, age, swimSpeed){
        super(name, age);
        this.swimSpeed = swimSpeed;
    }
    swim(){
        console.log(`The ${this.name} can swim.`);
        super.move(this.swimSpeed);
    }
}

class Hawk extends Animal{
    constructor(name, age, flySpeed){
        super(name, age) ;
        this.flySpeed = flySpeed;
    }
    fly(){
        console.log(`The ${this.name} can fly.`);
        super.move(this.flySpeed);
    }
}

const rabbit = new Rabbit('Rabbit', 2, 20);
const fish = new Fish('Fish', 1, 10);
const hawk = new Hawk('Hawk', 3, 30);

console.log(rabbit);
console.log(fish);
console.log(hawk);

console.log(rabbit.name);
console.log(rabbit.age);
console.log(rabbit.runSpeed);
rabbit.run();

console.log(fish.name);
console.log(fish.age);
console.log(fish.swimSpeed);
fish.swim();

console.log(hawk.name);
console.log(hawk.age);
console.log(hawk.flySpeed);
hawk.fly();