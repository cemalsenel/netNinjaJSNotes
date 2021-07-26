//function expression => cannot be after method call
const speak = function(){
    console.log("good day");
};
greet();
greet();
speak();
speak();

//function declaration => can be before or after method call
function greet(){
    console.log("hello there");
}