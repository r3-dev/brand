import badge from './badge.svg?raw'
import style from './style.css?raw'

export class Badge extends HTMLElement {
  constructor() {
    super()

    this.attachShadow({ mode: 'open' })
    this.shadowRoot!.innerHTML = `
      <style>${style}</style>
      <a target="_blank">${badge}</a>
    `
  }

  connectedCallback(): void {
    if (!this.isEnableBadge()) return

    const link = this.shadowRoot!.querySelector('a')!
    link.href = this.getAttribute('href') ?? '#'
    link.classList.add('visible')
  }

  private isEnableBadge(): boolean {
    const params = new URLSearchParams(location.search)
    const keyAttribute = this.getAttribute('key') ?? 'utm_source'
    const valueAttribute = this.getAttribute('value') ?? 'upwork'
    const key = params.get(keyAttribute)

    if (!key || !valueAttribute) {
      return false
    }

    return key === valueAttribute
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'r3-badge': Badge
  }
}

customElements.define('r3-badge', Badge)
