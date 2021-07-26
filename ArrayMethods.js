//filter method
const scores = [10, 30, 15, 25, 50, 40, 5];

const filteredScores = scores.filter((score)=>{
    return score > 20;
});

console.log(filteredScores);

const users =[
    {name:"cemil", premium: true},
    {name:"oguz", premium: false},
    {name:"nurettin", premium: false},
    {name:"jimmy", premium: true}
];

const premiumUsers = users.filter(user =>user.premium);

console.log(premiumUsers);

//map method
const prices = [20, 10, 30, 25, 40, 80, 5];

const salePrices = prices.map(price=>price / 2);
console.log(salePrices);

const products =[
    {name:"gold star", price: 20},
    {name:"mushroom", price: 40},
    {name:"green shells", price: 30},
    {name:"red shells", price: 50},
    {name:"banana skin", price: 10}
];

const saleProducts =products.map(product => {
    if(product.price > 30){
        return {name : product.name , price : product.price / 2};
    }else{
        return product;
    }
});
console.log(saleProducts);

//reduce method
const marks = [10, 20, 60, 40, 70, 90, 30];

const result = marks.reduce((acc, curr)=>{
    if(curr >50){
        acc++;
    }
    return acc;
},0);

console.log(result);

const punkts =[
    {player : "oguz", score: 50},
    {player : "cemil", score: 30},
    {player : "oguz", score: 70},
    {player : "victor", score: 60},
    {player : "oguz", score: 80},
    {player : "oguz", score: 20}
];

const oguzTotal = punkts.reduce((acc, curr) => {
    if(curr.player === 'oguz'){
        acc += curr.score;
    }
    return acc;
},0 );

console.log(oguzTotal);

//find method

const nums = [10, 5, 0, 40, 10, 20, 70];

const firstHighScore = nums.find(score => score > 50);

console.log(firstHighScore);

//sort method
//example 1 - sorting strings

const names = ['oguz','cemil','nurettin','victor','jimmy'];
names.sort();
console.log(names);
names.reverse();
console.log(names);

//example 2 - sorting numbers
const numbers = [10, 5, 0, 40, 30, 20, 70, 15, 25];
numbers.sort();
numbers.reverse();
console.log(numbers);
numbers.sort((a,b) => b-a);
console.log(numbers);
numbers.reverse();
console.log(numbers);
//example 3 - sorting objects
const players =[
    {player : "oguz", score: 50}, 
    {player : "cemil", score: 30},
    {player : "oguz", score: 70},
    {player : "victor", score: 60},
    {player : "jimmy", score: 40}  
];

players.sort((a,b)=>{
    if(a.score > b.score){
        return -1;
    }else if(b.score > a.score){
        return 1;
    }else{
        return 0;
    }
});
console.log(players);

players.sort((a,b) => b.score -a.score);
console.log(players)

//chaining Array Methods
const productList =[
    {name:"gold star", price: 10},
    {name:"mushroom", price: 40},
    {name:"green shells", price: 30},
    {name:"red shells", price: 50},
    {name:"banana skin", price: 5}
];

const filtered= productList.filter(product => product.price > 20)

const promos = filtered.map(product => {
    return `the ${product.name} is ${product.price / 2} euros`;
});

console.log(promos);

const promosChain = productList
                    .filter(product => product.price > 20)
                    .map(product =>`the ${product.name} is ${product.price / 2} euros`);

console.log(promosChain);




