//card2.js
//refractor again into smaller parts - make it simpler

const card2 = {

addDiv: function() {
  const getContent = document.querySelector('.content');
  const div = document.createElement('div');
  getContent.appendChild(div);
  console.log("div added succesfully")
},

addP: function() {
  const getContent = document.querySelector('.content');
  const addP = document.createElement('p')
  getContent.appendChild(addP);
  console.log("p added succesfully")
},

addText: function() {
  const getContent = document.querySelector('.content');
  getContent.textContent = "test";
  console.log("content added succesfully")
},
}

export default card2;
