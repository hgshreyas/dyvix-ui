import {
  DyvixSelect,
  DYVIX_GLOBAL_ANIMATION,
  DYVIX_GLOBAL_THEME
} from 'dyvix-ui';

export function SelectTest() {
  return (
    <DyvixSelect
      animation={DYVIX_GLOBAL_ANIMATION.GLITCH}
      theme="Blade"  // Using your new theme
      placeholder={'number'}
      // background and dropdownBackground removed to let the theme handle styles
      className="ex-select"
      type="select"
      elements={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
      onChange={(data) => console.log(data)}
    />
  );
}
