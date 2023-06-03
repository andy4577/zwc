"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const m=require("../../../../../node_modules/@lit/reactive-element/decorators/custom-element.cjs");require("../../../../../node_modules/@lit/reactive-element/decorators/query-assigned-elements.cjs");require("../../../../../node_modules/@lit/reactive-element/reactive-element.cjs");const d=require("../../../../../node_modules/lit-html/lit-html.cjs"),u=require("../../../../../node_modules/lit-element/lit-element.cjs");var b=Object.defineProperty,h=Object.getOwnPropertyDescriptor,p=(l,r,o,s)=>{for(var e=s>1?void 0:s?h(r,o):r,t=l.length-1,n;t>=0;t--)(n=l[t])&&(e=(s?n(r,o,e):n(e))||e);return s&&e&&b(r,o,e),e};exports.ZwcTabsTemplate=class extends u.LitElement{constructor(){super(...arguments),this.allText=null}render(){return d.html`<slot @slotchange=${this.handleSlotChange}></slot>`}handleSlotChange(l){if(l){const o=l.target.assignedNodes({flatten:!0}).filter(e=>e.nodeType!==this.TEXT_NODE),s=[];o.forEach(e=>{const t={},n=Array.from(e.content.children),[a]=n.filter(i=>i.classList.contains("label")),[c]=n.filter(i=>i.classList.contains("body"));t.id=e.getAttribute("tab"),t.label=a.innerHTML.trim(),t.body=c.innerHTML.trim(),s.push(t)}),this.emitTagContent(s)}}emitTagContent(l){this.dispatchEvent(new CustomEvent("change",{composed:!0,cancelable:!0,bubbles:!0,detail:l}))}};exports.ZwcTabsTemplate=p([m.customElement("zwc-tabs-template")],exports.ZwcTabsTemplate);
//# sourceMappingURL=zwc-tabs-template.cjs.map
