import { DyvixLabel } from '../../../src';
import { DYVIX_GLOBAL_ANIMATION, DYVIX_GLOBAL_THEME } from '../../../src';
export function LabelTest() {
  return (
    <>
      <DyvixLabel
        htmlFor="hh"
        animation={DYVIX_GLOBAL_ANIMATION.PULSE}
        theme={DYVIX_GLOBAL_THEME.NEON}
      >
        Enter your name
      </DyvixLabel>
      <DyvixLabel htmlFor="hh" animation={DYVIX_GLOBAL_ANIMATION.FLIP}>
        Enter your name
      </DyvixLabel>
    </>
  );
}
