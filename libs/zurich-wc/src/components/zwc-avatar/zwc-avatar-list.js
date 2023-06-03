import { property as c, customElement as m } from "lit/decorators.js";
import { css as v, LitElement as f, html as p } from "lit";
import "./zwc-avatar.js";
var d = Object.defineProperty, g = Object.getOwnPropertyDescriptor, i = (a, s, l, e) => {
  for (var t = e > 1 ? void 0 : e ? g(s, l) : s, o = a.length - 1, n; o >= 0; o--)
    (n = a[o]) && (t = (e ? n(s, l, t) : n(t)) || t);
  return e && t && d(s, l, t), t;
};
let r = class extends f {
  constructor() {
    super(...arguments), this.backgroundColor = "", this.size = "md", this.avatars = [];
  }
  render() {
    return p`
      <div class="avatar-list-${this.size}">
        ${this.avatars.length > 0 ? this.avatars.map(
      (a) => p`<zwc-avatar
                  size="${this.size}"
                  background-color="${a.backgroundColor}"
                >
                  ${a.text}
                </zwc-avatar>`
    ) : p`<slot></slot>`}
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
i([
  c({ type: String, attribute: "background-color", reflect: !0 })
], r.prototype, "backgroundColor", 2);
i([
  c({ type: String })
], r.prototype, "size", 2);
i([
  c({ type: Array })
], r.prototype, "avatars", 2);
r = i([
  m("zwc-avatar-list")
], r);
export {
  r as ZwcAvatarList
};
//# sourceMappingURL=zwc-avatar-list.js.map
