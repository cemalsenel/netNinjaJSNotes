//submit events
const form =document.querySelector('.signup-form');
const feedback=document.querySelector('.feedback');
//const username=document.querySelector('#username');
const usernamePattern=/^[a-zA-Z]{6,12}$/;




form.addEventListener('submit',e=>{
    e.preventDefault();
    //console.log(username.value);
    console.log(form.username.value);

    //validation
    const username=form.username.value;
    
    if(usernamePattern.test(username)){
        //feedback good info
        feedback.textContent='that username is valid';
    }else{
        //feedback help info
        feedback.textContent='username must contain letters only and be between 6 & 12 chars long';
    }
});
//testing RegEx
const username ="jimmythe";
const pattern = /^[a-z]{6,}$/;

/*let result = pattern.test(username);
console.log(result);

if(result){
    console.log('regex test passed.');
}else{
    console.log('regex test failed.');
}*/
let result=username.search(pattern);//returns first index of character we looked for and returns integer..position of the match
console.log(result);


//live feedback
form.username.addEventListener('keyup',e=>{
    console.log(e);
   // console.log(e.target.value,form.username.value);
   //e.target.value ===form.username.value : tamamen aynı işi yapıyorlar
   if(usernamePattern.test(e.target.value)){
       
       //console.log("passed");
       form.username.setAttribute('class','success');
   }else{
    //console.log("failed");
    form.username.setAttribute('class','error');
   }
})