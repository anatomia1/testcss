class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    introduce(){
        console.log(`My name is ${this.name}.I am ${this.age} years old.`);
    }
}

const person = new Person("Tenta",27);
person.introduce();