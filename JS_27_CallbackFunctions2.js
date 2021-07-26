//get a reference to the "ul"
const ul = document.querySelector(".people");
const people = ["jimmy","jim","mario","cemil","oguz"];
let html = ``;
people.forEach(function(person){
    html +=`<li style="color :purple">${person}</li>`;
});
console.log(html);