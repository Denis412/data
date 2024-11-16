import type { VueClasses } from '@shared/types';

export default function getVueClassesObj(
  classes: VueClasses
): Record<string, boolean> {
  function getClassesFromString(classes: string): Record<string, boolean> {
    return classes.split(' ').reduce((acc, cl) => {
      acc[cl.trim()] = true;
      return acc;
    }, {} as Record<string, boolean>);
  }

  if (typeof classes === 'string') {
    return getClassesFromString(classes);
  }

  if (Array.isArray(classes)) {
    return classes.reduce((acc: Record<string, boolean>, cl) => {
      if (typeof cl === 'string') {
        return { ...acc, ...getClassesFromString(cl) };
      }
      return { ...acc, ...cl };
    }, {} as Record<string, boolean>);
  }

  return classes;
}
