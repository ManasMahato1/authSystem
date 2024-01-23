const wrapper=document.querySelector('.wrapper');
const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');
const bgAnimate= document.querySelector('.bg-animate');
const bgAnimate2= document.querySelector('.bg-animate2');
const login=document.querySelector('.login');
const register=document.querySelector('.register');
const infoText=document.querySelector('.swimming');
const infoText2=document.querySelector('.beyond');
const dismiss=document.querySelector('.success-button-secondary');
const Link= document.getElementById('link');
const notification=document.querySelector('.notifications-container');
const Button= document.getElementById('btn');

registerLink.onclick= ()=>{
  bgAnimate2.classList.add('active');
  register.classList.add('active');
  infoText2.classList.add('active');
  bgAnimate.classList.remove('active');
  login.classList.remove('active');
  infoText.classList.remove('active');
  
}
loginLink.onclick=()=>{
  bgAnimate2.classList.remove('active');
  register.classList.remove('active');
  infoText2.classList.remove('active');
  bgAnimate.classList.add('active');
  login.classList.add('active');
  infoText.classList.add('active');
}
dismiss.onclick=()=>{
  notification.classList.remove('active')
  Link.classList.remove('unactive');
  Button.classList.remove('unactive')

}