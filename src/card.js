//card.js
//module to create the card element and add to dom

const createCard = () => {
  const content = document.querySelector('#content'); // grab content class
  console.log('Content element:', content);

  const elStackedCard = document.createElement('div'); // create Div
  elStackedCard.classList.add('stacked-card'); // add stacked card list
  content.appendChild(elStackedCard); // add div to content class
  console.log('Stacked card element:', elStackedCard);

  const elContent = document.createElement('div'); // add content div
  elContent.classList.add('content');
  elStackedCard.appendChild(elContent);
  console.log('Content element:', elContent);

  const header = document.createElement('div'); // add header div
  header.classList.add('header');
  elContent.appendChild(header);
  console.log('Header element:', header);

  const content2 = document.createElement('div'); // add content2 div
  content2.classList.add('content2');
  header.appendChild(content2);
  console.log('Content2 element:', content2);

  const avatar = document.createElement('div'); // add avatar div
  avatar.classList.add('avatar');
  content2.appendChild(avatar);
  console.log('Avatar element:', avatar);

  const background = document.createElement('div'); // add background div
  background.classList.add('background');
  avatar.appendChild(background);
  console.log('Background element:', background);

  const initial = document.createElement('div'); // add initial div
  initial.classList.add('initial');
  initial.textContent = "A";
  avatar.appendChild(initial);
  console.log('Initial element:', initial);

  const text = document.createElement('div'); // add text div
  text.classList.add('text');
  content2.appendChild(text);
  console.log('Text element:', text);

  const header2 = document.createElement('div'); // add header2 div
  header2.classList.add('header2');
  header2.textContent = 'Header';
  text.appendChild(header2);
  console.log('Header2 element:', header2);

  const subhead = document.createElement('div'); // add subhead div
  subhead.classList.add('subhead');
  subhead.textContent = 'Subhead';
  text.appendChild(subhead);
  console.log('Subhead element:', subhead);

  // Add icon-button div
  const iconButton = document.createElement('div');
  iconButton.classList.add('icon-button');
  const container = document.createElement('div');
  container.classList.add('container');
  const stateLayer = document.createElement('div');
  stateLayer.classList.add('state-layer');
  container.appendChild(stateLayer);
  iconButton.appendChild(container);
  header.appendChild(iconButton);
  console.log('Icon button element:', iconButton);

  // Add media div
  const media = document.createElement('div');
  media.classList.add('media');
  elContent.appendChild(media);
  console.log('Media element:', media);

  // Add text-content div
  const textContent = document.createElement('div');
  textContent.classList.add('text-content');
  const headline = document.createElement('div');
  headline.classList.add('headline');
  const title = document.createElement('div');
  title.classList.add('title');
  title.textContent = 'Title';
  const subhead2 = document.createElement('div');
  subhead2.classList.add('subhead2');
  subhead2.textContent = 'Subtitle';
  headline.appendChild(title);
  headline.appendChild(subhead2);
  textContent.appendChild(headline);
  console.log('Headline element:', headline);

  const supportingText = document.createElement('div');
  supportingText.classList.add('supporting-text');
  supportingText.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor';
  textContent.appendChild(supportingText);
  console.log('Supporting text element:', supportingText);

  const actions = document.createElement('div');
  actions.classList.add('actions');
  const secondaryAction = document.createElement('div');
  secondaryAction.classList.add('secondary-action');
  const stateLayer2 = document.createElement('div');
  stateLayer2.classList.add('state-layer2');
  const labelText = document.createElement('div');
  labelText.classList.add('label-text');
  labelText.textContent = 'Enabled';
  stateLayer2.appendChild(labelText);
  secondaryAction.appendChild(stateLayer2);
  actions.appendChild(secondaryAction);
  console.log('Secondary action element:', secondaryAction);

  const primaryAction = document.createElement('div');
  primaryAction.classList.add('primary-action');
  const stateLayer22 = document.createElement('div');
  stateLayer22.classList.add('state-layer2');
  const labelText2 = document.createElement('div');
  labelText2.classList.add('label-text2');
  labelText2.textContent = 'Enabled';
  stateLayer22.appendChild(labelText2);
  primaryAction.appendChild(stateLayer22);
  actions.appendChild(primaryAction);
  console.log('Primary action element:', primaryAction);

  textContent.appendChild(actions);
  elContent.appendChild(textContent);
  console.log('Text content element:', textContent);

  // Add background2 div
  const background2 = document.createElement('div');
  background2.classList.add('background2');
  const stateLayer3 = document.createElement('div');
  stateLayer3.classList.add('state-layer3');
  background2.appendChild(stateLayer3);
  elStackedCard.appendChild(background2);
  console.log('Background2 element:', background2);
};

export default createCard;