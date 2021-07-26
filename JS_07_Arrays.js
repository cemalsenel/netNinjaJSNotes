let ninjas = ['john', 'Jack', 'Tim'];
ninjas[2] = 'Scott';

console.log(ninjas); //[ 'john', 'Jack', 'Tim' ]
console.log(ninjas[1]); //Jack
console.log(ninjas[2]); //Scott

let ages = [20, 25, 30, 35];
console.log(ages[2]); //30

let random = ['jimmy', 'johnny', 30, 20];
console.log(random); //[ 'jimmy', 'johnny', 30, 20 ]


console.log(ninjas.length); //3


//Array Methods

let result = ninjas.join(',');

let result1 = ninjas.indexOf('john');

let result2 = ninjas.concat(['ken', 'crystal']);

let result3 = ninjas.push('chan'); //alters the original value(destructive)



console.log(result); //john,Jack,Scott
console.log(result1); //0
console.log(result2); //[ 'john', 'Jack', 'Scott', 'ken', 'crystal' ]
console.log(result3, ninjas); //4 [ 'john', 'Jack', 'Scott', 'chan' ]

let result4 = ninjas.pop(); //alters the original value(destructive)
console.log(result4, ninjas); //chan [ 'john', 'Jack', 'Scott' ]