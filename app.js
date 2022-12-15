//*************ES6*************

// Prevent Object Mutation *******************
// Object.freeze() to prevent data mutation
const mathPI = {
    PI: 3.14
};

Object.freeze(mathPI);


// Arrow functions to write concise anonymous functions ****************
//Can be used for passing a function as an argument to another function.
//Don't need to name these functions because they are not reused anywhere else.
const thisFunc = function() {
    const newVar = 'value';
    return newVar;
}
//Anonymous function with ES6
const thisFunc = () => {
    const newVar = 'value';
    return newVar;
}
//When there's no function body and only a return value, arrow function syntax allows you to omit 'return' and brackets.  Helps simplify smaller functions into one-line statements.
const thisFunc = () => 'value';  //Returns the string 'value' by default.


// Arrow functions with Parameters ****************************
//If an arrow function has a single parameter, the parentheses enclosing the parameter may be omitted.
const doubler = item => item * 2; //8
//Multi parameters
const multi = (item1, item2) => item1 * item2;
multi(5, 2) //10


// Set default parameters for functions ***************************
const greet = (name = 'Anonymous') => 'Hello ' + name;
console.log(greet('Bob')); //Hello Bob
console.log(greet()); //Hello Anonymous  //default kicked on since no name given


// Use rest parameter with function parameters ***********************
//Can create functions that take a variable number of arguments.
//Arguments are stored in an array that can be accessed later from inside the function.
const sum = (...args) => {
    return args.reduce((a, b) => a + b, 0);
}


// Use spread operator to evaluate arrays in-place
//Spread operator allows to expand arrays & other expressions in place where multiple parameters
//or elements are expected.

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];

console.log(arr2); //['JAN', 'FEB', 'MAR', 'APR', 'MAY']


//*************************************************** 
apply() //compute the maximum value in an array
//***************************************************


// Use Destructuring Assignment to extract values from objects *******************
//Destructuring Assignment is special syntax introduced in ES6, for neatly assigning values taken
//directly from an object.

//Instead of
const user = { name: 'John Doe', age: 34 };

const name = user.name;
const age = user.age;

//With destructuring assignment
const { name, age } = user; //[object Object] {
                            //    age: 34,
                            //    name: "John Doe"
                            // }


// Use Destructuring Assignment to assign variables from objects *******************
//Destructuring allows you to assign a new variable name when extracting values.
const { name: userName, age: userAge } = user; 
// Value of "userName" would be the string "John Doe"
// Value of "userName" would be the number 34


// Use Destructuring Assignment to assign variables from nested objects *************
const user = {
    johnDoe: {
        age: 34,
        email: 'johndoe@blank.com'
    }
};
//How to extract the values of object properties and assign them to variables with same name:
const { johnDoe: { age, email }} = user;
//How to assign an object propertires' values to variables with different names:
const { johnDoe: [ age: userAge, email: userEmail ]} = user;


// Use Destructuring Assignment to assign variables from arrays *******************************
//Spread operator unpacks all contents of an array into a comma-separated list
//Cannot pick or choose which elements you wnat to assign to variables
// Change array order:
const a = 8, b = 3;
[a, b] = [b, a]; // 3, 8


// Destructuring Assignment with the Rest Parameter to reassign array elements ****************
//Destructuring Assignment wuth Rest, can be used to collect the rest of the elements into a
//separate array
const [a, b, ...arr] = [1, 2, 3, 4, 5, 6];
console.log(a, b);  // 1, 2
console.log(arr);   // [3, 4, 5, 6]
//Rest element only works correctly as the last variable in the list


// Destructuring Assignment to pass an object as a function's parameters ***********************
 



































