"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const t=require("lit/decorators.js"),n=require("lit/directives/class-map.js"),c=require("lit"),l=require("../base/base.cjs");var h=Object.defineProperty,y=Object.getOwnPropertyDescriptor,e=(r,s,u,a)=>{for(var o=a>1?void 0:a?y(s,u):s,i=r.length-1,p;i>=0;i--)(p=r[i])&&(o=(a?p(s,u,o):p(o))||o);return a&&o&&h(s,u,o),o};exports.ZwcQuote=class extends l.Base{constructor(){super(...arguments),this.data="",this.quoteText="",this.author="",this.title="",this.showAuthorInfo=!1,this.showAuthorImage=!1,this.hasInvertedContent=!1,this.background="",this.picture={src:"",alt:""}}render(){const r={"quote-inner":!0,[`${this.background}`]:this.background,inverted:this.hasInvertedContent};return c.html`
      <div class=${n.classMap(r)}>
        <span class="icon icon--communication-quote-closed_solid"></span>
        <blockquote class="quote">&#8220;${this.quoteText}&#8222;</blockquote>
        ${this.showAuthorInfo?c.html`<p class="quote-author caption-large">${this.author}</p>
              <p class="quote-author-title caption-small">${this.title}</p>`:""}
        ${this.showAuthorImage?c.html` <img
              class="img-rounded img-100"
              .src=${this.picture.src}
              .alt=${this.picture.alt}
            />`:""}
      </div>
    `}};e([t.state()],exports.ZwcQuote.prototype,"data",2);e([t.property({type:String,attribute:"text"})],exports.ZwcQuote.prototype,"quoteText",2);e([t.property({type:String,attribute:"author"})],exports.ZwcQuote.prototype,"author",2);e([t.property({type:String,attribute:"title"})],exports.ZwcQuote.prototype,"title",2);e([t.property({type:Boolean,attribute:"author-info"})],exports.ZwcQuote.prototype,"showAuthorInfo",2);e([t.property({type:Boolean,attribute:"author-image"})],exports.ZwcQuote.prototype,"showAuthorImage",2);e([t.property({type:Boolean,attribute:"inverted"})],exports.ZwcQuote.prototype,"hasInvertedContent",2);e([t.property({type:String,attribute:"background-class"})],exports.ZwcQuote.prototype,"background",2);e([t.property({type:Object})],exports.ZwcQuote.prototype,"picture",2);e([t.query("zwc-template")],exports.ZwcQuote.prototype,"content",2);exports.ZwcQuote=e([t.customElement("zwc-quote")],exports.ZwcQuote);
//# sourceMappingURL=zwc-quote.cjs.map
