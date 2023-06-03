import { customElement as p } from "../../../../../node_modules/@lit/reactive-element/decorators/custom-element.js";
import { property as o } from "../../../../../node_modules/@lit/reactive-element/decorators/property.js";
import "../../../../../node_modules/@lit/reactive-element/decorators/query-assigned-elements.js";
import "../../../../../node_modules/@lit/reactive-element/reactive-element.js";
import { html as v } from "../../../../../node_modules/lit-html/lit-html.js";
import { LitElement as m } from "../../../../../node_modules/lit-element/lit-element.js";
import { classMap as f } from "../../../../../node_modules/lit-html/directives/class-map.js";
import "./zwc-avatar.js";
import { css as u } from "../../../../../node_modules/@lit/reactive-element/css-tag.js";
var h = Object.defineProperty, y = Object.getOwnPropertyDescriptor, a = (e, i, n, s) => {
  for (var r = s > 1 ? void 0 : s ? y(i, n) : i, l = e.length - 1, c; l >= 0; l--)
    (c = e[l]) && (r = (s ? c(i, n, r) : c(r)) || r);
  return s && r && h(i, n, r), r;
};
let t = class extends m {
  constructor() {
    super(...arguments), this.backgroundColor = "", this.color = "", this.title = "", this.subtitle = "", this.size = "sm", this.outline = !1, this.orientation = "horizontal";
  }
  render() {
    const e = {
      "avatar-vertical": this.orientation === "vertical"
    };
    return v`
      <div class="avatar-info ${f(e)}">
        <zwc-avatar
          size=${this.size}
          background-color="${this.backgroundColor}"
          color="${this.color}"
          ?outline="${this.outline}"
        >
          <slot name="icon"></slot>
          <slot name="image"></slot>
          <slot></slot>
        </zwc-avatar>
        <div class="avatar-content">
          <span class="avatar-title">${this.title}</span>
          <span class="avatar-subtitle">${this.subtitle}</span>
        </div>
      </div>
    `;
  }
};
t.styles = [
  u`
      :host {
        height: fit-content;
        width: fit-content;
        display: block;
      }

      .avatar-info {
        position: relative;
        cursor: pointer;
        display: inline-flex;
        text-decoration: none;
      }

      .avatar-info:hover .avatar-title {
        color: var(--c-zurichblue);
      }

      .avatar-vertical {
        flex-direction: column;
        text-align: center;
        align-items: center;
      }

      .avatar-vertical zwc-avatar {
        margin-bottom: var(--spc-2);
      }

      .avatar-vertical .avatar-basic {
        margin-bottom: var(--spc-2);
      }

      .avatar-vertical .avatar-content {
        margin-left: 0;
      }

      .avatar-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: var(--spc-3);
      }

      .avatar-title {
        color: var(--c-zurichblue);
        font-size: var(--font-size-base-sm);
        line-height: 19px;
        font-family: var(--f-sans-regular);
      }

      .avatar-subtitle {
        color: var(--c-grey-07);
        font-size: 12px;
        font-family: var(--f-sans-medium);
      }

      .avatar-info .avatar-basic {
        background-color: var(--c-zurichblue);
        color: white;
      }

      @media only screen and (max-width: 600px) {
        .avatar-title {
          font-size: var(--font-size-root);
        }
      }
    `
];
a([
  o({ type: String, attribute: "background-color", reflect: !0 })
], t.prototype, "backgroundColor", 2);
a([
  o({ type: String })
], t.prototype, "color", 2);
a([
  o({ type: String })
], t.prototype, "title", 2);
a([
  o({ type: String })
], t.prototype, "subtitle", 2);
a([
  o({ type: String })
], t.prototype, "size", 2);
a([
  o({ type: Boolean })
], t.prototype, "outline", 2);
a([
  o({ type: String })
], t.prototype, "orientation", 2);
t = a([
  p("zwc-avatar-info")
], t);
export {
  t as ZwcAvatarInfo
};
//# sourceMappingURL=zwc-avatar-info.js.map
