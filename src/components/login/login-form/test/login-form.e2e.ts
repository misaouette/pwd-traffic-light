import { newE2EPage } from '@stencil/core/testing';

const SELECTORS = {
  BUTTON: 'login-form >>> form-button',
  BUTTON_DISABLED: 'login-form >>> form-button[disabled]',
  INPUT_USERNAME: 'login-form >>> form-input[name="username"]',
  INPUT_PASSWORD: 'login-form >>> login-password-input',
  INPUT_TERMS_OF_SERVICE: 'login-form >>> form-input[name="terms-of-service"]',
  CRITERIA_INVALID: 'login-form >>> .criteria.invalid',
  CRITERIA_VALID: 'login-form >>> .criteria.valid',
};

const enterValidUsername = async page => {
  const usernameInput = await page.find(SELECTORS.INPUT_USERNAME);
  await usernameInput.click();
  await usernameInput.type('e.t.@data4life.com');
};

const enterValidPassword = async page => {
  const passwordInput = await page.find(SELECTORS.INPUT_PASSWORD);
  await passwordInput.click();
  await passwordInput.type('aA1!5678');
};

const enterInvalidPassword = async page => {
  const passwordInput = await page.find(SELECTORS.INPUT_PASSWORD);
  await passwordInput.click();
  await passwordInput.type('123');
};

const checkTermsOfService = async page => {
  const tosInput = await page.find(SELECTORS.INPUT_TERMS_OF_SERVICE);
  await tosInput.click();
};

describe('login-form', () => {
  let page;

  beforeEach(async () => {
    page = await newE2EPage();
    await page.setContent('<login-form></login-form>');
  });

  it('renders', async () => {
    const button = await page.find('login-form');
    expect(button).toHaveClass('hydrated');
  });

  it('contains a "Register now" button', async () => {
    const button = await page.find(SELECTORS.BUTTON);
    expect(button.textContent).toEqual('Register now');
  });

  it('renders a disabled button', async () => {
    const button = await page.find(SELECTORS.BUTTON_DISABLED);
    expect(button).toBeTruthy();
  });

  it('renders a disabled button when all inputs are valid except Email', async () => {
    await enterValidPassword(page);
    await checkTermsOfService(page);

    const button = await page.find(SELECTORS.BUTTON_DISABLED);
    expect(button).toBeTruthy();
  });

  it('renders a disabled button when all inputs are valid except empty Password', async () => {
    await enterValidPassword(page);
    await checkTermsOfService(page);

    const button = await page.find(SELECTORS.BUTTON_DISABLED);
    expect(button).toBeTruthy();
  });

  it('renders a disabled button when all inputs are valid except non-empty Password', async () => {
    await enterValidUsername(page);
    await enterInvalidPassword(page);
    await checkTermsOfService(page);

    const button = await page.find(SELECTORS.BUTTON_DISABLED);
    expect(button).toBeTruthy();
  });

  describe('validometer', () => {
    it('renders invalid criteria for invalid Password', async () => {
      await enterInvalidPassword(page);

      const validCriteriaList = page.findAll(SELECTORS.CRITERIA_VALID);
      expect(validCriteriaList.length).toEqual(1);

      const invalidCriteriaList = page.findAll(SELECTORS.CRITERIA_INVALID);
      expect(invalidCriteriaList.length).toEqual(4);
    });

    it('only valid criteria for valid Password', async () => {
      await enterValidPassword(page);

      const validCriteriaList = await page.findAll(SELECTORS.CRITERIA_VALID);
      expect(validCriteriaList.length).toEqual(5);

      const invalidCriteriaList = await page.findAll(SELECTORS.CRITERIA_INVALID);
      expect(invalidCriteriaList.length).toEqual(0);
    });
  });

  it('renders a disabled button when all inputs are valid except Terms of Service', async () => {
    await enterValidUsername(page);
    await enterValidPassword(page);

    const button = await page.find(SELECTORS.BUTTON_DISABLED);
    expect(button).toBeTruthy();
  });

  it('renders an enabled button when all inputs are valid', async () => {
    await enterValidUsername(page);
    await enterValidPassword(page);
    await checkTermsOfService(page);

    const button = await page.find(SELECTORS.BUTTON_DISABLED);
    expect(button).toBeNull();
  });
});
