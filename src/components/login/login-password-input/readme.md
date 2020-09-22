# login-password-input



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description                                          | Type      | Default     |
| -------- | --------- | ---------------------------------------------------- | --------- | ----------- |
| `label`  | `label`   | HTML Label text                                      | `string`  | `undefined` |
| `name`   | `name`    | HTML Input name attribute                            | `string`  | `undefined` |
| `vspace` | `vspace`  | Flag to add standard vertical space around the input | `boolean` | `undefined` |


## Dependencies

### Used by

 - [login-form](../login-form)

### Depends on

- [form-input](../../commons/form/form-input)

### Graph
```mermaid
graph TD;
  login-password-input --> form-input
  form-input --> form-validometer
  login-form --> login-password-input
  style login-password-input fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
