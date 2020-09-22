import { Component, Prop, h } from '@stencil/core';
import VALIDATION_TESTS from '../../../helpers/validationHelper';
import TRANSLATIONS from './translations/en-us';

/// <reference path="../../../../types/Validation.ts" />

const RULES: Validation.Rule[] = [
  {
    message: TRANSLATIONS.make_sure,
  },
  {
    test: VALIDATION_TESTS.CONTAINS_CAPITAL_LETTER,
    message: TRANSLATIONS.contains_capital_letter,
  },
  {
    test: VALIDATION_TESTS.CONTAINS_LOWERCASE_LETTER,
    message: TRANSLATIONS.contains_lowercase_letter,
  },
  {
    test: VALIDATION_TESTS.CONTAINS_SPECIAL_CHARACTER,
    message: TRANSLATIONS.contains_special_character,
  },
  {
    test: VALIDATION_TESTS.CONTAINS_NUMBER,
    message: TRANSLATIONS.contains_number,
  },
  {
    test: VALIDATION_TESTS.SIZE.bind(null, 8),
    message: TRANSLATIONS.size(8),
  },
];

@Component({
  tag: 'login-password-input',
  shadow: true,
})
export class LoginPasswordInput {
  @Prop() label: string;
  @Prop() name: string;
  @Prop() vspace: boolean;

  render() {
    return <form-input label={this.label} name={this.name} required={true} rules={RULES} type="password" vspace={this.vspace} withTogglePasswordVisibility={true} />;
  }
}
