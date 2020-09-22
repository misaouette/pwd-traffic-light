const VALIDATION_TESTS = {
  CONTAINS_CAPITAL_LETTER: (text: string) => /[A-Z]/.test(text),
  CONTAINS_LOWERCASE_LETTER: (text: string) => /[a-z]/.test(text),
  CONTAINS_NUMBER: (text: string) => /[0-9]/.test(text),
  CONTAINS_SPECIAL_CHARACTER: (text: string) => /[*.!@#$%^&(){}\[\]:;<>,.?\/~_+-=|\\]/.test(text),
  SIZE: (minLength: number, text: string) => text.length >= minLength,
};

export default VALIDATION_TESTS;
