"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const r=require("lit/decorators.js"),n=require("lit/directives/class-map.js"),d=require("lit"),p=require("lit/directives/unsafe-html.js");require("../base/base.cjs");const u=require("../base/template.cjs");require("../shared/zwc-template/zwc-template.cjs");var h=Object.defineProperty,C=Object.getOwnPropertyDescriptor,a=(s,e,o,c)=>{for(var t=c>1?void 0:c?C(e,o):e,i=s.length-1,l;i>=0;i--)(l=s[i])&&(t=(c?l(e,o,t):l(t))||t);return c&&t&&h(e,o,t),t};exports.ZwcCard=class extends u.Template{constructor(){super(...arguments),this.cardBackground="",this.hasCenteredContent=!1,this.hasInvertedContent=!1,this.hasCardClickable=!1,this.link={href:"",target:""},this.data=""}render(){const s={card:!0,"card--centered":this.hasCenteredContent,[`${this.cardBackground}`]:this.cardBackground},e={"card-content":!0,inverted:this.hasInvertedContent};return d.html`
      ${this.hasCardClickable?d.html` <a
            .href=${this.link.href}
            .target=${this.link.target}
            class=${n.classMap(s)}
          >
            <div class=${n.classMap(e)}>
              ${p.unsafeHTML(this.data)}
            </div>
          </a>`:d.html`<div class=${n.classMap(s)}>
            <div class=${n.classMap(e)}>
              ${p.unsafeHTML(this.data)}
            </div>
          </div>`}
    `}};a([r.property({type:String,attribute:"background-class"})],exports.ZwcCard.prototype,"cardBackground",2);a([r.property({type:Boolean,attribute:"centered"})],exports.ZwcCard.prototype,"hasCenteredContent",2);a([r.property({type:Boolean,attribute:"inverted"})],exports.ZwcCard.prototype,"hasInvertedContent",2);a([r.property({type:Boolean,attribute:"clickable"})],exports.ZwcCard.prototype,"hasCardClickable",2);a([r.property({type:Object})],exports.ZwcCard.prototype,"link",2);a([r.state()],exports.ZwcCard.prototype,"data",2);exports.ZwcCard=a([r.customElement("zwc-card")],exports.ZwcCard);
//# sourceMappingURL=zwc-card.cjs.map
