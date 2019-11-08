import item from './itemValidation.js';
import store from './store.js';
// import index from './index.js';
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
  <input required id="title" placeholder="Title here">
  <input required id="siteUrl" placeholder="Site url">
  <input required id="descr" placeholder="Description here">
  <input id="submit" type="submit" placeholder="Submit">
  </form>`;
}


//expanded = true or false, or 1/0, every time it's called it's value is flipped
//const viewDescr = document.getElementsByClassName(".view").on('click');


//this generates the HTML portion for the render function to pull from the store
function generateBookmarkHTML(bookmarkObject, index, expanded) {
  let tempDesc = bookmarkObject.description;
  let charLength = tempDesc.length;
  let preview = '';
  let description = tempDesc;
  //if loop wrapped around the if/else loop, checking whether a variable is 1 or 0, the variable should be 
  //assigned in the inner if loop
  if(charLength>25) {
    preview = tempDesc.trim().slice(0, 25) + '...';
  }
  //const description = bookmarkObject.expanded? bookmarkObject.description: `${bookmarkObject.description.slice(0, 25)}` + '...';
  //use trim in the description.slice
  return `<h3>${bookmarkObject.title}</h3>
  <p id="prev" class="show">${preview}</p>
  <p id="desc" class="hidden">${description}</p>
  <input id="${index}" class="view" type="button" value="View" onClick="test();">
  <a href="http://${bookmarkObject.url}" target="_blank">Visit site</a>
  `;
}

document.getElementsByTagName('input').on('click').value;
function test() {
  console.log(this);
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
    $("#submit").on('click', (event) => {
      event.preventDefault();
      const siteUrlValue = document.getElementById('siteUrl').value;
      if(siteUrlValue.includes('.com') && siteUrlValue.includes('www.')) {
        const bookmarkTitle = document.getElementById('title').value;
        const bookmarkDesc = document.getElementById('descr').value;
        store.bookmarks.push({
          title: bookmarkTitle,
          url: siteUrlValue,
          description: bookmarkDesc,
          expanded: false
        });
        store.adding = false;
        render();
      }
    });
  } else {
    divTag.html(generateNewBmButtonHTML());
    divTag.append(generateMinRatingHTML());
  }
  for(let i=0;i<store.bookmarks.length; i++) {
    let bookmark = store.bookmarks[i];
    divTag.append(generateBookmarkHTML(bookmark), i);
  }
  $(".view").on('click', (event) => {

  });
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

// function toggleExpand() {
//   $("#bigDiv").on('click', "#expand", store.bookmarks.expanded = !store.bookmarks.expanded);
//   render();
//   let expander = document.getElementById('expand');
//   if (expander.addEventListener) {
//     expander.addEventListener('click', toggleExpand, false);
//   }  else if (expander.attachEvent) {
//     expander.attachEvent('onclick', toggleExpand);
//   }

//if it is expanded, go use the HTML method, and grab all the expanded code


//   return; 
// }






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
