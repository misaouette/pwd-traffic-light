import { Component, Event, EventEmitter, Host, Prop, State, h, Watch } from '@stencil/core';

/// <reference path="../../../../types/Validation.ts" />

let uid = 0;

@Component({
  tag: 'form-input',
  styleUrl: 'form-input.css',
  shadow: { delegatesFocus: true },
})
export class FormInput {
  /**
   *  HTML Label text
   */
  @Prop() label!: string;

  /**
   *  HTML Input name attribute
   */
  @Prop() name!: string;

  /**
   *  HTML Input required attribute
   */
  @Prop() required: boolean;

  /**
   *  Array of {test, message} objects defining the functions to validate/invalidate the input.
   *  - `message` must contain <mark> element if isValid is defined.
   *  - leave `test` undefined if the message is purely descriptive and contains no validation.
   */
  @Prop() rules: Validation.Rule[] = [];

  /**
   *  HTML Input type attribute
   */
  @Prop() type: string = 'text';

  /**
   *  HTML Input value attribute
   */
  @Prop() value: string;

  /**
   *  Flag to display the togglePasswordVisibilityIcon
   */
  @Prop() withTogglePasswordVisibility: boolean;

  /**
   *  Flag to add standard vertical space around the input
   */
  @Prop({ reflect: true }) vspace: boolean;

  /**
   *  Array of {isValid, message} objects describing the valid and invalid criteria.
   *  - `message` must contain <mark> element if isValid is defined.
   *  - leave `isValid` undefined if the message is purely descriptive and contains no validation.
   */
  @State() criteriaList: Validation.Criteria[];

  /**
   *  Internal type used to show/hide the password character
   */
  @State() localType: string = this.type;

  @Watch('label')
  validateCriteriaList(label: string) {
    const dangerousLabel = label.includes('<script>');
    if (dangerousLabel) {
      throw new Error("label mustn't contain a <script> tag");
    }
  }

  @Event() inputValidated: EventEmitter<Validation.inputValidatedPayload>;

  constructor() {
    uid++;
  }

  validate(event) {
    const newValue = event?.target?.value;

    this.criteriaList = this.rules.map(({ message, test }) => ({ message, isValid: test?.(newValue) }));

    let requiredValid = !this.required;
    if (!requiredValid) {
      if (this.type === 'checkbox') {
        requiredValid = event?.target?.checked;
      } else {
        requiredValid = newValue?.length > 0;
      }
    }

    const criteriaValid = this.criteriaList.every(({ isValid = true }) => isValid);

    this.inputValidated.emit({
      inputName: this.name,
      isValid: requiredValid && criteriaValid,
    });
  }

  handlePasswordVisibilityToggle() {
    if (this.type !== 'password') {
      return;
    }

    if (this.localType === 'password') {
      this.localType = 'text';
      return;
    }

    this.localType = 'password';
  }

  render() {
    const { label, localType, name, required, value } = this;
    const id = `${name}-${uid}`;
    const labelId = `label-${id}`;

    const inputProps = {
      ['aria-labelledby']: labelId,
      id,
      name,
      placeholder: label,
      required,
      type: localType,
      value,
    };

    return (
      <Host>
        <div>
          <input {...inputProps} onClick={event => this.validate(event)} onInput={event => this.validate(event)} />
          <label id={labelId} htmlFor={id} innerHTML={label} />
          {this.withTogglePasswordVisibility && (
            <div class={`togglePasswordVisibility${localType === 'text' ? ' visible' : ''}`} onClick={() => this.handlePasswordVisibilityToggle()} />
          )}
        </div>
        <form-validometer criteriaList={this.criteriaList} vspaceSmall />
      </Host>
    );
  }
}
