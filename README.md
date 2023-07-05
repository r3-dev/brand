# R3 dev brand

<p align="left">
  <a href="https://www.upwork.com/o/companies/~01e5f1563365e3c1b5/">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://r3-dev.github.io/brand/badge-light.svg">
      <img src="https://r3-dev.github.io/brand/badge-dark.svg" />
    </picture>
  </a>

  <a href="https://www.npmjs.com/package/@r3-dev/badge">
    <img alt="npm" src="https://img.shields.io/npm/v/@r3-dev/badge">
  </a>

  <a href="https://github.com/r3-dev/brand/actions">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/github/actions/workflow/status/r3-dev/brand/gh-pages.yaml?branch=master">
  </a>
</p>

## Installation

```
npm install @r3-dev/badge
```

```
yarn add @r3-dev/badge
```

```
pnpm add @r3-dev/badge
```

## Usage in React/Next.js

[![Edit @r3-dev/badge](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/r3-dev-badge-z6f766?fontsize=14&hidenavigation=1&theme=dark)

```tsx
// components/badge.tsx
import '@r3-dev/badge'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'r3-badge': React.DetailedHTMLProps<
        React.AnchorHTMLAttributes<HTMLAnchorElement>,
        HTMLAnchorElement
      >
    }
  }
}

export default function Badge() {
  return (
    <r3-badge
      href="https://www.upwork.com/agencies/~01e5f1563365e3c1b5/"
      style={{ position: 'fixed', top: '1rem', right: '1rem' }}
    />
  )
}

// _app.tsx
import dynamic from 'next/dynamic'
import type { AppProps } from 'next/app'

const Badge = dynamic(() => import('../components/badge'), {
  ssr: false
})

export default function App({
  Component,
  pageProps: { ...pageProps }
}: AppProps) {
  return (
    <>
      <Badge />
      <Component {...pageProps} />
    </>
  )
}
```

# CDN

```html
<!DOCTYPE html>
<html>
  <head>
    <!-- import badge from CDN -->
    <script src="https://cdn.jsdelivr.net/npm/@r3-dev/badge"></script>
  </head>
  <body>
    <!-- render badge -->
    <r3-badge
      href="https://www.upwork.com/agencies/~01e5f1563365e3c1b5/"
      style="position: fixed; top: 1rem; right: 1rem;"
    ></r3-badge>
  </body>
</html>
```

## Overriding styles

```css
r3-badge {
  /* default colors */
  /* --bg-badge: #000; */
  --text-badge: #fff;
  --bg-logo: #00a621;
  --text-logo: #fff;

  /* override */
  --bg-badge: darkblue;

  /* light shadow */
  filter: drop-shadow(0px 0px 4px rgba(255, 255, 255, 0.5));

  /* dark shadow */
  filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.5));
}

/* dark mode */
@media (prefers-color-scheme: dark) {
  r3-badge {
    --bg-badge: #fff;
    --text-badge: #000;
  }
}

/* light mode */
@media (prefers-color-scheme: light) {
  r3-badge {
    --bg-badge: #000;
    --text-badge: #fff;
  }
}
```

## Markdown

![Dark Badge](https://r3-dev.github.io/brand/badge-dark.svg)
![Light Badge](https://r3-dev.github.io/brand/badge-light.svg)

```markdown
<a href="https://www.upwork.com/o/companies/~01e5f1563365e3c1b5/">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://r3-dev.github.io/brand/badge-light.svg">
    <img src="https://r3-dev.github.io/brand/badge-dark.svg" />
  </picture>
</a>
```