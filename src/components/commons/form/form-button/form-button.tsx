import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'form-button',
  styleUrl: 'form-button.css',
  shadow: true,
})
export class FormButton {
  @Prop() type: string;

  render() {
    return (
      <button type={this.type}>
        <slot />
      </button>
    );
  }
}
