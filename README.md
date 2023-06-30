# R3Dev Brand

![Npm Version](https://img.shields.io/npm/v/@r3-dev/brand)
![GitHub Workflow Status (with event)](https://img.shields.io/github/actions/workflow/status/crashmax-dev/r3dev-brand/npm-publish.yaml)


## Install

```
yarn install @r3-dev/brand
```

## Usage

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
      style={{ position: 'absolute', top: '1rem', right: '1rem' }}
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

@media (prefers-color-scheme: light) {
  r3-badge {
    --bg-badge: #fff;
    --text-badge: #000;
  }
}
```