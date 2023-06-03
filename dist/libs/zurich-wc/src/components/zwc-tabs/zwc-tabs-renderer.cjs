"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const T=require("../../../../../node_modules/@lit/reactive-element/decorators/custom-element.cjs"),d=require("../../../../../node_modules/@lit/reactive-element/decorators/property.cjs"),h=require("../../../../../node_modules/@lit/reactive-element/decorators/query.cjs"),u=require("../../../../../node_modules/@lit/reactive-element/decorators/query-all.cjs");require("../../../../../node_modules/@lit/reactive-element/decorators/query-assigned-elements.cjs");require("../../../../../node_modules/@lit/reactive-element/reactive-element.cjs");const n=require("../../../../../node_modules/lit-html/lit-html.cjs");require("../../../../../node_modules/lit-element/lit-element.cjs");const m=require("../../../../../node_modules/lit-html/directives/class-map.cjs"),b=require("../../../../../node_modules/lit-html/directives/repeat.cjs"),f=require("../../../../../node_modules/lit-html/directives/unsafe-html.cjs"),v=require("../base/base.cjs");require("../base/template.cjs");require("../zwc-icon/zwc-icon.cjs");require("../../utils/pictograms.cjs");const y=require("../../utils/layout.cjs"),w=require("../../utils/horizontal-scroll.cjs");var x=Object.defineProperty,g=Object.getOwnPropertyDescriptor,a=(t,e,r,i)=>{for(var s=i>1?void 0:i?g(e,r):e,l=t.length-1,o;l>=0;l--)(o=t[l])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&x(e,r,s),s};exports.ZwcTabsRenderer=class extends v.Base{constructor(){super(...arguments),this.tabsData=[],this.layout="stretch",this.icons="",this.scrollToTab=!0,this.currentTabIndex=0}render(){const t={tabs:!0,[`tabs--${this.layout}`]:!0,"tabs-icons":this.icons};return n.html`
      <div class="${m.classMap(t)}" ?data-scroll-to-tab=${this.scrollToTab}>
        <nav>
          <div class="tabs-header-wrapper">
            <span
              class="slider-arrow slider-back icon icon--arrow-long-left_24"
              data-direction="back"
              @click=${this.handleSliderScroll}
            >
            </span>
            <span
              class="slider-arrow slider-forward icon icon--arrow-long-right_24"
              data-direction="forward"
              @click=${this.handleSliderScroll}
            >
            </span>
            <div class="tabs-header" role="tablist">
              ${this.renderTabHeaders(this.tabsData)}
            </div>
          </div>
        </nav>
        <div class="tabs-content-wrapper">
          ${this.renderTabContents(this.tabsData)}
        </div>
      </div>
    `}firstUpdated(){this.setHeaderTabSelected(this.headers[0]),this.setContentTabSelected(this.headers[0]),this.toggleTabsSliderArrows(),this.tabsHeader.addEventListener("scroll",()=>this.toggleTabsSliderArrows())}toggleTabsSliderArrows(){y.toggleHorizontalScrollArrows(this.tabsWrapper,this.tabsHeader)}handleSliderScroll(t){const r=t.target.dataset.direction,i=this.tabsWrapper.offsetWidth/2,s=Array.from(this.tabsHeader.children).map(c=>c.offsetWidth),l=w.calcLeftOffsets(s),o=l.findIndex(c=>c>i);this.currentTabIndex===0?(this.currentTabIndex=o,this.nextTabIndex=this.currentTabIndex):(this.nextTabIndex=this.currentTabIndex+1,this.prevTabIndex=this.currentTabIndex-1);const p=this.getLeftScroll(r,i,l);this.tabsHeader.scroll({top:0,left:p,behavior:"smooth"})}renderTabContents(t){return n.html`
      ${b.repeat(t,e=>e.id,(e,r)=>n.html`
            <div
              data-tab-index=${r}
              class="tabs-content"
              .id=${e.id}
              role="tabpanel"
              aria-labelledby="nav-${e.id}-tab"
            >
              ${f.unsafeHTML(e.body)}
            </div>
          `)}
    `}renderTabHeaders(t){return n.html`
      ${b.repeat(t,e=>e.id,(e,r)=>n.html` <button
            tabindex="0"
            role="tab"
            data-tab-index="${r}"
            aria-controls="${e.id}"
            aria-expanded="false"
            @click=${this.handleTabSwitch}
          >
            ${this.icons?n.html`<zwc-icon .icon=${this.icons}></zwc-icon>${e.label}`:n.html`${e.label}`}
          </button>`)}
    `}handleTabSwitch(t){t.target.nodeName==="BUTTON"&&(this.setHeaderTabSelected(t.target),this.setContentTabSelected(t.target))}setHeaderTabSelected(t){if(!t)return;const e=t;this.headers.forEach(r=>{r.classList.toggle("selected",r===e),r===e?r.setAttribute("aria-expanded","true"):r.setAttribute("aria-expanded","false")})}setContentTabSelected(t){if(!t)return;const e=t.dataset.tabIndex;this.contentDivs.forEach(r=>{r.classList.toggle("selected",r.dataset.tabIndex===e)})}getLeftScroll(t,e,r){return t==="forward"?(this.currentTabIndex=this.nextTabIndex,r[this.nextTabIndex]-e):(this.currentTabIndex=this.prevTabIndex,r[this.prevTabIndex]-e)}};a([d.property({type:Object})],exports.ZwcTabsRenderer.prototype,"tabsData",2);a([d.property({type:String})],exports.ZwcTabsRenderer.prototype,"layout",2);a([d.property({type:String})],exports.ZwcTabsRenderer.prototype,"icons",2);a([d.property({type:Boolean})],exports.ZwcTabsRenderer.prototype,"scrollToTab",2);a([u.queryAll(".tabs-header > button")],exports.ZwcTabsRenderer.prototype,"headers",2);a([u.queryAll(".tabs-content")],exports.ZwcTabsRenderer.prototype,"contentDivs",2);a([h.query(".tabs-header-wrapper")],exports.ZwcTabsRenderer.prototype,"tabsWrapper",2);a([h.query(".tabs-header")],exports.ZwcTabsRenderer.prototype,"tabsHeader",2);exports.ZwcTabsRenderer=a([T.customElement("zwc-tabs-renderer")],exports.ZwcTabsRenderer);
//# sourceMappingURL=zwc-tabs-renderer.cjs.map
