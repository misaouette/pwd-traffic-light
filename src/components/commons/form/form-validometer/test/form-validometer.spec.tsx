import { newSpecPage } from '@stencil/core/testing';
import { FormValidometer } from '../form-validometer';

describe('form-validometer', () => {
  it("throws when message doesn't include entering <mark> tag", async () => {
    const options = {
      components: [FormValidometer],
      html: `<form-validometer criteriaList={[{message: 'url must start with http://</mark>', isValid: true},]}></form-validometer>`,
    };
    //   expect(await newSpecPage(options)).toThrow();
    await expect(newSpecPage(options)).rejects.toEqual('message in [{message, isValid}] must contain an opening <mark> tag : (url must start with http://</mark>)');
  });

  it("throws when message doesn't include entering <mark> tag", async () => {
    const options = {
      components: [FormValidometer],
      html: `<form-validometer criteriaList={[{message: 'url <mark>must start with http://', isValid: true},]}></form-validometer>`,
    };
    //    expect(await newSpecPage(options)).toThrow();
    await expect(newSpecPage(options)).rejects.toEqual('message in [{message, isValid}] must contain a closing </mark> tag : (url must start with http://</mark>)');
  });

  it('renders a list of valid and invalid criteria', async () => {
    const page = await newSpecPage({
      components: [FormValidometer],
      html: `<form-validometer criteriaList={[{message: 'url <mark> must start with http://</mark>', isValid: true},{message: 'url <mark> cannot contain localhost</mark>', isValid: false}]}></form-validometer>`,
    });
    expect(page.root).toMatchSnapshot();
  });
});
