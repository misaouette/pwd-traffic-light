import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'form-button',
  styleUrl: 'form-button.css',
  shadow: true,
})
export class FormButton {
  /**
   *  HTML Button disabled attribute
   */
  @Prop() disabled: boolean = false;

  /**
   *  HTML Button type attribute
   */
  @Prop() type: string;

  render() {
    const { disabled, type } = this;
    return (
      <button {...{ disabled, type }}>
        <slot />
      </button>
    );
  }
}
