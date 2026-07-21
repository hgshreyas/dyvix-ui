---
title: Dyvix Nav
---

# Dyvix Nav

DyvixNav is an animated navigation component that supports both themed and unstyled rendering modes. It supports two usage patterns:

- **Config-driven mode** for quickly generating navigation menus from structured data.
- **Composable mode** for building fully custom navigation layouts using sub-components.

## Attributes

- `brand`
  - : `{ label: string, href?: string, onClick?: Function }`. Defines the brand section displayed in config-driven mode.
- `items`
  - : `Array<{ label: string, href?: string, onClick?: Function }>` . Defines navigation links displayed in config-driven mode.
- `children`
  - : `ReactNode`. Used in composable mode to manually build the navigation using `DyvixNav.Brand`, `DyvixNav.Menu`, and `DyvixNav.Link`.
- `theme`
  - : `string`. Controls the visual appearance of the navigation. Currently supports `Singularity`.
- `animation`
  - : `string`. Controls the entrance animation of the navigation. Defaults to `fade`.

    Supported animations:

    - fade
    - bubble
    - zoom
    - unfold
    - glitch
    - pulse
    - aurora
    - drop
    - flip
    - glide
    - drift
    - float
    - swing

- `microanimation`
  - : `string`. Controls the animation applied to the brand and individual links in config-driven mode. If omitted, it automatically falls back to the value of `animation`.
- `className`
  - : `string`. Contains a custom class for your navigation, allowing more control for the developer.

## Sub-components

Used exclusively in composable mode:

- `DyvixNav.Brand`
  - : Represents the branding section of the navigation.

  Props:

  - `children` : `ReactNode`
  - `className` : `string`
  - `href` : `string`
  - `onClick` : `Function`
  - `style` : `React.CSSProperties`

- `DyvixNav.Menu`
  - : Wraps a group of navigation links.

  Props:

  - `children` : `ReactNode`
  - `className` : `string`

- `DyvixNav.Link`
  - : Represents a single navigation link.

  Props:

  - `children` : `ReactNode`
  - `className` : `string`
  - `href` : `string`
  - `onClick` : `Function`
  - `style` : `React.CSSProperties`

## Example

### Config-driven mode

```jsx
import { DyvixNav } from 'dyvix-ui';

function NavExample() {
  return (
    <DyvixNav
      brand={{ label: 'Dyvix UI', href: '/' }}
      items={[
        { label: 'Docs', href: '/docs' },
        { label: 'Components', href: '/components' }
      ]}
      animation="fade"
      microanimation="pulse"
      theme="Singularity"
    />
  );
}
```

### Composable mode

```jsx
import { DyvixNav } from 'dyvix-ui';

function NavExample() {
  return (
    <DyvixNav animation="bubble" theme="Singularity">
      <DyvixNav.Brand href="/">
        Dyvix UI
      </DyvixNav.Brand>

      <DyvixNav.Menu>
        <DyvixNav.Link href="/docs">
          Docs
        </DyvixNav.Link>

        <DyvixNav.Link href="/components">
          Components
        </DyvixNav.Link>
      </DyvixNav.Menu>
    </DyvixNav>
  );
}
```

## Notes

- `microanimation` is only used in config-driven mode.
- When `microanimation` is not provided, it automatically uses the same animation as `animation`.
- Config-driven mode automatically generates `Brand` and `Link` components from the provided configuration.
- Composable mode provides full control over the navigation structure.
