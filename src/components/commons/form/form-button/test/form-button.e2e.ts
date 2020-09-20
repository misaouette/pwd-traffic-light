import { newE2EPage } from '@stencil/core/testing';

describe('form-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<form-button></form-button>');

    const element = await page.find('form-button');
    expect(element).toHaveClass('hydrated');
  });

  it('contains a typed button with text', async () => {
    const page = await newE2EPage();
    await page.setContent('<form-button type="submit">Save</form-button>');
    
    const element = await page.find('form-button >>> button');
    expect(element.textContent).toEqual('Save');
  });
});
