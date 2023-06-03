"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const r=require("lit/decorators.js"),p=require("lit"),n=require("../base/base.cjs");require("../base/template.cjs");require("./zwc-tabs-template.cjs");require("./zwc-tabs-renderer.cjs");var b=Object.defineProperty,u=Object.getOwnPropertyDescriptor,s=(e,a,c,o)=>{for(var t=o>1?void 0:o?u(a,c):a,l=e.length-1,i;l>=0;l--)(i=e[l])&&(t=(o?i(a,c,t):i(t))||t);return o&&t&&b(a,c,t),t};exports.ZwcTabs=class extends n.Base{constructor(){super(...arguments),this.data=[],this.layout="stretch",this.icons="",this.scrollToTab=!0}render(){return p.html`${this.data.length>0?p.html` <zwc-tabs-renderer
          .tabsData=${this.data}
          .icons=${this.icons}
          .layout=${this.layout}
          .scrollToTab=${this.scrollToTab}
        >
        </zwc-tabs-renderer>`:""}`}firstUpdated(){this.collector&&this.collector.addEventListener("change",e=>this.handleChange(e))}handleChange(e){this.data=e.detail,this.requestUpdate()}};s([r.property({type:Object})],exports.ZwcTabs.prototype,"data",2);s([r.property({type:String})],exports.ZwcTabs.prototype,"layout",2);s([r.property({type:String,attribute:"icons"})],exports.ZwcTabs.prototype,"icons",2);s([r.property({type:Boolean,attribute:"scroll"})],exports.ZwcTabs.prototype,"scrollToTab",2);s([r.query("zwc-tabs-template")],exports.ZwcTabs.prototype,"collector",2);exports.ZwcTabs=s([r.customElement("zwc-tabs")],exports.ZwcTabs);
//# sourceMappingURL=zwc-tabs.cjs.map
