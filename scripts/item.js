const validateName = function(name) {
  if (!name) throw new TypeError('Name must not be blank');
};

const create = function(name) {
  return {
    id: cuid(),
    name,
    checked: false
  };
};

export default {
  validateName,
  create
};


// document.getElementById('makeNewBookmark').addEventListener('click', (e) => {
//   $('#hiddenForm').removeClass('hidden');
// });

// document.getElementById('hiddenForm').addEventListener('submit', (e) => {
//   e.preventDefault();
//   let title = bookmarkTitle.value;
//   let url = bookmarkUrl.value;
//   let description = bookmarkDescription.value;
//   let rating;
//   Array.from(document.getElementsByClassName('bookmarkRating')).forEach((element,i) => {
//     if(element.checked === true) {
//       rating = i+1;
//     }
//   });
//   displayStateParkResults(description, rating, title, url);
//   console.log(rating);
//   console.log(title);
//   console.log(description);
//   console.log(url);
// });




// function displayStateParkResults(description, rating, title, url) {
//   $('.results2').append(`<div class="results2"> 
//       <h2>${title}</h2>
//       <div> ${rating}</div>
//       <p>${description}</p>
//       <a href=${url}>Go to the bookmark</a>
//       </div>`);
//   $('.results').removeClass('hidden');
//   //display the results section
//   $('.results2').removeClass('hidden');
// }