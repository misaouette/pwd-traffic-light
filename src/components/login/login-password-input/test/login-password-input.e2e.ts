import { newE2EPage } from '@stencil/core/testing';

describe('login-password-input', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<login-password-input></login-password-input>');

    const element = await page.find('login-password-input');
    expect(element).toHaveClass('hydrated');
  });
});
