import { Component, Host, Prop, State, h } from '@stencil/core';

/// <reference path="../../../../types/Validation.ts" />

let uid = 0;

@Component({
  tag: 'form-input',
  styleUrl: 'form-input.css',
  shadow: true,
})
export class FormInput {
  @Prop() label!: string;
  @Prop() name!: string;
  @Prop() required: boolean;
  @Prop() rules: Validation.Rule[] = [];
  @Prop() type: string = 'text';
  @Prop() value: string;
  @Prop({ reflect: true }) vspace: boolean;

  @State() criteriaList: Validation.Criteria[];

  constructor() {
    uid++;
  }

  handleInput(event) {
    this.criteriaList = this.rules.map(({ message, test }) => ({ message, isValid: test?.(event?.target?.value) }));
  }

  render() {
    const { label, name, required, type, value } = this;
    const id = `${name}-${uid}`;
    const labelId = `label-${id}`;

    const inputProps = {
      ['aria-labelledby']: labelId,
      id,
      name,
      placeholder: label,
      required,
      type,
      value,
    };

    return (
      <Host>
        <input {...inputProps} onInput={event => this.handleInput(event)} />
        <label id={labelId} htmlFor={id}>
          {label}
        </label>
        <form-validometer criteriaList={this.criteriaList} vspaceSmall />
      </Host>
    );
  }
}
