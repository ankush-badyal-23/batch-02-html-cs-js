function Person(name, age) {
    this.name = name;
    this.age = age;
    this.toString = function() {
        return `Person [${this.name}, ${this.age}]`;
    }
}

Person.prototype = Object.create(null);
Person.prototype.constructor = Person;
Person.prototype.speices = 'Hemosepian';
Person.prototype.isAdult = function(){
    return this.age >= 18;
}

const p = new Person('ankush', 41);

console.log('person ', p.name, p.age, p);
console.log(p.toString());
console.log(p.isAdult());

function Student() {
    // Person.call(this, name, age);
    Person.apply(this, arguments);
    this.school = arguments[2];
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
Student.prototype.isInSchool = function() {
    return !!this.school;
}

const a = new Student('ankush', 14, 'Gd Goinka');
const m = new Student('Mahesh', 15);
const s = new Student('Suresh', 18);
console.log('student ', a.name, a.age, a);
console.log('student ', m.name, m.age, m);
console.log('student ', s.name, s.age, s);
console.log('student ', s.toString());
console.log('student is in school', s.isInSchool());
console.log('student is Adult', s.isAdult());