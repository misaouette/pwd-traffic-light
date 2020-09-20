import { Component, Host, h } from '@stencil/core';
import TRANSLATIONS from './translations/en-us';

@Component({
  tag: 'login-form',
  styleUrl: 'login-form.css',
  shadow: true,
})
export class LoginForm {

  render() {
    return (
      <Host>
        <form>
          <header>
            <h1>{TRANSLATIONS.register}</h1>
            <h2>{TRANSLATIONS.create_account}</h2>
          </header>
          <main></main>
          <footer>
            <form-button type="submit">Register now</form-button>
          </footer>
        </form>
      </Host>
    );
  }

}
