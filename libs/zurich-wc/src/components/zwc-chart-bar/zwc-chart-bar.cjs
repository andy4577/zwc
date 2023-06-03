"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const n=require("lit/decorators.js"),o=require("../../../../../node_modules/chart.js/dist/chart.cjs"),f=require("../zwc-chart-base/zwc-chart-base.cjs");require("../../utils/pictograms.cjs");const g=require("../../utils/validations.cjs");var y=Object.defineProperty,m=Object.getOwnPropertyDescriptor,d=(s,t,a,r)=>{for(var e=r>1?void 0:r?m(t,a):t,l=s.length-1,i;l>=0;l--)(i=s[l])&&(e=(r?i(t,a,e):i(e))||e);return r&&e&&y(t,a,e),e};exports.ZwcChartBar=class extends f.ZwcBaseChart{constructor(){super(...arguments),this.componentsToRegister=[o.Colors,o.BarController,o.BarElement,o.CategoryScale,o.LinearScale,o.Legend,o.Tooltip,o.Title,o.SubTitle],this.type="bar",this.defaultOptions={animation:{duration:2e3},plugins:{legendMargin:{margin:20},legend:{position:"top",align:"start",labels:{usePointStyle:!0}},tooltip:{mode:"point",intersect:!1,backgroundColor:"#edeef0",titleColor:"black",titleAlign:"center",bodyColor:"black",bodyAlign:"center",footerColor:"black",footerAlign:"center",position:"nearest",xAlign:"center",yAlign:"bottom"}},layout:{padding:{top:20,left:20,right:20,bottom:20}},elements:{bar:{backgroundColor:["#0f67c0"],borderRadius:Number.MAX_VALUE,borderSkipped:!1}},scales:{x:{ticks:{display:!0},border:{color:"#929a9c",width:1},grid:{display:!1}},y:{ticks:{display:!0},grid:{color:"#f7f8f7",drawTicks:!1,lineWidth:2},border:{display:!1}}}},this.plugins=[],this.options={},this.data={labels:[2010,2011,2012],datasets:[{label:"Sample chart",data:[15,20,null],maxBarThickness:32}]}}updated(s){var t,a,r;if(s.has("data")&&s.get("data")&&this.chart){const{labels:e,dataSetsDiff:l}=this.handleDataChange(this.chart,this.data);e&&((a=(t=this.chart)==null?void 0:t.data.labels)==null||a.push(...e)),(r=this.chart)==null||r.data.datasets.forEach((i,c)=>{l[c]&&i.data.push(...l[c])}),this.chart.update("normal")}}handleDataChange(s,t){var i,c,h,u;const a=(c=(i=s.data.labels)==null?void 0:i.length)!=null?c:0,r=(h=t.labels)!=null&&h.length?t.labels.length-a:0-a;let e=[],l=[];if(r!==0)if(r>0){e=t.labels?t.labels.slice(a!=null?a:0):[];const p=e.length;l=t.datasets.map(b=>b.data.slice(-p))}else r<0&&((u=s.data.labels)==null||u.pop(),s.data.datasets.forEach(p=>p.data.pop()));return{labels:e,dataSetsDiff:l,direction:r}}};d([n.property()],exports.ZwcChartBar.prototype,"plugins",2);d([n.property({type:Object})],exports.ZwcChartBar.prototype,"options",2);d([n.property({type:Object,hasChanged:(s,t)=>!g.isSameData(s,t)})],exports.ZwcChartBar.prototype,"data",2);exports.ZwcChartBar=d([n.customElement("zwc-chart-bar")],exports.ZwcChartBar);
//# sourceMappingURL=zwc-chart-bar.cjs.map
