import item from './itemValidation.js';



//shows the default version of the store (not expanded, not adding)
const store = {
  bookmarks: [
    {
      title: 'Google',
      rating: 5,
      url: 'http://www.google.com',
      description: `I'm a search engine that makes life better.`,
      expanded: false
    },
    {
      title: 'Bing',
      rating: 1,
      url: 'http://www.bing.com',
      description: `I am a disappointment to my friends, family, and everyone who uses me a single time before going to google...`,
      expanded: false
    } 
//    ...
  ],
  adding: false,
  error: null,
  filter: 0
};





export default  store;