# R3Dev Brand

![Npm Version](https://img.shields.io/npm/v/@r3-dev/brand)
![GitHub Workflow Status (with event)](https://img.shields.io/github/actions/workflow/status/crashmax-dev/r3dev-brand/npm-publish.yaml)

## Install

```
npm install @r3-dev/brand
```

```
yarn add @r3-dev/brand
```

```
pnpm add @r3-dev/brand
```

## Usage

[![Edit @r3-dev/brand](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/r3-dev-brand-z6f766?fontsize=14&hidenavigation=1&theme=dark)

```tsx
import '@r3-dev/brand'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'r3-badge': React.DetailedHTMLProps<
        React.AnchorHTMLAttributes<HTMLAnchorElement>,
        HTMLAnchorElement
      >;
    }
  }
}

export function App() {
  return (
    <r3-badge
      href="https://example.com"
      style={{ position: 'fixed', top: '1rem', right: '1rem' }}
    />
  )
}
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