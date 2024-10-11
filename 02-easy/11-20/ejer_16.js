/*
?Older Than Me
Create a method in the Person class which returns how another person's age compares. 
Given the instances p1, p2 and p3, which will be initialised with the attributes name and age, return a sentence in the following format:

{other person name} is {older than / younger than / the same age as} me.

Examples
p1 = Person("Samuel", 24)
p2 = Person("Joel", 36)
p3 = Person("Lily", 24)
p1.compareAge(p2) ➞ "Joel is older than me."

p2.compareAge(p1) ➞ "Samuel is younger than me."

p1.compareAge(p3) ➞ "Lily is the same age as me."
Notes
Check out the Resources tab for some helpful tutorials on JavaScript classes!
If you're really stuck, check out the Solutions tab for answers.
*/

class Person {
  myAge = 30;

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  compareAge(age = this.age) {
    if (this.myAge < age) {
      return `${this.name} is older than me.`;
    } else if (this.myAge > age) {
      return `${this.name} is younger than me.`;
    } else {
      return `${this.name} is the same age as me.`;
    }
  }
}

p1 = new Person("Samuel", 34);
p2 = new Person("Joel", 26);
p3 = new Person("Lily", 30);
p4 = new Person("Random", 20);

console.log(p1.compareAge());
console.log(p2.compareAge());
console.log(p3.compareAge());
console.log(p4.compareAge(40));
