import { property as e, customElement as v } from "lit/decorators.js";
import { css as p, LitElement as f, html as u } from "lit";
import { classMap as m } from "lit/directives/class-map.js";
import "./zwc-avatar.js";
var h = Object.defineProperty, g = Object.getOwnPropertyDescriptor, a = (o, i, s, n) => {
  for (var r = n > 1 ? void 0 : n ? g(i, s) : i, l = o.length - 1, c; l >= 0; l--)
    (c = o[l]) && (r = (n ? c(i, s, r) : c(r)) || r);
  return n && r && h(i, s, r), r;
};
let t = class extends f {
  constructor() {
    super(...arguments), this.backgroundColor = "", this.color = "", this.title = "", this.subtitle = "", this.size = "sm", this.outline = !1, this.orientation = "horizontal";
  }
  render() {
    const o = {
      "avatar-vertical": this.orientation === "vertical"
    };
    return u`
      <div class="avatar-info ${m(o)}">
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
  p`
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
  e({ type: String, attribute: "background-color", reflect: !0 })
], t.prototype, "backgroundColor", 2);
a([
  e({ type: String })
], t.prototype, "color", 2);
a([
  e({ type: String })
], t.prototype, "title", 2);
a([
  e({ type: String })
], t.prototype, "subtitle", 2);
a([
  e({ type: String })
], t.prototype, "size", 2);
a([
  e({ type: Boolean })
], t.prototype, "outline", 2);
a([
  e({ type: String })
], t.prototype, "orientation", 2);
t = a([
  v("zwc-avatar-info")
], t);
export {
  t as ZwcAvatarInfo
};
//# sourceMappingURL=zwc-avatar-info.js.map
