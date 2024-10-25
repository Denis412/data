import { boot } from 'quasar/wrappers';

import { UDialog, UInput, USelect } from '@shared';

export default boot(({ app }) => {
  app.component('UDialog', UDialog);
  app.component('UInput', UInput);
  app.component('USelect', USelect);
});
