"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const c=require("../../../../../../node_modules/@lit/reactive-element/decorators/custom-element.cjs");require("../../../../../../node_modules/@lit/reactive-element/decorators/query-assigned-elements.cjs");require("../../../../../../node_modules/@lit/reactive-element/reactive-element.cjs");const i=require("../../../../../../node_modules/lit-html/lit-html.cjs"),a=require("../../../../../../node_modules/lit-element/lit-element.cjs");var m=Object.defineProperty,u=Object.getOwnPropertyDescriptor,d=(t,n,s,l)=>{for(var e=l>1?void 0:l?u(n,s):n,r=t.length-1,o;r>=0;r--)(o=t[r])&&(e=(l?o(n,s,e):o(e))||e);return l&&e&&m(n,s,e),e};exports.ZwcTemplate=class extends a.LitElement{constructor(){super(...arguments),this.allText=null}render(){return i.html`<slot @slotchange=${this.handleSlotChange}></slot>`}handleSlotChange(t){if(t){const s=t.target.assignedNodes({flatten:!0}).filter(r=>r.nodeType!==this.TEXT_NODE),[l]=s,e=l.innerHTML.trim();this.emitTagContent(e)}}emitTagContent(t){this.dispatchEvent(new CustomEvent("change",{composed:!0,cancelable:!0,bubbles:!0,detail:t}))}};exports.ZwcTemplate=d([c.customElement("zwc-template")],exports.ZwcTemplate);
//# sourceMappingURL=zwc-template.cjs.map
