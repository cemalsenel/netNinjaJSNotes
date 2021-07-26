console.clear();
//callbacks & foreach

const myFunc =(callbackFunc)=>{
    //do something
    let value = 50;
    callbackFunc(value);
};

myFunc(function(value){
    //do something
    console.log(value);
});

let people = ["jimmy","jim","mario","cemil","oguz"];

people.forEach(function(person,index){
    console.log(index,person);
});

people.forEach(person => {
    console.log(person);
});

const logPerson = (person,index)=>{
    console.log(`${index}- hello ${person}`);
}
people.forEach(logPerson);