import { Component, Host, Prop, h } from '@stencil/core';

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
  @Prop() type: string = 'text';
  @Prop() value: string;
  @Prop({ reflect: true }) vspace: boolean;

  constructor() {
    uid++;
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
        <input {...inputProps} />
        <label id={labelId} htmlFor={id}>{label}</label>
      </Host>
    );
  }
}
