/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface FormButton {
        /**
          * HTML Button disabled attribute
         */
        "disabled": boolean;
        /**
          * HTML Button type attribute
         */
        "type": string;
    }
    interface FormInput {
        /**
          * HTML Label text
         */
        "label": string;
        /**
          * HTML Input name attribute
         */
        "name": string;
        /**
          * HTML Input required attribute
         */
        "required": boolean;
        /**
          * Array of {test, message} objects defining the functions to validate/invalidate the input. - `message` must contain <mark> element if isValid is defined. - leave `test` undefined if the message is purely descriptive and contains no validation.
         */
        "rules": Validation.Rule[];
        /**
          * HTML Input type attribute
         */
        "type": string;
        /**
          * HTML Input value attribute
         */
        "value": string;
        /**
          * Flag to add standard vertical space around the input
         */
        "vspace": boolean;
        /**
          * Flag to display the togglePasswordVisibilityIcon
         */
        "withTogglePasswordVisibility": boolean;
    }
    interface FormValidometer {
        /**
          * Array of {isValid, message} objects describing the valid and invalid criteria. - `message` must contain <mark> element if isValid is defined. - leave `isValid` undefined if the message is purely descriptive and contains no validation.
         */
        "criteriaList": Validation.Criteria[];
        /**
          * Flag to add small vertical space above the validometer
         */
        "vspaceSmall": boolean;
    }
    interface LoginForm {
    }
    interface LoginPasswordInput {
        /**
          * HTML Label text
         */
        "label": string;
        /**
          * HTML Input name attribute
         */
        "name": string;
        /**
          * Flag to add standard vertical space around the input
         */
        "vspace": boolean;
    }
}
declare global {
    interface HTMLFormButtonElement extends Components.FormButton, HTMLStencilElement {
    }
    var HTMLFormButtonElement: {
        prototype: HTMLFormButtonElement;
        new (): HTMLFormButtonElement;
    };
    interface HTMLFormInputElement extends Components.FormInput, HTMLStencilElement {
    }
    var HTMLFormInputElement: {
        prototype: HTMLFormInputElement;
        new (): HTMLFormInputElement;
    };
    interface HTMLFormValidometerElement extends Components.FormValidometer, HTMLStencilElement {
    }
    var HTMLFormValidometerElement: {
        prototype: HTMLFormValidometerElement;
        new (): HTMLFormValidometerElement;
    };
    interface HTMLLoginFormElement extends Components.LoginForm, HTMLStencilElement {
    }
    var HTMLLoginFormElement: {
        prototype: HTMLLoginFormElement;
        new (): HTMLLoginFormElement;
    };
    interface HTMLLoginPasswordInputElement extends Components.LoginPasswordInput, HTMLStencilElement {
    }
    var HTMLLoginPasswordInputElement: {
        prototype: HTMLLoginPasswordInputElement;
        new (): HTMLLoginPasswordInputElement;
    };
    interface HTMLElementTagNameMap {
        "form-button": HTMLFormButtonElement;
        "form-input": HTMLFormInputElement;
        "form-validometer": HTMLFormValidometerElement;
        "login-form": HTMLLoginFormElement;
        "login-password-input": HTMLLoginPasswordInputElement;
    }
}
declare namespace LocalJSX {
    interface FormButton {
        /**
          * HTML Button disabled attribute
         */
        "disabled"?: boolean;
        /**
          * HTML Button type attribute
         */
        "type"?: string;
    }
    interface FormInput {
        /**
          * HTML Label text
         */
        "label": string;
        /**
          * HTML Input name attribute
         */
        "name": string;
        "onInputValidated"?: (event: CustomEvent<Validation.inputValidatedPayload>) => void;
        /**
          * HTML Input required attribute
         */
        "required"?: boolean;
        /**
          * Array of {test, message} objects defining the functions to validate/invalidate the input. - `message` must contain <mark> element if isValid is defined. - leave `test` undefined if the message is purely descriptive and contains no validation.
         */
        "rules"?: Validation.Rule[];
        /**
          * HTML Input type attribute
         */
        "type"?: string;
        /**
          * HTML Input value attribute
         */
        "value"?: string;
        /**
          * Flag to add standard vertical space around the input
         */
        "vspace"?: boolean;
        /**
          * Flag to display the togglePasswordVisibilityIcon
         */
        "withTogglePasswordVisibility"?: boolean;
    }
    interface FormValidometer {
        /**
          * Array of {isValid, message} objects describing the valid and invalid criteria. - `message` must contain <mark> element if isValid is defined. - leave `isValid` undefined if the message is purely descriptive and contains no validation.
         */
        "criteriaList": Validation.Criteria[];
        /**
          * Flag to add small vertical space above the validometer
         */
        "vspaceSmall"?: boolean;
    }
    interface LoginForm {
    }
    interface LoginPasswordInput {
        /**
          * HTML Label text
         */
        "label"?: string;
        /**
          * HTML Input name attribute
         */
        "name"?: string;
        /**
          * Flag to add standard vertical space around the input
         */
        "vspace"?: boolean;
    }
    interface IntrinsicElements {
        "form-button": FormButton;
        "form-input": FormInput;
        "form-validometer": FormValidometer;
        "login-form": LoginForm;
        "login-password-input": LoginPasswordInput;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "form-button": LocalJSX.FormButton & JSXBase.HTMLAttributes<HTMLFormButtonElement>;
            "form-input": LocalJSX.FormInput & JSXBase.HTMLAttributes<HTMLFormInputElement>;
            "form-validometer": LocalJSX.FormValidometer & JSXBase.HTMLAttributes<HTMLFormValidometerElement>;
            "login-form": LocalJSX.LoginForm & JSXBase.HTMLAttributes<HTMLLoginFormElement>;
            "login-password-input": LocalJSX.LoginPasswordInput & JSXBase.HTMLAttributes<HTMLLoginPasswordInputElement>;
        }
    }
}
