import bookmarkApp from './bookmarkApp.js';

const main = function () {
  bookmarkApp.bindEventListeners();
  bookmarkApp.rating();
  bookmarkApp.render();
};

$(main);