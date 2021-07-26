//type conversion
let score = '100';
console.log(score + 1); //1001
console.log(typeof(score)); //string
score = Number(score);
console.log(score + 1); //100
console.log(typeof(score)); //number

let result = Number('hello');
console.log(result); //NaN


let result1 = String(50);
console.log(result1, typeof(result1)); //50 string


let result2 = Boolean(100);
let result3 = Boolean(0);
console.log(result2); //true
console.log(result3); //false

let result4 = Boolean('0');
let result5 = Boolean('');
console.log(result4); //true
console.log(result5); //false