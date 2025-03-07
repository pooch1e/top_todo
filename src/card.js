//card.js
//module to create the card element and add to dom
//structure of card but needs a lot of work

//refracter into class
class Card {
  constructor(initial = "A", title = "Title", subtitle = "Subtitle", supportingText = "supporting Text") {
    this.initial = initial;
    this.title = title;
    this.subtitle = subtitle;
    this.supportingText = supportingText;
  }

  createElement(tag, className, textContent = "") {
    const element = document.createElement(tag);
    if (className) {
      element.classList.add(className);
    }
    if (textContent) {
      element.textContent = textContent;
    }
    return element;
  }

  createAvatar() {
    const avatar = this.createElement("div", "avatar");
    const background = this.createElement("div", "background");
    const initial = this.createElement("div", "initial", this.initial);
    avatar.append(background, initial);
    return avatar;
  }

  createHeader() {
    const header = this.createElement("div", "header");
    const content2 = this.createElement("div", "content2");
    const avatar = this.createAvatar();
    const text = this.createElement("div", "text");
    const header2 = this.createElement("div", "header2", "Header");
    const subhead = this.createElement("div", "subhead", "Subhead");
    text.append(header2, subhead);
    content2.append(avatar, text);
    header.append(content2, this.createIcon());
    return header;
  }

  createIcon() {
    const icon = this.createElement("div", "icon");
    const container = this.createElement("div", "container");
    const stateLayer = this.createElement("div", "state-layer");
    container.append(stateLayer);
    icon.append(container);
    return icon;
  }

  createTextContent() {
    const textContent = this.createElement("div", "text-content");
    const headline = this.createElement("div", "headline");
    const title = this.createElement("div", "title", this.title);
    const subhead2 = this.createElement("div", "subhead2", this.subtitle);
    headline.append(title, subhead2);

    const supportingText = this.createElement("div", "supporting-text", this.supportingText);

    textContent.append(headline, supportingText, this.createActions());
    return textContent;
  }
  
  createActions() {
    const actions = this.createElement("div", "actions");
    actions.append(this.createAction("secondary-action"), this.createAction("primary-action"));
    return actions;
  }

  createAction(className) {
    const action = this.createElement("div", className);
    const stateLayer = this.createElement("div", "state-layer2");
    const labelText = this.createElement("div", "label-text", "Enabled");
    stateLayer.append(labelText);
    action.append(stateLayer);
    return action;
  }

  createCard() {
    const content = document.querySelector("#content");
    if (!content) {
      console.error("Content container not found");
      return;
    }
    
    const elStackedCard = this.createElement("div", "stacked-card");
    const elContent = this.createElement("div", "content");
    const media = this.createElement("div", "media");
    const background2 = this.createElement("div", "background2");
    const stateLayer3 = this.createElement("div", "state-layer3");
    background2.append(stateLayer3);
    
    elContent.append(this.createHeader(), media, this.createTextContent());
    elStackedCard.append(elContent, background2);
    content.appendChild(elStackedCard);
    console.log('Card created and appended to content:', elStackedCard);
  }
}

export default Card;

