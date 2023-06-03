"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const p=require("../../../../../node_modules/@lit/reactive-element/decorators/custom-element.cjs"),a=require("../../../../../node_modules/@lit/reactive-element/decorators/property.cjs"),m=require("../../../../../node_modules/@lit/reactive-element/decorators/state.cjs");require("../../../../../node_modules/@lit/reactive-element/decorators/query-assigned-elements.cjs");const l=require("../../../../../node_modules/lit-html/directives/class-map.cjs");require("../../../../../node_modules/@lit/reactive-element/reactive-element.cjs");const d=require("../../../../../node_modules/lit-html/lit-html.cjs");require("../../../../../node_modules/lit-element/lit-element.cjs");const u=require("../../../../../node_modules/lit-html/directives/unsafe-html.cjs");require("../base/base.cjs");const h=require("../base/template.cjs");require("../shared/zwc-template/zwc-template.cjs");var v=Object.defineProperty,C=Object.getOwnPropertyDescriptor,r=(s,e,o,c)=>{for(var t=c>1?void 0:c?C(e,o):e,n=s.length-1,i;n>=0;n--)(i=s[n])&&(t=(c?i(e,o,t):i(t))||t);return c&&t&&v(e,o,t),t};exports.ZwcCard=class extends h.Template{constructor(){super(...arguments),this.cardBackground="",this.hasCenteredContent=!1,this.hasInvertedContent=!1,this.hasCardClickable=!1,this.link={href:"",target:""},this.data=""}render(){const s={card:!0,"card--centered":this.hasCenteredContent,[`${this.cardBackground}`]:this.cardBackground},e={"card-content":!0,inverted:this.hasInvertedContent};return d.html`
      ${this.hasCardClickable?d.html` <a
            .href=${this.link.href}
            .target=${this.link.target}
            class=${l.classMap(s)}
          >
            <div class=${l.classMap(e)}>
              ${u.unsafeHTML(this.data)}
            </div>
          </a>`:d.html`<div class=${l.classMap(s)}>
            <div class=${l.classMap(e)}>
              ${u.unsafeHTML(this.data)}
            </div>
          </div>`}
    `}};r([a.property({type:String,attribute:"background-class"})],exports.ZwcCard.prototype,"cardBackground",2);r([a.property({type:Boolean,attribute:"centered"})],exports.ZwcCard.prototype,"hasCenteredContent",2);r([a.property({type:Boolean,attribute:"inverted"})],exports.ZwcCard.prototype,"hasInvertedContent",2);r([a.property({type:Boolean,attribute:"clickable"})],exports.ZwcCard.prototype,"hasCardClickable",2);r([a.property({type:Object})],exports.ZwcCard.prototype,"link",2);r([m.state()],exports.ZwcCard.prototype,"data",2);exports.ZwcCard=r([p.customElement("zwc-card")],exports.ZwcCard);
//# sourceMappingURL=zwc-card.cjs.map
