//card.js
//module to create the card element and add to dom

const createCard = () => {
  const content = document.querySelector('#content'); // grab content class
  const elStackedCard = document.createElement('div'); // create Div
  elStackedCard.classList.add('stacked-card'); // add stacked card list
  content.appendChild(elStackedCard); // add div to content class
  
  const elContent = document.createElement('div'); // add content div
  elContent.classList.add('content');
  content.appendChild(elContent);

  const header = document.createElement('div') // add header div
  header.classList.add('header');
  content.appendChild(header);

  console.log("test"); // debug test

  const content2 = document.createElement('div'); // add content2 div
  content2.classList.add('content-2');
  content.appendChild(content2)

  const avatar = document.createElement('div'); // add avatar div
  avatar.classList.add('avatar');
  content.appendChild(avatar);

  const background = document.createElement('div'); // add background div
  avatar.classList.add('background');
  content.appendChild(background);

  const initial = document.createElement('div'); // add initial div
  initial.classList.add('initial');
  initial.textContent("A");
  content.appendChild(initial);

  const text = document.createElement('div'); // add text div
  text.classList.add('text');
  content.appendChild(text);

  const header2 = document.createElement('div'); // add header2 div
  header2.classList.add('text');
  header2.textContent('Header')
  content.appendChild(header2); 

  

  



  
}

export default createCard;