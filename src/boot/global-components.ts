import { boot } from 'quasar/wrappers';

import {
  UDialog,
  UInput,
  USelect,
  UToggle,
  URadio,
  UCheckbox,
  UIcon,
  UButton,
} from '@shared';

export default boot(({ app }) => {
  app.component('UDialog', UDialog);
  app.component('UInput', UInput);
  app.component('USelect', USelect);
  app.component('UToggle', UToggle);
  app.component('URadio', URadio);
  app.component('UCheckbox', UCheckbox);
  app.component('UIcon', UIcon);
  app.component('UButton', UButton);
});
