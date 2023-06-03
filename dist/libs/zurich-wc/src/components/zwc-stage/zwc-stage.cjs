"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const l=require("../base/base.cjs"),m=require("../../../../../node_modules/@lit/reactive-element/decorators/custom-element.cjs"),t=require("../../../../../node_modules/@lit/reactive-element/decorators/property.cjs");require("../../../../../node_modules/@lit/reactive-element/decorators/query-assigned-elements.cjs");require("../../../../../node_modules/@lit/reactive-element/reactive-element.cjs");const p=require("../../../../../node_modules/lit-html/lit-html.cjs");require("../../../../../node_modules/lit-element/lit-element.cjs");const g=require("../../../../../node_modules/lit-html/directives/class-map.cjs");require("../zwc-pictogram/zwc-pictogram.cjs");require("../zwc-promise-label/zwc-promise-label.cjs");var d=Object.defineProperty,y=Object.getOwnPropertyDescriptor,e=(r,s,a,o)=>{for(var i=o>1?void 0:o?y(s,a):s,c=r.length-1,n;c>=0;c--)(n=r[c])&&(i=(o?n(s,a,i):n(i))||i);return o&&i&&d(s,a,i),i};exports.ZwcStage=class extends l.Base{constructor(){super(...arguments),this.type="image",this.reversed=!1,this.inverted=!1,this.leftAligned=!1,this.background="",this.preline="Pre line",this.headline="Head Line",this.pictogram="career-analysis",this.pictogramDark=!1,this.imageSrc="",this.promiseTitle="Green",this.promiseSubtitle="Promise",this.promiseType="none"}get getImageSrc(){return this.type!=="pictogram"&&this.imageSrc===""&&console.error('image-src="value" needs to be set.'),this.imageSrc}renderPromise(){return this.promiseType!=="none"?p.html` <zwc-promise
          .title=${this.promiseTitle}
          .subtitle=${this.promiseSubtitle}
          .promise=${this.promiseType}
          .inverted=${this.inverted}
        ></zwc-promise>`:""}render(){const r={["stage-banner"]:!0,[`stage-banner--${this.type}`]:!0,[`${this.background}`]:!0,reversed:this.reversed,inverted:this.inverted,"stage-banner--left":this.leftAligned};return p.html`
      <div class=${g.classMap(r)}>
        ${this.renderPromise()}
        <div class="stage-banner-container">
          <div class="stage-banner-image">
            ${this.type==="pictogram"?p.html`<zwc-pictogram
                  .pictogram="${this.pictogram}"
                  ?dark="${this.pictogramDark}"
                ></zwc-pictogram>`:p.html`<img src=${this.getImageSrc} alt="image" /> `}
          </div>
          <div class="stage-banner-content">
            <p><strong>${this.preline}</strong></p>
            <h1>${this.headline}</h1>
          </div>
        </div>
      </div>
    `}};e([t.property({type:String,converter:{fromAttribute(r){return r==="image"||r==="shape"||r==="pictogram"||console.error(`<zwc-stage 'type="${r}" ...> - is not valid attribute value, please provide "image | shape | pictogram"`),String(r)}}})],exports.ZwcStage.prototype,"type",2);e([t.property({type:Boolean})],exports.ZwcStage.prototype,"reversed",2);e([t.property({type:Boolean})],exports.ZwcStage.prototype,"inverted",2);e([t.property({type:Boolean,attribute:"left-aligned"})],exports.ZwcStage.prototype,"leftAligned",2);e([t.property({type:String})],exports.ZwcStage.prototype,"background",2);e([t.property({type:String})],exports.ZwcStage.prototype,"preline",2);e([t.property({type:String})],exports.ZwcStage.prototype,"headline",2);e([t.property({type:String})],exports.ZwcStage.prototype,"pictogram",2);e([t.property({type:Boolean,attribute:"pictogram-dark"})],exports.ZwcStage.prototype,"pictogramDark",2);e([t.property({type:String,attribute:"image-src"})],exports.ZwcStage.prototype,"imageSrc",2);e([t.property({type:String,attribute:"promise-title"})],exports.ZwcStage.prototype,"promiseTitle",2);e([t.property({type:String,attribute:"promise-subtitle"})],exports.ZwcStage.prototype,"promiseSubtitle",2);e([t.property({type:String,attribute:"promise-type"})],exports.ZwcStage.prototype,"promiseType",2);exports.ZwcStage=e([m.customElement("zwc-stage")],exports.ZwcStage);
//# sourceMappingURL=zwc-stage.cjs.map
