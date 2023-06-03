"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const u=require("../../../../../node_modules/@lit/reactive-element/decorators/custom-element.cjs"),c=require("../../../../../node_modules/@lit/reactive-element/decorators/property.cjs"),m=require("../../../../../node_modules/@lit/reactive-element/decorators/state.cjs");require("../../../../../node_modules/@lit/reactive-element/decorators/query-assigned-elements.cjs");const p=require("../../../../../node_modules/lit-html/directives/class-map.cjs");require("../../../../../node_modules/@lit/reactive-element/reactive-element.cjs");const n=require("../../../../../node_modules/lit-html/lit-html.cjs");require("../../../../../node_modules/lit-element/lit-element.cjs");const d=require("../../../../../node_modules/lit-html/directives/unsafe-html.cjs");require("../base/base.cjs");const h=require("../base/template.cjs");require("../shared/zwc-template/zwc-template.cjs");var _=Object.defineProperty,v=Object.getOwnPropertyDescriptor,t=(r,s,a,l)=>{for(var e=l>1?void 0:l?v(s,a):s,i=r.length-1,o;i>=0;i--)(o=r[i])&&(e=(l?o(s,a,e):o(e))||e);return l&&e&&_(s,a,e),e};exports.ZwcBreaker=class extends h.Template{constructor(){super(...arguments),this.title="Breaker title",this.showTitle=!1,this.alignRight=!1,this.data=""}render(){const r={breaker:!0,"breaker--right":this.alignRight};return n.html`
      <aside class=${p.classMap(r)}>
        ${this.showTitle?n.html`<p class="breaker-title">${this.title}</p>`:""}
        ${d.unsafeHTML(this.data)}
      </aside>
    `}};t([c.property({type:String})],exports.ZwcBreaker.prototype,"title",2);t([c.property({type:Boolean,attribute:"show-title"})],exports.ZwcBreaker.prototype,"showTitle",2);t([c.property({type:Boolean,attribute:"align-right"})],exports.ZwcBreaker.prototype,"alignRight",2);t([m.state()],exports.ZwcBreaker.prototype,"data",2);exports.ZwcBreaker=t([u.customElement("zwc-breaker")],exports.ZwcBreaker);
//# sourceMappingURL=zwc-breaker.cjs.map