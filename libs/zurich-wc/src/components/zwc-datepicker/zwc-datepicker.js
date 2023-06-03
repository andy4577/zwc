import { property as i, query as b, state as u, customElement as m } from "lit/decorators.js";
import { html as n } from "lit";
import { classMap as c } from "lit/directives/class-map.js";
import { Datepicker as d } from "vanillajs-datepicker";
import { Base as g } from "../base/base.js";
import "../base/template.js";
var y = Object.defineProperty, f = Object.getOwnPropertyDescriptor, a = (e, s, o, l) => {
  for (var r = l > 1 ? void 0 : l ? f(s, o) : s, p = e.length - 1, h; p >= 0; p--)
    (h = e[p]) && (r = (l ? h(s, o, r) : h(r)) || r);
  return l && r && y(s, o, r), r;
};
let t = class extends g {
  constructor() {
    super(...arguments), this.floatLabel = !1, this.hasError = !1, this.disabled = !1, this.shape = !1, this.placeholder = "", this.dateFormat = "dd/mm/yyyy", this.dataTodayHighlight = !1, this.dataLanguage = "en", this.locales = null, this.dataAutohide = !1, this.dataShowCalendarWeeks = !1, this.datepickerOptions = {}, this.labelText = "Label Text", this.isNotEmpty = !1, this.isActive = !1, this.datepickerInstance = null;
  }
  get options() {
    return {
      autohide: this.dataAutohide,
      format: this.dateFormat,
      todayHighlight: this.dataTodayHighlight,
      orientation: "bottom left",
      language: this.dataLanguage,
      ...this.datepickerOptions
    };
  }
  render() {
    const e = {
      textfield: !0,
      disabled: this.disabled,
      "textfield-datepicker": !0,
      "textfield--float-label": this.floatLabel,
      "has-error": this.hasError,
      "datepicker-active": this.isActive,
      "is-not-empty": this.isNotEmpty || this.isActive
    };
    return n` <div class="${c(e)}">
      ${this.shape ? n` <div class="datepicker-wrapper">
            ${this.renderInputText()}
            <span class="icon icon--communication-calendar-end_outline"></span>
          </div>` : n` ${this.renderInputText()}
            <span
              class="icon icon--communication-calendar-end_outline"
            ></span>`}
      ${this.renderLabel()} ${this.renderHelper()}
    </div>`;
  }
  firstUpdated() {
    this.inputField && (this.locales && Object.assign(d.locales, ...this.locales), this.datepickerInstance = new d(this.inputField, this.options), this.inputField.addEventListener("show", () => this.isActive = !0), this.inputField.addEventListener("hide", () => this.isActive = !1), this.setRoleAttr(this.datepickerInstance, "button"));
  }
  setRoleAttr(e, s) {
    const o = e.picker.element.querySelectorAll(".datepicker-cell");
    Array.from(o).forEach((l) => l.setAttribute("role", s));
  }
  willUpdate(e) {
    var s, o;
    e.has("dataLanguage") && e.get("dataLanguage") && (Object.keys(d.locales).includes(this.dataLanguage) ? (s = this.datepickerInstance) == null || s.setOptions({ language: this.dataLanguage }) : console.error(
      "You are trying to set language that is not available in your locales %o",
      (o = d) == null ? void 0 : o.locales
    ));
  }
  renderInputText() {
    const e = {
      "textfield-control": !0,
      "is-not-empty": this.isNotEmpty
    };
    return n` <input
      type="text"
      id="datepicker-calendar"
      name="date-01"
      class="${c(e)}"
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
    />`;
  }
  disconnectedCallback() {
    var e;
    (e = this.datepickerInstance) == null || e.destroy(), super.disconnectedCallback();
  }
  emitShow(e) {
    this.dispatchEvent(
      new CustomEvent("show", {
        composed: !0,
        cancelable: !0,
        bubbles: !0,
        detail: e.detail
      })
    );
  }
  emitHide(e) {
    this.dispatchEvent(
      new CustomEvent("hide", {
        composed: !0,
        cancelable: !0,
        bubbles: !0,
        detail: e.detail
      })
    );
  }
  emitChangeYear(e) {
    this.dispatchEvent(
      new CustomEvent("changeYear", {
        composed: !0,
        cancelable: !0,
        bubbles: !0,
        detail: e.detail
      })
    );
  }
  emitChangeView(e) {
    this.dispatchEvent(
      new CustomEvent("changeView", {
        composed: !0,
        cancelable: !0,
        bubbles: !0,
        detail: e.detail
      })
    );
  }
  emitChangeMonth(e) {
    this.dispatchEvent(
      new CustomEvent("changeMonth", {
        composed: !0,
        cancelable: !0,
        bubbles: !0,
        detail: e.detail
      })
    );
  }
  emitChangeDate(e) {
    this.isNotEmpty = this.setInputBoolean(e), this.dispatchEvent(
      new CustomEvent("changeDate", {
        composed: !0,
        cancelable: !0,
        bubbles: !0,
        detail: e.detail
      })
    );
  }
  renderLabel() {
    return n` <label
      class="textfield-label"
      for="datepicker-calendar"
      id="date-format-description"
    >
      ${this.labelText}
    </label>`;
  }
  renderHelper() {
    return n`<span class="textfield-helper">${this.dateFormat}</span>`;
  }
  setInputBoolean(e) {
    var s;
    return ((s = e.detail) == null ? void 0 : s.date) !== void 0;
  }
};
a([
  i({ type: Boolean, attribute: "float-label" })
], t.prototype, "floatLabel", 2);
a([
  i({ type: Boolean, attribute: "has-error" })
], t.prototype, "hasError", 2);
a([
  i({ type: Boolean, attribute: "disabled" })
], t.prototype, "disabled", 2);
a([
  i({ type: Boolean })
], t.prototype, "shape", 2);
a([
  i({ type: String })
], t.prototype, "placeholder", 2);
a([
  i({ type: String, attribute: "format" })
], t.prototype, "dateFormat", 2);
a([
  i({ type: Boolean, attribute: "today-highlight" })
], t.prototype, "dataTodayHighlight", 2);
a([
  i({ type: String, attribute: "language" })
], t.prototype, "dataLanguage", 2);
a([
  i({ type: Object })
], t.prototype, "locales", 2);
a([
  i({ type: Boolean, attribute: "auto-hide" })
], t.prototype, "dataAutohide", 2);
a([
  i({ type: Boolean, attribute: "calendar-weeks" })
], t.prototype, "dataShowCalendarWeeks", 2);
a([
  i({ type: Object, attribute: "datepicker-options" })
], t.prototype, "datepickerOptions", 2);
a([
  i({ type: String, attribute: "label" })
], t.prototype, "labelText", 2);
a([
  b("input")
], t.prototype, "inputField", 2);
a([
  u()
], t.prototype, "isNotEmpty", 2);
a([
  u()
], t.prototype, "isActive", 2);
t = a([
  m("zwc-datepicker")
], t);
export {
  t as ZwcDatepicker
};
//# sourceMappingURL=zwc-datepicker.js.map
