"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const a=require("lit/decorators.js"),o=require("lit"),p=require("lit/directives/class-map.js"),b=require("lit/directives/repeat.js"),u=require("lit/directives/unsafe-html.js"),T=require("../base/base.cjs");require("../base/template.cjs");require("../zwc-icon/zwc-icon.cjs");require("../../utils/pictograms.cjs");const f=require("../../utils/layout.cjs"),w=require("../../utils/horizontal-scroll.cjs");var v=Object.defineProperty,x=Object.getOwnPropertyDescriptor,i=(t,e,r,n)=>{for(var s=n>1?void 0:n?x(e,r):e,l=t.length-1,d;l>=0;l--)(d=t[l])&&(s=(n?d(e,r,s):d(s))||s);return n&&s&&v(e,r,s),s};exports.ZwcTabsRenderer=class extends T.Base{constructor(){super(...arguments),this.tabsData=[],this.layout="stretch",this.icons="",this.scrollToTab=!0,this.currentTabIndex=0}render(){const t={tabs:!0,[`tabs--${this.layout}`]:!0,"tabs-icons":this.icons};return o.html`
      <div class="${p.classMap(t)}" ?data-scroll-to-tab=${this.scrollToTab}>
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
    `}firstUpdated(){this.setHeaderTabSelected(this.headers[0]),this.setContentTabSelected(this.headers[0]),this.toggleTabsSliderArrows(),this.tabsHeader.addEventListener("scroll",()=>this.toggleTabsSliderArrows())}toggleTabsSliderArrows(){f.toggleHorizontalScrollArrows(this.tabsWrapper,this.tabsHeader)}handleSliderScroll(t){const r=t.target.dataset.direction,n=this.tabsWrapper.offsetWidth/2,s=Array.from(this.tabsHeader.children).map(c=>c.offsetWidth),l=w.calcLeftOffsets(s),d=l.findIndex(c=>c>n);this.currentTabIndex===0?(this.currentTabIndex=d,this.nextTabIndex=this.currentTabIndex):(this.nextTabIndex=this.currentTabIndex+1,this.prevTabIndex=this.currentTabIndex-1);const h=this.getLeftScroll(r,n,l);this.tabsHeader.scroll({top:0,left:h,behavior:"smooth"})}renderTabContents(t){return o.html`
      ${b.repeat(t,e=>e.id,(e,r)=>o.html`
            <div
              data-tab-index=${r}
              class="tabs-content"
              .id=${e.id}
              role="tabpanel"
              aria-labelledby="nav-${e.id}-tab"
            >
              ${u.unsafeHTML(e.body)}
            </div>
          `)}
    `}renderTabHeaders(t){return o.html`
      ${b.repeat(t,e=>e.id,(e,r)=>o.html` <button
            tabindex="0"
            role="tab"
            data-tab-index="${r}"
            aria-controls="${e.id}"
            aria-expanded="false"
            @click=${this.handleTabSwitch}
          >
            ${this.icons?o.html`<zwc-icon .icon=${this.icons}></zwc-icon>${e.label}`:o.html`${e.label}`}
          </button>`)}
    `}handleTabSwitch(t){t.target.nodeName==="BUTTON"&&(this.setHeaderTabSelected(t.target),this.setContentTabSelected(t.target))}setHeaderTabSelected(t){if(!t)return;const e=t;this.headers.forEach(r=>{r.classList.toggle("selected",r===e),r===e?r.setAttribute("aria-expanded","true"):r.setAttribute("aria-expanded","false")})}setContentTabSelected(t){if(!t)return;const e=t.dataset.tabIndex;this.contentDivs.forEach(r=>{r.classList.toggle("selected",r.dataset.tabIndex===e)})}getLeftScroll(t,e,r){return t==="forward"?(this.currentTabIndex=this.nextTabIndex,r[this.nextTabIndex]-e):(this.currentTabIndex=this.prevTabIndex,r[this.prevTabIndex]-e)}};i([a.property({type:Object})],exports.ZwcTabsRenderer.prototype,"tabsData",2);i([a.property({type:String})],exports.ZwcTabsRenderer.prototype,"layout",2);i([a.property({type:String})],exports.ZwcTabsRenderer.prototype,"icons",2);i([a.property({type:Boolean})],exports.ZwcTabsRenderer.prototype,"scrollToTab",2);i([a.queryAll(".tabs-header > button")],exports.ZwcTabsRenderer.prototype,"headers",2);i([a.queryAll(".tabs-content")],exports.ZwcTabsRenderer.prototype,"contentDivs",2);i([a.query(".tabs-header-wrapper")],exports.ZwcTabsRenderer.prototype,"tabsWrapper",2);i([a.query(".tabs-header")],exports.ZwcTabsRenderer.prototype,"tabsHeader",2);exports.ZwcTabsRenderer=i([a.customElement("zwc-tabs-renderer")],exports.ZwcTabsRenderer);
//# sourceMappingURL=zwc-tabs-renderer.cjs.map
