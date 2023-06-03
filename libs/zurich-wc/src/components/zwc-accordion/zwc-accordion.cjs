"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const s=require("lit/decorators.js"),l=require("lit"),p=require("lit/directives/class-map.js"),u=require("lit/directives/repeat.js"),v=require("../base/base.cjs");require("../base/template.cjs");const d=require("../../utils/animation.cjs");var h=Object.defineProperty,b=Object.getOwnPropertyDescriptor,c=(t,e,o,r)=>{for(var i=r>1?void 0:r?b(e,o):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(i=(r?a(e,o,i):a(i))||i);return r&&i&&h(e,o,i),i};exports.ZwcAccordion=class extends v.Base{constructor(){super(...arguments),this.iconPosition="left",this.openMultiple=!1,this.data=[]}render(){const t={accordion:!0,[`accordion--icon-${this.iconPosition}`]:!0};return l.html`
      <div
        class=${p.classMap(t)}
        ?data-open-multiple=${this.openMultiple}
        @click=${this.clickHandler}
      >
        ${u.repeat(this.data,e=>e.key,e=>this.renderAccordionItem(e))}
      </div>
    `}renderAccordionItem(t){const{key:e,title:o,bodyText:r}=t;return l.html`
      <div class="accordion-item">
        <h5 class="accordion-header">
          <button
            class="accordion-button"
            type="button"
            aria-expanded="false"
            aria-controls="item-${e}"
          >
            ${o}
          </button>
        </h5>
        <div id="item-${e}" class="accordion-body">
          <p>${r}</p>
        </div>
      </div>
    `}clickHandler(t){var r;if(t.target===null||((r=t.target)==null?void 0:r.nodeName)!=="BUTTON")return;const e=t.target,o=this.getAccordionItem(e);o!=null&&o.classList.contains("active")?this.closeItem(o,e):o&&(this.openMultiple||this.activeDivs.length>0&&this.closeAll(this.activeDivs),this.openItem(o,e))}closeAll(t){t.forEach(e=>{const o=e.querySelector(".accordion-button");o&&this.closeItem(e,o)})}closeItem(t,e){e.setAttribute("area-expanded","false"),t.classList.remove("active");const o=e.getAttribute("aria-controls");let r;t&&(r=t.querySelector(`#${o}`),r&&d.slideToggle(r,"up",32))}openItem(t,e){e.setAttribute("aria-expanded","true"),t.classList.add("active");const o=e.getAttribute("aria-controls");let r;t&&(r=t.querySelector(`#${o}`),r&&d.slideToggle(r,"down",32))}getAccordionItem(t){var e;return(e=t.parentNode)==null?void 0:e.parentNode}};c([s.property({type:String,attribute:"icon-position"})],exports.ZwcAccordion.prototype,"iconPosition",2);c([s.property({type:Boolean,attribute:"open-multiple"})],exports.ZwcAccordion.prototype,"openMultiple",2);c([s.property({type:Object,converter:{fromAttribute(t){let e;if(t)try{return e=JSON.parse(t),e}catch(o){console.error(o)}return null}}})],exports.ZwcAccordion.prototype,"data",2);c([s.queryAll("div.active")],exports.ZwcAccordion.prototype,"activeDivs",2);exports.ZwcAccordion=c([s.customElement("zwc-accordion")],exports.ZwcAccordion);
//# sourceMappingURL=zwc-accordion.cjs.map
