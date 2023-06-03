"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const o=require("lit/decorators.js"),c=require("lit/directives/ref.js"),l=require("lit"),d=require("../base/base.cjs");require("../base/template.cjs");const u=require("../../../../../node_modules/chart.js/dist/chart.cjs"),p=require("../../plugins/legendMargin.cjs");require("../../utils/pictograms.cjs");const g=require("../../utils/deepMerge.cjs");var v=Object.defineProperty,f=Object.getOwnPropertyDescriptor,h=(e,t,i,r)=>{for(var s=r>1?void 0:r?f(t,i):t,a=e.length-1,n;a>=0;a--)(n=e[a])&&(s=(r?n(t,i,s):n(s))||s);return r&&s&&v(t,i,s),s};exports.ZwcBaseChart=class extends d.Base{constructor(){super(...arguments),this.chartConstructor=u.Chart,this.plugins=[],this.canvasRef=c.createRef(),this.defaultPlugins=[p.legendMargin]}get mergedOptions(){return g.deepMerge(this.defaultOptions,this.options)}firstUpdated(){var e;if(!this.chart){const t=(e=this.canvasRef.value)==null?void 0:e.getContext("2d");t&&(this.chartConstructor.register(...this.componentsToRegister),this.chart=new this.chartConstructor(t,{type:this.type,options:this.mergedOptions,data:this.data,plugins:[...this.defaultPlugins,...this.plugins]}))}}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",this.handleResize.bind(this))}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this.handleResize)}handleResize(){var e;(e=this.chart)==null||e.resize()}render(){return l.html`
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
    `}};h([o.state()],exports.ZwcBaseChart.prototype,"mergedOptions",1);exports.ZwcBaseChart=h([o.customElement("zwc-base-chart")],exports.ZwcBaseChart);
//# sourceMappingURL=zwc-chart-base.cjs.map
