'use strict';
const form = document.querySelector('.feedback-form');
const storageKey = 'feedback-form-state';

window.addEventListener('DOMContentLoaded', () => {
  const localData = JSON.parse(localStorage.getItem(storageKey));
  if(localData){
    form.email.value = localData.email || '';
    form.message.value = localData.message || '';
  }
});
form.addEventListener('submit', e => {
  e.preventDefault();
  const {email, message} = form;
  const data = {
    email : email.value,
    message : message.value,
  };
  localStorage.setItem(storageKey, JSON.stringify(data));
  form.reset();
});