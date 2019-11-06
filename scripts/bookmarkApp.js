import item from './itemValidation.js';
import store from './store.js';
//import api from './api.js';





//add new bookmark function should call render to destroy the whole page, 
//then re-render the title,url,desc,rating + the ever present bookmark list + a submit button for the traits of a bookmark
//the submit function should call render to destroy and rebuild the page, including the add new bookmark function, min rating
//and the ever present bookmark list


//bookmarks should have expand/contract, delete, (edit is optional)



//to open a state to add a bookmark
const generateNewBm=newBm => {
  const submitButton = '<button type="submit">I am a submit button</button>';
};







function generateNewBmButtonHTML() {
  return `<button id="addANewBookmark">Add a new bookmark</button>`;
}

function generateMinRatingHTML() {
  return `<select> 
  <option> min rating 1+</option>
  <option> min rating 2+</option>
  <option> min rating 3+</option>
  <option> min rating 4+</option>
  <option> min rating 5+</option>  
  </select>`;
}

//finds an item based on its ID element



function generateNewBmFormHTML() {
  return `<form>
  <input required placeholder="Title here">
  <input required placeholder="Site url">
  <input required placeholder="Description here">
  <input type="submit" placeholder="Submit">
  </form>`;
}



//this generates the HTML portion for the render function to pull from the store
function generateBookmarkHTML(bookmarkObject) {
  return `<h3>${bookmarkObject.title}</h3>
  <p>${bookmarkObject.description}</p>
  <input id="expand" type="button" value="View">
  <a href="${bookmarkObject.url}">Visit site</a>
  `;
}











//to render updates to the DOM
//displaying DOM based on properties in the store
//this should be looking for different actions being taken in order to render them
//if loop that will determine if 2 controls (add/min rating), or four main parts of adding a new bookmark are required to be rendered
//calls function that display bookmarks list
//the if loop should check store.adding for current status as it renders the DOM
const render = function () {
  const divTag = $("#bigDiv");
  if(store.adding) {
    divTag.html(generateNewBmFormHTML());
    toggleExpand();
  } else {
    divTag.html(generateNewBmButtonHTML());
    divTag.append(generateMinRatingHTML());
  }
  for(let i=0;i<store.bookmarks.length; i++) {
    let bookmark = store.bookmarks[i];
    divTag.append(generateBookmarkHTML(bookmark));
  }
};

//event listener, which when triggered toggles store.adding to true
//should call render
function addBmButton() {
  store.adding = true;
  render();
}

//should render current bookmarks list (store contents of bookmarks)

function displayBm() {

}



//when clicked, will submit bookmark data to store(which is the bookmark list)
//should have an event listener that checks for 'on submit'
//should toggle store.adding to false
//should call render
function submit() {

}



//should change the stores expand:true/false property to be the opposite of what it currently is
//then should call render to destroy and re-render the page with the current store information
function toggleExpand() {
  $("#expand").on('click', store.bookmarks.expanded = !store.bookmarks.expanded);
  render();
  // let expander = document.getElementById('expand');
  // if (expander.addEventListener)
  //   expander.addEventListener('click', toggleExpand, false);
  // else if (expander.attachEvent)
  //   expander.attachEvent('onclick', toggleExpand);
  return; 
}






//event listener that looks for id bigDiv, then listens for click event, then checks if it's a click on the #addANewBookmark class
//if it is then use addBmButton
function bindEventListeners() {
  $("#bigDiv").on('click', "#addANewBookmark", addBmButton);
}




export default {
  render,
  generateNewBm,
  bindEventListeners
};
