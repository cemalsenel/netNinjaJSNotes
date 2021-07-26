console.clear();
let email = "john@gmail.com";

let result = email.lastIndexOf("l");
let result1 = email.slice(1, 5); // characters from 1 to 5 
let result2 = email.substr(1, 5); // =>5 characters after first character
let result3 = email.replace("m", "n"); // replaces first m to n


console.log(result); //9
console.log(result1); //ohn@
console.log(result2); //ohn@g =>5 characters after first character
console.log(result3); //john@gnail.com