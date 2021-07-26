//regular function
const calcArea = function(radius){
    return 3.14 * radius**2;
}
//arrow function
const calcArea1 = radius => 3.14 * radius**2;  ///if there only one parameter,we can remove the parenthesis. if zero or more than parameter, we cannot remove the parenthesis
const area = calcArea1(5);
console.log("area is :",area)

const greet = () => "hello world";
const result =greet();
console.log(result);

const bill = (products,tax) => {
    let total = 0;
    for (let i =0; i<products.length;i++){
        total += products[i]+products[i]*tax;
    }
    return total;
};

console.log(bill([10,15,30],0.2));