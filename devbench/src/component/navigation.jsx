import { DyvixNav } from '../../../src';
import { DYVIX_GLOBAL_ANIMATION, DYVIX_GLOBAL_THEME } from 'dyvix-ui';

export function NavTest() {
  return (
    <>
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
