import { customElement as c } from "../../../../../node_modules/@lit/reactive-element/decorators/custom-element.js";
import { property as n } from "../../../../../node_modules/@lit/reactive-element/decorators/property.js";
import "../../../../../node_modules/@lit/reactive-element/decorators/query-assigned-elements.js";
import "../../../../../node_modules/@lit/reactive-element/reactive-element.js";
import { html as m } from "../../../../../node_modules/lit-html/lit-html.js";
import { LitElement as f } from "../../../../../node_modules/lit-element/lit-element.js";
import "./zwc-avatar.js";
import { css as v } from "../../../../../node_modules/@lit/reactive-element/css-tag.js";
var d = Object.defineProperty, g = Object.getOwnPropertyDescriptor, o = (a, s, e, i) => {
  for (var t = i > 1 ? void 0 : i ? g(s, e) : s, l = a.length - 1, p; l >= 0; l--)
    (p = a[l]) && (t = (i ? p(s, e, t) : p(t)) || t);
  return i && t && d(s, e, t), t;
};
let r = class extends f {
  constructor() {
    super(...arguments), this.backgroundColor = "", this.size = "md", this.avatars = [];
  }
  render() {
    return m`
      <div class="avatar-list-${this.size}">
        ${this.avatars.length > 0 ? this.avatars.map(
      (a) => m`<zwc-avatar
                  size="${this.size}"
                  background-color="${a.backgroundColor}"
                >
                  ${a.text}
                </zwc-avatar>`
    ) : m`<slot></slot>`}
      </div>
    `;
  }
};
r.styles = [
  v`
      .avatar-list-sm :not(:first-child) {
        margin-left: -10px;
      }
      .avatar-list-md :not(:first-child) {
        margin-left: -15px;
      }
      .avatar-list-lg :not(:first-child) {
        margin-left: -15px;
      }
      .avatar-list-sm ::slotted(:not(:first-child)) {
        margin-left: -10px;
      }
      .avatar-list-md ::slotted(:not(:first-child)) {
        margin-left: -15px;
      }
      .avatar-list-lg ::slotted(:not(:first-child)) {
        margin-left: -15px;
      }
    `
];
o([
  n({ type: String, attribute: "background-color", reflect: !0 })
], r.prototype, "backgroundColor", 2);
o([
  n({ type: String })
], r.prototype, "size", 2);
o([
  n({ type: Array })
], r.prototype, "avatars", 2);
r = o([
  c("zwc-avatar-list")
], r);
export {
  r as ZwcAvatarList
};
//# sourceMappingURL=zwc-avatar-list.js.map
