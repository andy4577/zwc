"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const n=require("../../../../../node_modules/@lit/reactive-element/decorators/custom-element.cjs"),t=require("../../../../../node_modules/@lit/reactive-element/decorators/property.cjs"),p=require("../../../../../node_modules/@lit/reactive-element/decorators/state.cjs"),h=require("../../../../../node_modules/@lit/reactive-element/decorators/query.cjs");require("../../../../../node_modules/@lit/reactive-element/decorators/query-assigned-elements.cjs");const d=require("../../../../../node_modules/lit-html/directives/class-map.cjs");require("../../../../../node_modules/@lit/reactive-element/reactive-element.cjs");const l=require("../../../../../node_modules/lit-html/lit-html.cjs");require("../../../../../node_modules/lit-element/lit-element.cjs");const m=require("../base/base.cjs");var y=Object.defineProperty,q=Object.getOwnPropertyDescriptor,e=(r,s,i,u)=>{for(var o=u>1?void 0:u?q(s,i):s,c=r.length-1,a;c>=0;c--)(a=r[c])&&(o=(u?a(s,i,o):a(o))||o);return u&&o&&y(s,i,o),o};exports.ZwcQuote=class extends m.Base{constructor(){super(...arguments),this.data="",this.quoteText="",this.author="",this.title="",this.showAuthorInfo=!1,this.showAuthorImage=!1,this.hasInvertedContent=!1,this.background="",this.picture={src:"",alt:""}}render(){const r={"quote-inner":!0,[`${this.background}`]:this.background,inverted:this.hasInvertedContent};return l.html`
      <div class=${d.classMap(r)}>
        <span class="icon icon--communication-quote-closed_solid"></span>
        <blockquote class="quote">&#8220;${this.quoteText}&#8222;</blockquote>
        ${this.showAuthorInfo?l.html`<p class="quote-author caption-large">${this.author}</p>
              <p class="quote-author-title caption-small">${this.title}</p>`:""}
        ${this.showAuthorImage?l.html` <img
              class="img-rounded img-100"
              .src=${this.picture.src}
              .alt=${this.picture.alt}
            />`:""}
      </div>
    `}};e([p.state()],exports.ZwcQuote.prototype,"data",2);e([t.property({type:String,attribute:"text"})],exports.ZwcQuote.prototype,"quoteText",2);e([t.property({type:String,attribute:"author"})],exports.ZwcQuote.prototype,"author",2);e([t.property({type:String,attribute:"title"})],exports.ZwcQuote.prototype,"title",2);e([t.property({type:Boolean,attribute:"author-info"})],exports.ZwcQuote.prototype,"showAuthorInfo",2);e([t.property({type:Boolean,attribute:"author-image"})],exports.ZwcQuote.prototype,"showAuthorImage",2);e([t.property({type:Boolean,attribute:"inverted"})],exports.ZwcQuote.prototype,"hasInvertedContent",2);e([t.property({type:String,attribute:"background-class"})],exports.ZwcQuote.prototype,"background",2);e([t.property({type:Object})],exports.ZwcQuote.prototype,"picture",2);e([h.query("zwc-template")],exports.ZwcQuote.prototype,"content",2);exports.ZwcQuote=e([n.customElement("zwc-quote")],exports.ZwcQuote);
//# sourceMappingURL=zwc-quote.cjs.map
