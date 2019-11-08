import item from './itemValidation.js';
import store from './store.js';
// import index from './index.js';






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
  <option value="1"> min rating 1+</option>
  <option value="2"> min rating 2+</option>
  <option value="3"> min rating 3+</option>
  <option value="4"> min rating 4+</option>
  <option value="5"> min rating 5</option>  
  </select>`;
}



//make this into a function, export, import at the 'ready event'
// this should have an if loop that check if the store.bookmark.rating is >= what's been selected
const rating = function () {
  $('#bigDiv').on('change', 'select', function() {
    let resRating = [];
    let tempStore = store.js;
    if(this>= tempStore.rating.val()) {
      resRating.push (store.bookmark);
    }
  });
};




function generateNewBmFormHTML() {
  return `<form>
  <input required id="title" placeholder="Title here">
  <input required id="siteUrl" placeholder="Site url">
  <input required id="descr" placeholder="Description here">
  <select>
  <option value="1"> rate 1</option>
  <option value="2"> rate 2</option>
  <option value="3"> rate 3</option>
  <option value="4"> rate 4</option>
  <option value="5"> rate 5</option>  
  </select>
  <input id="submit" type="submit" placeholder="Submit">
  </form>`;
}



//expanded = true or false, or 1/0, every time it's called it's value is flipped
//const viewDescr = document.getElementsByClassName(".view").on('click');


//this generates the HTML portion for the render function to pull from the store
function generateBookmarkHTML(bookmarkObject, index) {
  let tempDesc = bookmarkObject.description;
  let charLength = tempDesc.length;
  let preview = '';
  // console.log(bookmarkObject);
  const template = document.createElement('article');
  const h3 = document.createElement('h3');
  const aHref = document.createElement('a');
  const paragraph = document.createElement('p');
  const paragraph2 = document.createElement('p');


  if(charLength>25) {
    preview = bookmarkObject.description.trim().slice(0, 25) + '...';
  } else {
    preview = bookmarkObject.description;
  }
  h3.textContent = bookmarkObject.title;
  paragraph.textContent = preview;
  paragraph.classList.add("show");
  paragraph.classList.add("show2");
  paragraph2.textContent = bookmarkObject.description;
  paragraph2.classList.add("hidden");
  aHref.href = `http://${bookmarkObject.url}`;
  aHref.target = '_blank';
  aHref.textContent = 'Visit site';
  paragraph.addEventListener('click', () => {
    paragraph.classList.remove('show');
    paragraph2.classList.remove('hidden');
  });
  paragraph2.addEventListener('click', () => {
    paragraph.classList.add('show');
    paragraph2.classList.add('hidden');
  });
  template.appendChild(h3);
  template.appendChild(paragraph);
  template.appendChild(paragraph2);
  template.appendChild(aHref);
  return template;
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
        const bookmarkRating = document.getElementById('#bigDiv', 'rating').value;
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
    divTag.append(generateBookmarkHTML(bookmark, i));
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
  bindEventListeners,
  rating
};
