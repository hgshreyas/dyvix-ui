import { DyvixFile } from '../../../src';
import { DYVIX_GLOBAL_ANIMATION, DYVIX_GLOBAL_THEME } from '../../../src';
export function FileTest() {
  return (
    <>
      <DyvixFile
        onUpload={(data) => console.log(data)}
        multiple={true}
        accept={'.jpg, .jpeg, .png'}
        theme={DYVIX_GLOBAL_THEME.FOREST}
      />
    </>
  );
}
