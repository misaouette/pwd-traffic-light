export default {
  make_sure: 'Make sure your password contains at least',
  contains_capital_letter: '<mark>a capital letter</mark>,',
  contains_lowercase_letter: '<mark>a lowercase letter</mark>,',
  contains_number: '<mark>contains a number</mark>',
  contains_special_character: '<mark>a special character</mark> and',
  size: minLength => `and it <mark>must be at least ${minLength} characters long</mark>.`,
};
