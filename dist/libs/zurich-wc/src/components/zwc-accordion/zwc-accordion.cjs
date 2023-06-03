"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const u=require("../../../../../node_modules/@lit/reactive-element/decorators/custom-element.cjs"),n=require("../../../../../node_modules/@lit/reactive-element/decorators/property.cjs"),p=require("../../../../../node_modules/@lit/reactive-element/decorators/query-all.cjs");require("../../../../../node_modules/@lit/reactive-element/decorators/query-assigned-elements.cjs");require("../../../../../node_modules/@lit/reactive-element/reactive-element.cjs");const a=require("../../../../../node_modules/lit-html/lit-html.cjs");require("../../../../../node_modules/lit-element/lit-element.cjs");const m=require("../../../../../node_modules/lit-html/directives/class-map.cjs"),v=require("../../../../../node_modules/lit-html/directives/repeat.cjs"),h=require("../base/base.cjs");require("../base/template.cjs");const d=require("../../utils/animation.cjs");var y=Object.defineProperty,b=Object.getOwnPropertyDescriptor,s=(t,e,o,r)=>{for(var i=r>1?void 0:r?b(e,o):e,c=t.length-1,l;c>=0;c--)(l=t[c])&&(i=(r?l(e,o,i):l(i))||i);return r&&i&&y(e,o,i),i};exports.ZwcAccordion=class extends h.Base{constructor(){super(...arguments),this.iconPosition="left",this.openMultiple=!1,this.data=[]}render(){const t={accordion:!0,[`accordion--icon-${this.iconPosition}`]:!0};return a.html`
      <div
        class=${m.classMap(t)}
        ?data-open-multiple=${this.openMultiple}
        @click=${this.clickHandler}
      >
        ${v.repeat(this.data,e=>e.key,e=>this.renderAccordionItem(e))}
      </div>
    `}renderAccordionItem(t){const{key:e,title:o,bodyText:r}=t;return a.html`
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
    `}clickHandler(t){var r;if(t.target===null||((r=t.target)==null?void 0:r.nodeName)!=="BUTTON")return;const e=t.target,o=this.getAccordionItem(e);o!=null&&o.classList.contains("active")?this.closeItem(o,e):o&&(this.openMultiple||this.activeDivs.length>0&&this.closeAll(this.activeDivs),this.openItem(o,e))}closeAll(t){t.forEach(e=>{const o=e.querySelector(".accordion-button");o&&this.closeItem(e,o)})}closeItem(t,e){e.setAttribute("area-expanded","false"),t.classList.remove("active");const o=e.getAttribute("aria-controls");let r;t&&(r=t.querySelector(`#${o}`),r&&d.slideToggle(r,"up",32))}openItem(t,e){e.setAttribute("aria-expanded","true"),t.classList.add("active");const o=e.getAttribute("aria-controls");let r;t&&(r=t.querySelector(`#${o}`),r&&d.slideToggle(r,"down",32))}getAccordionItem(t){var e;return(e=t.parentNode)==null?void 0:e.parentNode}};s([n.property({type:String,attribute:"icon-position"})],exports.ZwcAccordion.prototype,"iconPosition",2);s([n.property({type:Boolean,attribute:"open-multiple"})],exports.ZwcAccordion.prototype,"openMultiple",2);s([n.property({type:Object,converter:{fromAttribute(t){let e;if(t)try{return e=JSON.parse(t),e}catch(o){console.error(o)}return null}}})],exports.ZwcAccordion.prototype,"data",2);s([p.queryAll("div.active")],exports.ZwcAccordion.prototype,"activeDivs",2);exports.ZwcAccordion=s([u.customElement("zwc-accordion")],exports.ZwcAccordion);
//# sourceMappingURL=zwc-accordion.cjs.map
