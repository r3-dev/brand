export class R3Badge extends HTMLElement {
  #shadowRoot: ShadowRoot

  constructor() {
    super()

    this.#shadowRoot = this.attachShadow({ mode: 'open' })
    this.#shadowRoot.innerHTML = `
      <style>
        :host {
          font-family: "Open Sans", -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji;
          transition: all 0.2s ease-in-out;
        }

        :host(:hover) {
          transform: scale(1.1);
        }

        a {
          text-decoration: none;
        }

        a:not(.visible) {
          display: none;
        }

        span {
          margin-left: 6px;
          margin-right: 40px;
          display: inline-block;
          font-weight: 600;
          font-size: smaller;
        }

        .visible {
          color: #fff;
          background: #000;
          border-radius: 4px;
          height: 25px;
          display: inline-block;
        }

        svg {
          position: absolute;
          top: -27%;
          right: -2%;
        }
      </style>
      <a href="https://example.com" target="_blank">
        <span>Made by</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="40" fill="none">
          <path fill="#00A621" d="M0 13.695a8.889 8.889 0 0 1 5.323-8.142l9.11-3.99a8.89 8.89 0 0 1 7.133 0l9.111 3.99A8.889 8.889 0 0 1 36 13.695v11.824a8.889 8.889 0 0 1-5 7.993l-9.11 4.433a8.889 8.889 0 0 1-7.78 0L5 33.512a8.889 8.889 0 0 1-5-7.993V13.695Z"/>
          <path fill="#fff" d="M10.682 22.02a.455.455 0 0 0-.682.394v4.307c0 .162.087.312.227.394l2.274 1.313a.455.455 0 0 0 .683-.394v-4.307a.455.455 0 0 0-.228-.394l-2.274-1.313ZM18.4 9.424c-.195.04-.403.076-.577.176l-7.596 4.386a.455.455 0 0 0-.227.393v3.519c0 .163.087.313.227.394l2.274 1.313a.455.455 0 0 0 .683-.394v-3.099c0-.162.086-.312.227-.393l5.594-3.23a.418.418 0 0 1 .167-.056 1.585 1.585 0 0 1 1.516.765c.042.068.078.14.109.215.02.048.027.1.027.151v4.65a.455.455 0 0 1-.227.393l-4.23 2.442a.455.455 0 0 0 0 .788l5.867 3.387a.454.454 0 0 1 .228.394v2.94c0 .163.086.314.227.395l2.092 1.208a.455.455 0 0 0 .683-.394v-6.092a.455.455 0 0 0-.228-.394l-2.501-1.444a.455.455 0 0 1 0-.788l1.046-.604a.455.455 0 0 0 .227-.394v-5.988a4.698 4.698 0 0 0-.596-2.333 4.706 4.706 0 0 0-2.588-2.151 4.722 4.722 0 0 0-2.424-.155Z"/>
        </svg>
      </a>
    `
  }

  connectedCallback() {
    const params = new URLSearchParams(location.search)
    const utmSource = params.get('utm_source')
    if (!utmSource || utmSource !== 'upwork') return

    const link = this.#shadowRoot.querySelector('a')!
    link.classList.add('visible')
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'r3-badge': R3Badge
  }
}

customElements.define('r3-badge', R3Badge)
