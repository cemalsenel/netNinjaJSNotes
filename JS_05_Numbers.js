let radius = 10;
const pi = 3.14;

console.log(radius, pi); //10 3.14

//math operators +, -, *, /, **, %
console.log(10 / 2); //5
let result = radius % 3; //1
let result1 = pi * radius ** 2; //314

//order of operations -> B I D M A S

let result2 = 5 * (10 - 3) ** 2;

let likes = 10;

likes = likes + 1; //11
likes++; //12
likes--; //11
likes += 10; //21
likes -= 5; //16
likes *= 2; //32
likes /= 2; //16
console.log(likes);
console.log(result); //1
console.log(result1); //314
console.log(result2); //245


//NaN - not a number

console.log(5 / 'hello'); //Nan
console.log(5 * 'hello'); //NaN

let result3 = 'the blog has ' + likes + ' likes';
console.log(result3); //the blog has 16 likes