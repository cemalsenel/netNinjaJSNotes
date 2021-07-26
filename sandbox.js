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









