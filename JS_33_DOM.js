//get element by query selector
let para= document.querySelector('div.error');
para= document.querySelector('body > h1');
console.log(para);

const paras = document.querySelectorAll('p');
console.log(paras);
console.log(paras[0]);

paras.forEach(para =>{
    console.log(para);
});

const errors= document.querySelectorAll('error');
console.log(errors);

//get element by ID
const title=document.getElementById("page-title");
console.log(title);

//get elements by their class name
const error=document.getElementsByClassName("error");
console.log(error);


//get elements by their tag name
const tag=document.getElementsByTagName("p");
console.log(tag);
console.log(tag[1]);

//adding && changing page content
const pargraph = document.querySelector('p');

console.log(pargraph.innerText);
pargraph.innerText ="Hey guys!!!";//mevcut yazıya yenisini eklemek için "+" işareti kullanılır.=> pargraph.innerText +="Hey guys!!!";

const paragraph1= document.querySelectorAll('p');
paragraph1.forEach(para=>{
    console.log(para.innerText);
    para.innerText += " new text";
});

const content = document.querySelector(".content");
console.log(content.innerHTML);

content.innerHTML += '<h2>THIS IS A NEW H2</h2>';

const people = ['mario','luigi','yoshi'];
people.forEach(person=>{
    content.innerHTML += `<p>${person}</p>`;
});


//getting & setting attributes
const link =document.querySelector('a');
console.log(link.getAttribute('href'));
link.setAttribute('href','https://www.thenetninja.co.uk');
link.innerText="TheNet Ninja Website";

const mssg = document.querySelector('p');
console.log(mssg.getAttribute('class'));
mssg.setAttribute('class','success');
mssg.setAttribute('style','color:green');


//adding & removing styles
const title = document.querySelector('h1');
title.setAttribute('style','margin:20px');
title.setAttribute('style','color:orange');

console.log(title.style);
console.log(title.style.color);
title.style.margin="10px";
title.style.color="crimson";
title.style.fontSize="35px";
title.style.margin="";

//adding and removing classes
const content = document.querySelector('h1');
console.log(content.classList);
content.classList.add('error');
content.classList.remove('error');

content.classList.add('success');
content.classList.remove('success');

const par1 = document.querySelectorAll('p');
par1.forEach(p=>{
    if(p.textContent.includes('error')){//textContent : display:none olursa dahi metni okuyabilir
        p.classList.add('error');
    }
    if(p.textContent.includes('succes')){
        p.classList.add('success');
    }
})

const title=document.querySelector('#page-title');
title.classList.toggle('test');//if the class does not exist,adds test class
title.classList.toggle('test');//if the class exists, removes that class

//parents,children and siblings
const article=document.querySelector('article');
console.log(article.children);
console.log(Array.from(article.children));
console.log(article.children);

Array.from(article.children).forEach(child=>{
    child.classList.add('article-element');
})

const title=document.querySelector('h2');
console.log(title.parentElement);
console.log(title.parentElement.parentElement);
console.log(title.nextElementSibling);
console.log(title.previousElementSibling);

//chaining
console.log(title.nextElementSibling.parentElement.children);

//events & event listeners
/*
const button = document.querySelector('button');

button.addEventListener('click',()=>{
    console.log('you clicked me');
});
*/
const items =document.querySelectorAll('li');

items.forEach(item => {
    item.addEventListener('click',e =>{
       // console.log('item clicked');
       //console.log(e);
       //console.log(e.target);
       //console.log(item);
       e.target.style.textDecoration = 'line-through';
    });
});

//creating & removing elements
const ul =document.querySelector('ul');
//ul.remove();

const button = document.querySelector('button');

button.addEventListener('click',() => {
    //ul.innerHTML +='<li>something new</li>';
    const li =document.createElement('li');
    li.textContent = 'something new to do';
    //ul.append(li);
    ul.prepend(li);
})

const items =document.querySelectorAll('li');

items.forEach(item => {
    item.addEventListener('click',e =>{
       //e.target.style.textDecoration = 'line-through';
       e.target.remove();
    });
});

//event bubbling & delegation
const ul =document.querySelector('ul');
const button = document.querySelector('button');

button.addEventListener('click',() => {
    const li =document.createElement('li');
    li.textContent = 'something new to do';
    ul.prepend(li);
})

/*
const items =document.querySelectorAll('li');

items.forEach(item => {
    item.addEventListener('click',e =>{
        console.log('event in LI');
        e.stopPropagation();
        e.target.remove();
    });
});
*/
ul.addEventListener('click', e => {
    //console.log('event in UL');
    if(e.target.tagName=='LI'){
        e.target.remove();
    }
});

//more events
const copy=document.querySelector('.copy-me');

copy.addEventListener('copy', () =>{
    console.log('OI! my content is copyright')
});

const box = document.querySelector('.box');
box.addEventListener('mousemove',e => {
   // console.log(e);
   //console.log(e.offsetX,e.offsetY);
   box.textContent = `x position - ${e.offsetX} y position - ${e.offsetY}`;
});

document.addEventListener('wheel',e => {
    console.log(e.pageX,e.pageY);
});