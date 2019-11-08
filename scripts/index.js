import bookmarkApp from './bookmarkApp.js';

const main = function () {
  bookmarkApp.bindEventListeners();
  bookmarkApp.render();
};

$(main);

// function test() {
//   console.log(this);
// }
// export default {
//   test
// };