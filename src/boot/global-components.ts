import { boot } from 'quasar/wrappers';

export default boot(({ app }) => {
  const components = import.meta.globEager('@shared/components/**/*.vue');

  for (const path in components) {
    const componentName = path.split('/').pop()?.replace('.vue', '');
    if (!componentName) continue;

    app.component(componentName, components[path].default);
  }
});
