"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});require("../../../../../node_modules/@lit/reactive-element/reactive-element.cjs");const n=require("../../../../../node_modules/lit-html/lit-html.cjs");require("../../../../../node_modules/lit-element/lit-element.cjs");const p=require("../../../../../node_modules/@lit/reactive-element/decorators/custom-element.cjs"),s=require("../../../../../node_modules/@lit/reactive-element/decorators/property.cjs");require("../../../../../node_modules/@lit/reactive-element/decorators/query-assigned-elements.cjs");const u=require("../../../../../node_modules/lit-html/directives/class-map.cjs"),d=require("../base/base.cjs");require("../base/template.cjs");var m=Object.defineProperty,g=Object.getOwnPropertyDescriptor,t=(r,i,a,l)=>{for(var e=l>1?void 0:l?g(i,a):i,o=r.length-1,c;o>=0;o--)(c=r[o])&&(e=(l?c(i,a,e):c(e))||e);return l&&e&&m(i,a,e),e};exports.ZwcStageCarousel=class extends d.Base{constructor(){super(...arguments),this.type="none",this.headline="Welcome to",this.emphasized="Zurich Insurance",this.subline="Zurich Insurance",this.paginationRight=!1,this.inverted=!1}render(){const r={"stage-carousel":!0,"stage-carousel--pagination-right":this.paginationRight,"stage-carousel--inverted":this.inverted};return n.html`
      <div class=${u.classMap(r)}>
        <div
          class="splide"
          aria-labelledby="stage-headline"
          aria-roledescription="carousel"
          role="group"
        >
          <div class="splide__track">
            <ul class="splide__list">
              <li class="splide__slide">item</li>
              <li class="splide__slide">item</li>
            </ul>
          </div>
        </div>
      </div>
    `}};t([s.property({type:String})],exports.ZwcStageCarousel.prototype,"type",2);t([s.property({type:String})],exports.ZwcStageCarousel.prototype,"headline",2);t([s.property({type:String})],exports.ZwcStageCarousel.prototype,"emphasized",2);t([s.property({type:String})],exports.ZwcStageCarousel.prototype,"subline",2);t([s.property({type:Boolean,attribute:"pagination-right"})],exports.ZwcStageCarousel.prototype,"paginationRight",2);t([s.property({type:Boolean})],exports.ZwcStageCarousel.prototype,"inverted",2);exports.ZwcStageCarousel=t([p.customElement("zwc-stage-carousel")],exports.ZwcStageCarousel);
//# sourceMappingURL=zwc-stage-carousel.cjs.map
