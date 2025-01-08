export class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  Welcome() {
    console.log("Hi, My name is " + this.name);
  }
}

export class Employee extends Person {
  constructor(name, age, position, salary) {
    super(name, age);
    this.position = position;
    this.salary = salary;
  }

  Designation() {
    console.log("I am working as a " + this.position);
  }
}
