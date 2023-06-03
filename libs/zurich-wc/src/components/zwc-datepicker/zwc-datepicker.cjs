"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const t=require("lit/decorators.js"),l=require("lit"),d=require("lit/directives/class-map.js"),p=require("vanillajs-datepicker"),h=require("../base/base.cjs");require("../base/template.cjs");var u=Object.defineProperty,b=Object.getOwnPropertyDescriptor,a=(e,i,r,o)=>{for(var s=o>1?void 0:o?b(i,r):i,c=e.length-1,n;c>=0;c--)(n=e[c])&&(s=(o?n(i,r,s):n(s))||s);return o&&s&&u(i,r,s),s};exports.ZwcDatepicker=class extends h.Base{constructor(){super(...arguments),this.floatLabel=!1,this.hasError=!1,this.disabled=!1,this.shape=!1,this.placeholder="",this.dateFormat="dd/mm/yyyy",this.dataTodayHighlight=!1,this.dataLanguage="en",this.locales=null,this.dataAutohide=!1,this.dataShowCalendarWeeks=!1,this.datepickerOptions={},this.labelText="Label Text",this.isNotEmpty=!1,this.isActive=!1,this.datepickerInstance=null}get options(){return{autohide:this.dataAutohide,format:this.dateFormat,todayHighlight:this.dataTodayHighlight,orientation:"bottom left",language:this.dataLanguage,...this.datepickerOptions}}render(){const e={textfield:!0,disabled:this.disabled,"textfield-datepicker":!0,"textfield--float-label":this.floatLabel,"has-error":this.hasError,"datepicker-active":this.isActive,"is-not-empty":this.isNotEmpty||this.isActive};return l.html` <div class="${d.classMap(e)}">
      ${this.shape?l.html` <div class="datepicker-wrapper">
            ${this.renderInputText()}
            <span class="icon icon--communication-calendar-end_outline"></span>
          </div>`:l.html` ${this.renderInputText()}
            <span
              class="icon icon--communication-calendar-end_outline"
            ></span>`}
      ${this.renderLabel()} ${this.renderHelper()}
    </div>`}firstUpdated(){this.inputField&&(this.locales&&Object.assign(p.Datepicker.locales,...this.locales),this.datepickerInstance=new p.Datepicker(this.inputField,this.options),this.inputField.addEventListener("show",()=>this.isActive=!0),this.inputField.addEventListener("hide",()=>this.isActive=!1),this.setRoleAttr(this.datepickerInstance,"button"))}setRoleAttr(e,i){const r=e.picker.element.querySelectorAll(".datepicker-cell");Array.from(r).forEach(o=>o.setAttribute("role",i))}willUpdate(e){var i,r;e.has("dataLanguage")&&e.get("dataLanguage")&&(Object.keys(p.Datepicker.locales).includes(this.dataLanguage)?(i=this.datepickerInstance)==null||i.setOptions({language:this.dataLanguage}):console.error("You are trying to set language that is not available in your locales %o",(r=p.Datepicker)==null?void 0:r.locales))}renderInputText(){const e={"textfield-control":!0,"is-not-empty":this.isNotEmpty};return l.html` <input
      type="text"
      id="datepicker-calendar"
      name="date-01"
      class="${d.classMap(e)}"
      value=""
      role="combobox"
      inputmode="none"
      ?disabled="${this.disabled}"
      .placeholder="${this.placeholder}"
      autocomplete="off"
      aria-label="Date:"
      aria-expanded="false"
      aria-haspopup="dialog"
      aria-controls="cb-dialog-1"
      aria-describedby="datepicker-calendar"
      @changeDate="${this.emitChangeDate}"
      @changeMonth="${this.emitChangeMonth}"
      @changeView="${this.emitChangeView}"
      @changeYear="${this.emitChangeYear}"
      @hide="${this.emitHide}"
      @show="${this.emitShow}"
    />`}disconnectedCallback(){var e;(e=this.datepickerInstance)==null||e.destroy(),super.disconnectedCallback()}emitShow(e){this.dispatchEvent(new CustomEvent("show",{composed:!0,cancelable:!0,bubbles:!0,detail:e.detail}))}emitHide(e){this.dispatchEvent(new CustomEvent("hide",{composed:!0,cancelable:!0,bubbles:!0,detail:e.detail}))}emitChangeYear(e){this.dispatchEvent(new CustomEvent("changeYear",{composed:!0,cancelable:!0,bubbles:!0,detail:e.detail}))}emitChangeView(e){this.dispatchEvent(new CustomEvent("changeView",{composed:!0,cancelable:!0,bubbles:!0,detail:e.detail}))}emitChangeMonth(e){this.dispatchEvent(new CustomEvent("changeMonth",{composed:!0,cancelable:!0,bubbles:!0,detail:e.detail}))}emitChangeDate(e){this.isNotEmpty=this.setInputBoolean(e),this.dispatchEvent(new CustomEvent("changeDate",{composed:!0,cancelable:!0,bubbles:!0,detail:e.detail}))}renderLabel(){return l.html` <label
      class="textfield-label"
      for="datepicker-calendar"
      id="date-format-description"
    >
      ${this.labelText}
    </label>`}renderHelper(){return l.html`<span class="textfield-helper">${this.dateFormat}</span>`}setInputBoolean(e){var i;return((i=e.detail)==null?void 0:i.date)!==void 0}};a([t.property({type:Boolean,attribute:"float-label"})],exports.ZwcDatepicker.prototype,"floatLabel",2);a([t.property({type:Boolean,attribute:"has-error"})],exports.ZwcDatepicker.prototype,"hasError",2);a([t.property({type:Boolean,attribute:"disabled"})],exports.ZwcDatepicker.prototype,"disabled",2);a([t.property({type:Boolean})],exports.ZwcDatepicker.prototype,"shape",2);a([t.property({type:String})],exports.ZwcDatepicker.prototype,"placeholder",2);a([t.property({type:String,attribute:"format"})],exports.ZwcDatepicker.prototype,"dateFormat",2);a([t.property({type:Boolean,attribute:"today-highlight"})],exports.ZwcDatepicker.prototype,"dataTodayHighlight",2);a([t.property({type:String,attribute:"language"})],exports.ZwcDatepicker.prototype,"dataLanguage",2);a([t.property({type:Object})],exports.ZwcDatepicker.prototype,"locales",2);a([t.property({type:Boolean,attribute:"auto-hide"})],exports.ZwcDatepicker.prototype,"dataAutohide",2);a([t.property({type:Boolean,attribute:"calendar-weeks"})],exports.ZwcDatepicker.prototype,"dataShowCalendarWeeks",2);a([t.property({type:Object,attribute:"datepicker-options"})],exports.ZwcDatepicker.prototype,"datepickerOptions",2);a([t.property({type:String,attribute:"label"})],exports.ZwcDatepicker.prototype,"labelText",2);a([t.query("input")],exports.ZwcDatepicker.prototype,"inputField",2);a([t.state()],exports.ZwcDatepicker.prototype,"isNotEmpty",2);a([t.state()],exports.ZwcDatepicker.prototype,"isActive",2);exports.ZwcDatepicker=a([t.customElement("zwc-datepicker")],exports.ZwcDatepicker);
//# sourceMappingURL=zwc-datepicker.cjs.map
