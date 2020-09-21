import { newSpecPage } from '@stencil/core/testing';
import { FormInput } from '../form-input';

describe('form-input', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FormInput],
      html: `<form-input name='example' label='http://' required={true} type='url' value='http://example.com' />`,
    });
    expect(page.root).toEqualHtml(`
      <form-input name='example' label='http://' required={true} type='url' value='http://example.com' />
        <mock:shadow-root>
          <div>
            <input aria-labelledby='label-example-1' id='example-1' name='example' placeholder='http://' required='' type='url' value='http://example.com'/>
            <label htmlFor='example-1' id='label-example-1'>http://</label>
          </div>
        </mock:shadow-root>
      </form-input>
    `);
  });

  it('renders a second time', async () => {
    const page = await newSpecPage({
      components: [FormInput],
      html: `<form-input name='example' label='http://' type='url' value='http://example.com' />`,
    });
    expect(page.root).toEqualHtml(`
      <form-input name='example' label='http://' type='url' value='http://example.com' />
        <mock:shadow-root>
          <div>
            <input aria-labelledby='label-example-2' id='example-2' name='example' placeholder='http://' type='url' value='http://example.com'/>
            <label htmlFor='example-2' id='label-example-2'>http://</label>
          </div>
        </mock:shadow-root>
      </form-input>
    `);
  });
});
