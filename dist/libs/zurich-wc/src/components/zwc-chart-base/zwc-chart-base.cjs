"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const o=require("../../../../../node_modules/@lit/reactive-element/decorators/custom-element.cjs"),d=require("../../../../../node_modules/@lit/reactive-element/decorators/state.cjs");require("../../../../../node_modules/@lit/reactive-element/decorators/query-assigned-elements.cjs");const c=require("../../../../../node_modules/lit-html/directives/ref.cjs");require("../../../../../node_modules/@lit/reactive-element/reactive-element.cjs");const u=require("../../../../../node_modules/lit-html/lit-html.cjs");require("../../../../../node_modules/lit-element/lit-element.cjs");const h=require("../base/base.cjs");require("../base/template.cjs");const m=require("../../../../../node_modules/chart.js/dist/chart.cjs"),p=require("../../plugins/legendMargin.cjs");require("../../utils/pictograms.cjs");const g=require("../../utils/deepMerge.cjs");var v=Object.defineProperty,f=Object.getOwnPropertyDescriptor,l=(e,t,i,r)=>{for(var s=r>1?void 0:r?f(t,i):t,n=e.length-1,a;n>=0;n--)(a=e[n])&&(s=(r?a(t,i,s):a(s))||s);return r&&s&&v(t,i,s),s};exports.ZwcBaseChart=class extends h.Base{constructor(){super(...arguments),this.chartConstructor=m.Chart,this.plugins=[],this.canvasRef=c.createRef(),this.defaultPlugins=[p.legendMargin]}get mergedOptions(){return g.deepMerge(this.defaultOptions,this.options)}firstUpdated(){var e;if(!this.chart){const t=(e=this.canvasRef.value)==null?void 0:e.getContext("2d");t&&(this.chartConstructor.register(...this.componentsToRegister),this.chart=new this.chartConstructor(t,{type:this.type,options:this.mergedOptions,data:this.data,plugins:[...this.defaultPlugins,...this.plugins]}))}}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",this.handleResize.bind(this))}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this.handleResize)}handleResize(){var e;(e=this.chart)==null||e.resize()}render(){return u.html`
      <style>
        .chart-size {
          position: relative;
        }
        canvas {
          width: 400px;
          height: 400px;
        }
      </style>
      <div class="chart-size">
        <canvas ${c.ref(this.canvasRef)}></canvas>
      </div>
    `}};l([d.state()],exports.ZwcBaseChart.prototype,"mergedOptions",1);exports.ZwcBaseChart=l([o.customElement("zwc-base-chart")],exports.ZwcBaseChart);
//# sourceMappingURL=zwc-chart-base.cjs.map
