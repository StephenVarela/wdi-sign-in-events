document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");


var my_modal = document.querySelector('.modal');

var sign_in_button = document.querySelector('.signin')

var modal_close = document.querySelector('.close');

var input_user = document.querySelector('#user');

var input_pass = document.querySelector('#pass');

var modal_submit = document.querySelector('.submit');

sign_in_button.addEventListener('click', function(event){
  my_modal.style.display = 'block'
  event.stopPropagation();
});

modal_close.addEventListener('click', function(event){
  my_modal.style.display = 'none'
  event.stopPropagation();
});

modal_submit.addEventListener('click', function(event){
  input_user.classList.add('error');
  input_pass.classList.add('error');
  event.stopPropagation();
});

input_user.addEventListener('focus', function(event){
  input_user.classList.remove('error');
  event.stopPropagation();
});

input_user.addEventListener('click', function(event){
  event.stopPropagation();
});

input_pass.addEventListener('focus', function(event){
  input_pass.classList.remove('error');
  event.stopPropagation();
});

input_pass.addEventListener('click', function(event){
  event.stopPropagation();
});

my_modal.addEventListener('click', function(){
  my_modal.style.display = 'none'
});

// console.log(sign_in_button)
// console.log(my_modal)










});
