const validateTitle = function(title) {
  if (!title) throw new TypeError('Title must not be blank');
};

const validateDescription = function(description) {
  if (!description) throw new TypeError('Description must not be blank');
};

const validateRating = function(title) {
  if (!rating) throw new TypeError('Rating must not be blank');
};

const validateUrl = function(url) {
  if (!url) throw new TypeError('Url link must not be blank');
};



export default {
  validateTitle,
  validateDescription,
  validateRating,
  validateUrl,
  create
};
