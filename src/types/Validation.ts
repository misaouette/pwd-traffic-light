declare namespace Validation {
  export interface Rule {
    message: string;
    test?: (string) => boolean;
  }

  export interface Criteria {
    isValid: boolean;
    message: string;
  }

  export interface inputValidatedPayload {
    inputName: string;
    isValid: boolean;
  }
}
