"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const n=require("lit/decorators.js"),s=require("lit"),m=require("../../../../assets/css/main.min.cjs"),a=require("../../utils/pictograms.cjs");var g=Object.defineProperty,u=Object.getOwnPropertyDescriptor,l=(p,e,o,r)=>{for(var t=r>1?void 0:r?u(e,o):e,i=p.length-1,c;i>=0;i--)(c=p[i])&&(t=(r?c(e,o,t):c(t))||t);return r&&t&&g(e,o,t),t};exports.ZwcPictogram=class extends s.LitElement{constructor(){super(...arguments),this.dark=!1,this.pictogram="career-analysis"}get pictogramClass(){return this.pictogram in a.PICTOGRAMS?`pictogram--${a.PICTOGRAMS[this.pictogram].class}${this.dark?"-dark":""}`:(console.error(`This pictogram does not exist ${this.pictogram}`),console.log("Please select from following",Object.keys(a.PICTOGRAMS)),"")}render(){return s.html`<span class="pictogram ${this.pictogramClass}"></span>`}};exports.ZwcPictogram.styles=[s.unsafeCSS(m),s.css`
      :host {
        display: inline-flex;
        justify-content: center;
        align-items: center;
      }
    `];l([n.property({type:Boolean})],exports.ZwcPictogram.prototype,"dark",2);l([n.property({type:String})],exports.ZwcPictogram.prototype,"pictogram",2);exports.ZwcPictogram=l([n.customElement("zwc-pictogram")],exports.ZwcPictogram);
//# sourceMappingURL=zwc-pictogram.cjs.map
