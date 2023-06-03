"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const g=require("../base/base.cjs"),e=require("lit/decorators.js"),o=require("lit"),l=require("lit/directives/class-map.js");require("../zwc-pictogram/zwc-pictogram.cjs");require("../zwc-promise-label/zwc-promise-label.cjs");var m=Object.defineProperty,y=Object.getOwnPropertyDescriptor,t=(r,s,a,p)=>{for(var i=p>1?void 0:p?y(s,a):s,c=r.length-1,n;c>=0;c--)(n=r[c])&&(i=(p?n(s,a,i):n(i))||i);return p&&i&&m(s,a,i),i};exports.ZwcStage=class extends g.Base{constructor(){super(...arguments),this.type="image",this.reversed=!1,this.inverted=!1,this.leftAligned=!1,this.background="",this.preline="Pre line",this.headline="Head Line",this.pictogram="career-analysis",this.pictogramDark=!1,this.imageSrc="",this.promiseTitle="Green",this.promiseSubtitle="Promise",this.promiseType="none"}get getImageSrc(){return this.type!=="pictogram"&&this.imageSrc===""&&console.error('image-src="value" needs to be set.'),this.imageSrc}renderPromise(){return this.promiseType!=="none"?o.html` <zwc-promise
          .title=${this.promiseTitle}
          .subtitle=${this.promiseSubtitle}
          .promise=${this.promiseType}
          .inverted=${this.inverted}
        ></zwc-promise>`:""}render(){const r={["stage-banner"]:!0,[`stage-banner--${this.type}`]:!0,[`${this.background}`]:!0,reversed:this.reversed,inverted:this.inverted,"stage-banner--left":this.leftAligned};return o.html`
      <div class=${l.classMap(r)}>
        ${this.renderPromise()}
        <div class="stage-banner-container">
          <div class="stage-banner-image">
            ${this.type==="pictogram"?o.html`<zwc-pictogram
                  .pictogram="${this.pictogram}"
                  ?dark="${this.pictogramDark}"
                ></zwc-pictogram>`:o.html`<img src=${this.getImageSrc} alt="image" /> `}
          </div>
          <div class="stage-banner-content">
            <p><strong>${this.preline}</strong></p>
            <h1>${this.headline}</h1>
          </div>
        </div>
      </div>
    `}};t([e.property({type:String,converter:{fromAttribute(r){return r==="image"||r==="shape"||r==="pictogram"||console.error(`<zwc-stage 'type="${r}" ...> - is not valid attribute value, please provide "image | shape | pictogram"`),String(r)}}})],exports.ZwcStage.prototype,"type",2);t([e.property({type:Boolean})],exports.ZwcStage.prototype,"reversed",2);t([e.property({type:Boolean})],exports.ZwcStage.prototype,"inverted",2);t([e.property({type:Boolean,attribute:"left-aligned"})],exports.ZwcStage.prototype,"leftAligned",2);t([e.property({type:String})],exports.ZwcStage.prototype,"background",2);t([e.property({type:String})],exports.ZwcStage.prototype,"preline",2);t([e.property({type:String})],exports.ZwcStage.prototype,"headline",2);t([e.property({type:String})],exports.ZwcStage.prototype,"pictogram",2);t([e.property({type:Boolean,attribute:"pictogram-dark"})],exports.ZwcStage.prototype,"pictogramDark",2);t([e.property({type:String,attribute:"image-src"})],exports.ZwcStage.prototype,"imageSrc",2);t([e.property({type:String,attribute:"promise-title"})],exports.ZwcStage.prototype,"promiseTitle",2);t([e.property({type:String,attribute:"promise-subtitle"})],exports.ZwcStage.prototype,"promiseSubtitle",2);t([e.property({type:String,attribute:"promise-type"})],exports.ZwcStage.prototype,"promiseType",2);exports.ZwcStage=t([e.customElement("zwc-stage")],exports.ZwcStage);
//# sourceMappingURL=zwc-stage.cjs.map
