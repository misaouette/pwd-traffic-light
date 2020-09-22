import { Component, Host, Prop, Watch, h } from '@stencil/core';

/// <reference path="../../../../types/Validation.ts" />

@Component({
  tag: 'form-validometer',
  styleUrl: 'form-validometer.css',
  shadow: true,
})
export class FormValidometer {
  /**
   *  Array of {isValid, message} objects describing the valid and invalid criteria.
   *  - `message` must contain <mark> element if isValid is defined.
   *  - leave `isValid` undefined if the message is purely descriptive and contains no validation.
   */
  @Prop() criteriaList!: Validation.Criteria[];

  /**
   *  Flag to add small vertical space above the validometer
   */
  @Prop({ reflect: true }) vspaceSmall: boolean;

  @Watch('criteriaList')
  validateCriteriaList(newCriteriaList: Validation.Criteria[]) {
    let invalidCriteria;

    invalidCriteria = newCriteriaList.find(({ isValid, message }) => isValid !== undefined && !message.includes('<mark>'));
    if (invalidCriteria) {
      throw new Error(`message in [\{message, isValid\}] must contain an opening <mark> tag : (${invalidCriteria.message})`);
    }

    invalidCriteria = newCriteriaList.find(({ isValid, message }) => isValid !== undefined && !message.includes('</mark>'));
    if (invalidCriteria) {
      throw new Error('message in [{message, isValid}] must contain a closing </mark> tag');
    }

    invalidCriteria = newCriteriaList.find(({ message }) => message.includes('<script>'));
    if (invalidCriteria) {
      throw new Error("message in [{message, isValid}] mustn't contain a <script> tag");
    }
  }

  render() {
    const content = this.criteriaList?.map(({ message, isValid }) => {
      let validationClass = '';

      if (isValid !== undefined) {
        validationClass = isValid ? ' valid' : ' invalid';
      }

      return (
        <div class={`criteria${validationClass}`}>
          <div class="icon" />
          <span class="message" innerHTML={message}></span>
        </div>
      );
    });

    return <Host>{content}</Host>;
  }
}
