//booleans & comparisons
console.log(true, false, "true", 'false '); //true false true false


//methods can return booleans
let email = 'john@gmail.com';
let names = ['mario', 'luigi', 'toad'];
let result = email.includes('@');
let result1 = email.includes('!');
let result2 = names.includes('luigi');
console.log(result); //true
console.log(result1); //false
console.log(result2); //true


//comparison operators

let age = 25;
console.log(age == 25); //true
console.log(age == 30); //false
console.log(age != 30); //true
console.log(age > 20); //true
console.log(age < 20); //false
console.log(age >= 25); //true
console.log(age <= 25); //true

let name1 = 'john';
console.log(name1 == 'john'); //true
console.log(name1 == 'John'); //false
console.log(name1 > 'crystal'); //true -> comparing first letters according to ascii value
console.log(name1 > 'John'); //true -> comparing first letters according to ascii value
console.log(name1 > 'Crystal'); //true -> comparing first letters according to ascii value