"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const t=require("lit/decorators.js"),n=require("lit/directives/class-map.js"),p=require("lit"),u=require("lit/directives/unsafe-html.js");require("../base/base.cjs");const h=require("../base/template.cjs");require("../shared/zwc-template/zwc-template.cjs");var w=Object.defineProperty,m=Object.getOwnPropertyDescriptor,r=(s,a,l,i)=>{for(var e=i>1?void 0:i?m(a,l):a,o=s.length-1,c;o>=0;o--)(c=s[o])&&(e=(i?c(a,l,e):c(e))||e);return i&&e&&w(a,l,e),e};exports.ZwcBreaker=class extends h.Template{constructor(){super(...arguments),this.title="Breaker title",this.showTitle=!1,this.alignRight=!1,this.data=""}render(){const s={breaker:!0,"breaker--right":this.alignRight};return p.html`
      <aside class=${n.classMap(s)}>
        ${this.showTitle?p.html`<p class="breaker-title">${this.title}</p>`:""}
        ${u.unsafeHTML(this.data)}
      </aside>
    `}};r([t.property({type:String})],exports.ZwcBreaker.prototype,"title",2);r([t.property({type:Boolean,attribute:"show-title"})],exports.ZwcBreaker.prototype,"showTitle",2);r([t.property({type:Boolean,attribute:"align-right"})],exports.ZwcBreaker.prototype,"alignRight",2);r([t.state()],exports.ZwcBreaker.prototype,"data",2);exports.ZwcBreaker=r([t.customElement("zwc-breaker")],exports.ZwcBreaker);
//# sourceMappingURL=zwc-breaker.cjs.map