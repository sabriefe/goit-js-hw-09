'use strict';

const formElement = document.querySelector('.feedback-form');

formElement.addEventListener('input', event =>{
  event.preventDefault();
  const mail = formElement.email.value;
  const msg = formElement.message.value;
  localStorage.setItem('feedback-form-state', JSON.stringify({email : mail, message : msg}));
});
window.addEventListener('DOMContentLoaded', () => {
  if(!localStorage.getItem('feedback-form-state')) return;
  const item = JSON.parse(localStorage.getItem('feedback-form-state'));
  formElement.email.value = item.email;
  formElement.message.value = item.message;
});
formElement.addEventListener('submit', event => {
  event.preventDefault();
  if(!localStorage.getItem('feedback-form-state')) return;
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  localStorage.removeItem('feedback-form-state');
  formElement.reset();
});