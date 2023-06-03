"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const c=require("lit"),t=require("lit/decorators.js"),n=require("lit/directives/class-map.js"),u=require("../base/base.cjs");require("../base/template.cjs");var g=Object.defineProperty,d=Object.getOwnPropertyDescriptor,s=(r,a,l,i)=>{for(var e=i>1?void 0:i?d(a,l):a,o=r.length-1,p;o>=0;o--)(p=r[o])&&(e=(i?p(a,l,e):p(e))||e);return i&&e&&g(a,l,e),e};exports.ZwcStageCarousel=class extends u.Base{constructor(){super(...arguments),this.type="none",this.headline="Welcome to",this.emphasized="Zurich Insurance",this.subline="Zurich Insurance",this.paginationRight=!1,this.inverted=!1}render(){const r={"stage-carousel":!0,"stage-carousel--pagination-right":this.paginationRight,"stage-carousel--inverted":this.inverted};return c.html`
      <div class=${n.classMap(r)}>
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
    `}};s([t.property({type:String})],exports.ZwcStageCarousel.prototype,"type",2);s([t.property({type:String})],exports.ZwcStageCarousel.prototype,"headline",2);s([t.property({type:String})],exports.ZwcStageCarousel.prototype,"emphasized",2);s([t.property({type:String})],exports.ZwcStageCarousel.prototype,"subline",2);s([t.property({type:Boolean,attribute:"pagination-right"})],exports.ZwcStageCarousel.prototype,"paginationRight",2);s([t.property({type:Boolean})],exports.ZwcStageCarousel.prototype,"inverted",2);exports.ZwcStageCarousel=s([t.customElement("zwc-stage-carousel")],exports.ZwcStageCarousel);
//# sourceMappingURL=zwc-stage-carousel.cjs.map
