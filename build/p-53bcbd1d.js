const r=(r,t,e)=>e(r.confirm(t)),t=r=>r.metaKey||r.altKey||r.ctrlKey||r.shiftKey,e=r=>{const t=r.navigator.userAgent;return(-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&r.history&&"pushState"in r.history},o=r=>-1===r.userAgent.indexOf("Trident"),s=r=>-1===r.userAgent.indexOf("Firefox"),a=(r,t)=>void 0===t.state&&-1===r.userAgent.indexOf("CriOS"),n=(r,t)=>{const e=r[t],o="__storage_test__";try{return e.setItem(o,o),e.removeItem(o),!0}catch(r){return r instanceof DOMException&&(22===r.code||1014===r.code||"QuotaExceededError"===r.name||"NS_ERROR_DOM_QUOTA_REACHED"===r.name)&&0!==e.length}};export{e as a,o as b,a as c,s as d,r as g,t as i,n as s}