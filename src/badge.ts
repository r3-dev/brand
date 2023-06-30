import logo from './logo.svg?raw'
import style from './style.css?raw'

export class Badge extends HTMLElement {
  #shadowRoot: ShadowRoot

  constructor() {
    super()

    this.#shadowRoot = this.attachShadow({ mode: 'open' })
    this.#shadowRoot.innerHTML = `
      <style>${style}</style>
      <a href="#" target="_blank">${logo}</a>
    `
  }

  connectedCallback(): void {
    const params = new URLSearchParams(location.search)
    const utmSource = params.get('utm_source')
    if (!utmSource || utmSource !== 'upwork') return

    const link = this.#shadowRoot.querySelector('a')!
    link.classList.add('visible')

    const href = this.getAttribute('href')
    if (href) {
      link.href = href
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'r3-badge': Badge
  }
}

customElements.define('r3-badge', Badge)
