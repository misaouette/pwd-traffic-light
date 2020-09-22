/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface FormButton {
        "type": string;
    }
    interface FormInput {
        "label": string;
        "name": string;
        "required": boolean;
        "rules": Validation.Rule[];
        "type": string;
        "value": string;
        "vspace": boolean;
    }
    interface FormValidometer {
        "criteriaList": Validation.Criteria[];
        "vspaceSmall": boolean;
    }
    interface LoginForm {
    }
    interface LoginPasswordInput {
        "label": string;
        "name": string;
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
        "type"?: string;
    }
    interface FormInput {
        "label": string;
        "name": string;
        "required"?: boolean;
        "rules"?: Validation.Rule[];
        "type"?: string;
        "value"?: string;
        "vspace"?: boolean;
    }
    interface FormValidometer {
        "criteriaList": Validation.Criteria[];
        "vspaceSmall"?: boolean;
    }
    interface LoginForm {
    }
    interface LoginPasswordInput {
        "label"?: string;
        "name"?: string;
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
