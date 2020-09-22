import { Component, Listen, Host, State, h } from '@stencil/core';
import TRANSLATIONS from './translations/en-us';
import inputValidatedPayload = Validation.inputValidatedPayload;

@Component({
  tag: 'login-form',
  styleUrl: 'login-form.css',
  shadow: true,
})
export class LoginForm {
  @State() isValidByName: { username: boolean; password: boolean } = { username: false, password: false };

  @Listen('inputValidated')
  handleValidation({ detail: { inputName, isValid } }: CustomEvent<inputValidatedPayload>) {
    this.isValidByName = { ...this.isValidByName, ...{ [inputName]: isValid } };
  }

  render() {
    const disabled: boolean = Object.values(this.isValidByName).some(isValid => !isValid);
    return (
      <Host>
        <form>
          <header>
            <h1>{TRANSLATIONS.register}</h1>
            <h2>{TRANSLATIONS.create_account}</h2>
          </header>
          <main>
            <form-input label={TRANSLATIONS.email_address} name="username" required={true} type="email" vspace={true} />
            <login-password-input label={TRANSLATIONS.password} name="password" vspace={true} />
          </main>
          <footer>
            <form-button disabled={disabled} type="submit">
              Register now
            </form-button>
          </footer>
        </form>
      </Host>
    );
  }
}
