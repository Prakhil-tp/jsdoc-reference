// @ts-check

/**
 * @file index.js is the root file for this example app
 * @author Prakhil TP
 * @see <a href="https://github.com/prakhil-tp">GitHub Profile</a>
 */

/**
 * Student name
 * @type {string}
 */
const studentName = "John Doe";

/**
 * Array of grades
 * @type {Array<number>}
 */
const grades = [98, 97.7, 76, 89];

/**
 * Todo object
 * @type {{id: number|string, text: string}}
 */
const todo = {
  id: "1",
  text: "Hello"
};

/**
 * Calculate tax
 * @param {number} amount - Total Amount
 * @param {number} tax - Tax Percentage
 * @returns {string} - Total with a dollar sign
 */
const calculateTax = (amount, tax) => {
  return `$${amount + tax * amount}`;
};

/**
 * A student.
 * @typedef {Object} Student
 * @property {number} id - Student ID
 * @property {string} name - Student Name
 * @property {number|string} [age] - Student age (optional)
 * @property {boolean} isActive - Student is active
 */

/**
 * @type {Student}
 */
const student = {
  id: 1,
  name: "John Doe",
  age: 20,
  isActive: true
};

/**
 * Class to create a person object
 */

class Person {
  /**
   *
   * @param {Object} personInfo - Information about person.
   */
  constructor(personInfo) {
    /**
     * @property {string} name - Person name
     */
    this.name = personInfo.name;

    /**
     * @property {string} age - Person age
     */
    this.age = personInfo.age;
  }
  /**
   * @property {Function} greet - A greeting with a name and age
   * @returns {void}
   */
  greet() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age}`);
  }
}

/**
 * See {@link Person}
 */
const person1 = new Person({
  name: "Adrian",
  age: "23"
});
console.log(person1.greet());
