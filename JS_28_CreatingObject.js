//object literals

let user = {
    name:"jimmy",
    age:20,
    email:"jimmy@gmail.com",
    location:"berlin",
    blogs:["cheese rules","hi to everyone"]
};
console.log(user);
console.log(user.name);
console.log(user["name"]);
user["name"]="john";
console.log(user["name"]);

user.age=35;
console.log(user.age);

const key ="location";//not preferred
console.log(user[key])


console.log(user["email"]);

console.log(typeof(user));
