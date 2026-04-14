'use strict';

const header = document.querySelector('h1');
const item = document.createElement('p');
item.textContent = "deneme yazisi";
header.insertAdjacentElement('afterend', item);
