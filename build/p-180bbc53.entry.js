import{r,h as i,c as e,H as t}from"./p-6d2ab4eb.js";const a=class{constructor(i){r(this,i),this.disabled=!1}render(){const{disabled:r,type:e}=this;return i("button",Object.assign({},{disabled:r,type:e}),i("slot",null))}};a.style=":host{--color-form-button:var(--color-button, #009fd4)}button{background-color:var(--color-form-button);border:3px solid var(--color-form-button);border-radius:var(--radius);box-shadow:var(--shadow);color:#fff;padding:0.5rem;margin:1rem 0 0 0;max-width:10rem;word-spacing:100vw;text-transform:capitalize}button:hover,button:focus{background-color:#fff;color:var(--color-form-button);text-transform:uppercase;outline:0}button:focus:not(:focus-visible){background-color:var(--color-form-button);color:#fff;max-width:10rem;text-transform:capitalize}button:focus-visible{padding:0.7rem 0;font-size:1.1em;max-width:11rem}button:disabled{background-color:var(--color-form-button);opacity:0.5;color:#fff}";let o=0;const s=class{constructor(i){r(this,i),this.inputValidated=e(this,"inputValidated",7),this.rules=[],this.type="text",this.localType=this.type,o++}validateCriteriaList(r){if(r.includes("<script>"))throw new Error("label mustn't contain a <script> tag")}validate(r){var i,e;const t=null===(i=null==r?void 0:r.target)||void 0===i?void 0:i.value;this.criteriaList=this.rules.map(({message:r,test:i})=>({message:r,isValid:null==i?void 0:i(t)}));let a=!this.required;a||(a="checkbox"===this.type?null===(e=null==r?void 0:r.target)||void 0===e?void 0:e.checked:(null==t?void 0:t.length)>0);const o=this.criteriaList.every(({isValid:r=!0})=>r);this.inputValidated.emit({inputName:this.name,isValid:a&&o})}handlePasswordVisibilityToggle(){"password"===this.type&&(this.localType="password"!==this.localType?"password":"text")}render(){const{label:r,localType:e,name:a,required:s,value:l}=this,n=`${a}-${o}`,d="label-"+n;return i(t,null,i("div",null,i("input",Object.assign({},{"aria-labelledby":d,id:n,name:a,placeholder:r,required:s,type:e,value:l},{onClick:r=>this.validate(r),onInput:r=>this.validate(r)})),i("label",{id:d,htmlFor:n,innerHTML:r}),this.withTogglePasswordVisibility&&i("div",{class:"togglePasswordVisibility"+("text"===e?" visible":""),onClick:()=>this.handlePasswordVisibilityToggle()})),i("form-validometer",{criteriaList:this.criteriaList,vspaceSmall:!0}))}static get delegatesFocus(){return!0}static get watchers(){return{label:["validateCriteriaList"]}}};s.style=':host{display:block;margin-top:1rem;position:relative;--color-form-input-border:var(--color-input-border, #009fd4)}:host([vspace]){margin-top:calc(var(--vmargin-normal, 1rem) + 1rem);margin-bottom:var(--vmargin-normal, 1rem)}:host(:focus){outline:0}label{bottom:95%;display:none;font-size:0.8rem;padding:0.2rem;position:absolute}input{border-color:#ddd;border-radius:var(--radius-big, 6px);border-style:solid;padding:0.5rem;width:80%}input:not(:placeholder-shown)+label,input:focus+label{display:block;bottom:98%}input:focus::placeholder{color:transparent}input:focus,input:focus-visible{border-color:var(--color-form-input-border);outline:none}input[type="checkbox"],input[type="radio"]{border-color:#ddd;border-radius:var(--radius-big, 6px);border-style:solid;width:auto;margin:0.25rem}input[type="checkbox"]:focus-visible,input[type="radio"]:focus-visible{outline:2px auto var(--color-form-input-border)}input[type="checkbox"]:not(:placeholder-shown)+label,input[type="radio"]:not(:placeholder-shown)+label{bottom:auto;display:inline}.togglePasswordVisibility{display:none;background-image:url(./assets/emoji/mizaru.png);background-position:center;background-repeat:no-repeat;background-size:1.2rem;margin-left:0.4rem;vertical-align:middle;height:1.2rem;width:1.2rem}.togglePasswordVisibility.visible{background-image:url(./assets/emoji/shizaru.svg)}input:focus~.togglePasswordVisibility{margin-left:0.2rem;display:inline-block}a{color:var(--color-form-input-border)}a:hover{text-decoration:underline var(--color-form-input-border)}';const l=class{constructor(i){r(this,i)}validateCriteriaList(r){let i;if(i=r.find(({isValid:r,message:i})=>void 0!==r&&!i.includes("<mark>")),i)throw new Error(`message in [{message, isValid}] must contain an opening <mark> tag : (${i.message})`);if(i=r.find(({isValid:r,message:i})=>void 0!==r&&!i.includes("</mark>")),i)throw new Error("message in [{message, isValid}] must contain a closing </mark> tag");if(i=r.find(({message:r})=>r.includes("<script>")),i)throw new Error("message in [{message, isValid}] mustn't contain a <script> tag")}render(){var r;const e=null===(r=this.criteriaList)||void 0===r?void 0:r.map(({message:r,isValid:e})=>{let t="";return void 0!==e&&(t=e?" valid":" invalid"),i("div",{class:"criteria"+t},i("div",{class:"icon"}),i("span",{class:"message",innerHTML:r}))});return i(t,null,e)}static get watchers(){return{criteriaList:["validateCriteriaList"]}}};l.style=":host{display:block;font-size:0.8rem}:host([vspace-small]){margin-top:var(--vmargin-small)}.criteria{display:flex}.icon{--icon-size:0.9rem;background-size:var(--icon-size);height:var(--icon-size);width:var(--icon-size);margin-right:0.2rem;margin-top:0.1rem}.invalid .icon{background-image:url(./assets/validation/invalid.png)}.valid .icon{background-image:url(./assets/validation/valid.png)}mark{background-color:transparent}.invalid mark{color:#d91e18}.valid mark{color:#00aa55}";const n=class{constructor(i){r(this,i),this.isValidByName={username:!1,password:!1,"terms-of-service":!1}}handleValidation({detail:{inputName:r,isValid:i}}){this.isValidByName=Object.assign(Object.assign({},this.isValidByName),{[r]:i})}render(){const r=Object.values(this.isValidByName).some(r=>!r);return i(t,null,i("form",null,i("header",null,i("h1",null,"Register"),i("h2",null,"Create your personal account")),i("main",null,i("form-input",{label:"Email address",name:"username",required:!0,type:"email",vspace:!0}),i("login-password-input",{label:"Password",name:"password",vspace:!0})),i("footer",null,i("form-input",{label:"I agree to the <a>Terms of Service</a>.",name:"terms-of-service",required:!0,type:"checkbox",vspace:!0}),i("form-button",{disabled:r,type:"submit"},"Register now"))))}};n.style=":host{display:block;padding:1rem}@media screen and (min-height: 768px){:host{padding-top:5rem}}form{margin:auto;padding:2rem;max-width:30rem;border:1px solid #ddd;border-radius:var(--radius);box-shadow:var(--shadow)}form:focus-within{background-color:#fff9f0;border-width:2px}h1{margin:0;font-size:1.4em}h2{margin:0 0 0.5rem 0;font-size:1.2em;color:#777}";const d={CONTAINS_CAPITAL_LETTER:r=>/[A-Z]/.test(r),CONTAINS_LOWERCASE_LETTER:r=>/[a-z]/.test(r),CONTAINS_NUMBER:r=>/[0-9]/.test(r),CONTAINS_SPECIAL_CHARACTER:r=>/[*.!@#$%^&(){}\[\]:;<>,.?\/~_+-=|\\]/.test(r),SIZE:(r,i)=>i.length>=r},c=[{message:"Make sure your password contains at least"},{test:d.CONTAINS_CAPITAL_LETTER,message:"<mark>a capital letter</mark>,"},{test:d.CONTAINS_LOWERCASE_LETTER,message:"<mark>a lowercase letter</mark>,"},{test:d.CONTAINS_SPECIAL_CHARACTER,message:"<mark>a special character</mark> and"},{test:d.CONTAINS_NUMBER,message:"<mark>contains a number</mark>"},{test:d.SIZE.bind(null,8),message:(u=8,`and it <mark>must be at least ${u} characters long</mark>.`)}],m=class{constructor(i){r(this,i)}render(){return i("form-input",{label:this.label,name:this.name,required:!0,rules:c,type:"password",vspace:this.vspace,withTogglePasswordVisibility:!0})}};var u;export{a as form_button,s as form_input,l as form_validometer,n as login_form,m as login_password_input}