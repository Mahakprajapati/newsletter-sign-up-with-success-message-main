let gmailPatternCheck=/^[A-Za-z._]{5,15}[1-9]{1,3}@[a-z]{5,10}[.]{1}[com]{3}$/ ;
const signButton=document.querySelector('.input-container .button');
const input=document.querySelector('input');
const container=document.querySelector('.sign-up-container .container');
const successContainer=document.querySelector('.success-container');
const inputContainer=document.querySelector('.input-container');
const span=document.querySelector('.success-container p span');
const msgButton=document.querySelector('.success-container .button');

signButton.addEventListener('click',()=>{
   if(gmailPatternCheck.test(input.value)){
    span.innerText=input.value;
    container.classList.add('hidden');
    successContainer.classList.remove('hidden');
   }else{
    inputContainer.classList.add('error');
   }
})

input.addEventListener('focus',()=>{
    inputContainer.classList.remove('error');
    
})
msgButton.addEventListener('click',()=>{
    container.classList.remove('hidden');
    successContainer.classList.add('hidden');
})