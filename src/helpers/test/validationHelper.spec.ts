import VALIDATION_TESTS from '../validationHelper';

describe('VALIDATION_TESTS', () => {
  describe('CONTAINS_CAPITAL_LETTER', () => {
    it("returns false when text doesn't contain a capital letter", () => {
      expect(VALIDATION_TESTS.CONTAINS_CAPITAL_LETTER('qwe123rty')).toEqual(false);
    });
    it('returns true when text contains a capital letter', () => {
      expect(VALIDATION_TESTS.CONTAINS_CAPITAL_LETTER('qWe123rty')).toEqual(true);
    });
  });

  describe('CONTAINS_LOWERCASE_LETTER', () => {
    it("returns false when text doesn't contain a lowercase letter", () => {
      expect(VALIDATION_TESTS.CONTAINS_LOWERCASE_LETTER('QWERTY(*&^%$')).toEqual(false);
    });
    it('returns true when text contains a lowercase letter', () => {
      expect(VALIDATION_TESTS.CONTAINS_LOWERCASE_LETTER('POIUpoiuytYTRE')).toEqual(true);
    });
  });

  describe('CONTAINS_NUMBER', () => {
    it("returns false when text doesn't contain a number", () => {
      expect(VALIDATION_TESTS.CONTAINS_NUMBER('QWERTY(*&^%$')).toEqual(false);
    });
    it('returns true when text contains a number', () => {
      expect(VALIDATION_TESTS.CONTAINS_NUMBER('QW3RTY')).toEqual(true);
    });
  });

  describe('CONTAINS_SPECIAL_CHARACTER', () => {
    it("returns false when text doesn't contain a special character", () => {
      expect(VALIDATION_TESTS.CONTAINS_SPECIAL_CHARACTER('qwerty')).toEqual(false);
    });
    it('returns true when text contains a special character', () => {
      expect(VALIDATION_TESTS.CONTAINS_SPECIAL_CHARACTER('*QWERTY')).toEqual(true);
    });
  });

  describe('SIZE', () => {
    it('returns false when text length is smaller than n', () => {
      expect(VALIDATION_TESTS.SIZE(3, 'qw')).toEqual(false);
    });
    it('returns true when text length is n ', () => {
      expect(VALIDATION_TESTS.SIZE(4, 'qwer')).toEqual(true);
    });
    it('returns true when text length is bigger than n ', () => {
      expect(VALIDATION_TESTS.SIZE(5, 'qwerty')).toEqual(true);
    });
  });
});
