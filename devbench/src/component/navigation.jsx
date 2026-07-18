import { DyvixNav } from '../../../src';
import { DYVIX_GLOBAL_ANIMATION, DYVIX_GLOBAL_THEME } from 'dyvix-ui';

export function NavTest() {
  return (
    <>
      <DyvixNav animation="bubble" theme="Singularity">
        <DyvixNav.Brand href="/">GOO</DyvixNav.Brand>

        <DyvixNav.Menu>
          <DyvixNav.Link href="/docs">Docs</DyvixNav.Link>
          <DyvixNav.Link href="/components">Components</DyvixNav.Link>
          <DyvixNav.Link href="/themes">Themes</DyvixNav.Link>
          <DyvixNav.Link href="https://github.com/younisdev/dyvix-ui">
            GitHub
          </DyvixNav.Link>
        </DyvixNav.Menu>
      </DyvixNav>
      <DyvixNav
        brand={{ label: 'Dyvix UI', href: '/' }}
        items={[
          { label: 'Docs', href: '/docs' },
          { label: 'Components', href: '/components' }
        ]}
        animation="fade"
        theme={'Singularity'}
      />
    </>
  );
}
