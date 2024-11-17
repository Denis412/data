/* eslint-disable @typescript-eslint/no-explicit-any */

import { formatDischargeNumberString } from '@shared/helpers';

export default function useFormValidation() {
  function required<T>(value: T): string | boolean {
    const errorMessage = 'Поле обязательно для заполнения';

    if (typeof value === 'string') {
      return !!value.trim() || errorMessage;
    }

    if (typeof value === 'number' && value === 0) {
      return true;
    }

    if (value && typeof value === 'object') {
      if (Array.isArray(value)) {
        return !!value.length || errorMessage;
      }

      return !!(value as any).value || errorMessage;
    }

    return !!value || errorMessage;
  }

  function numberLessThan<T extends string | number | undefined>(
    valueFirst: T
  ) {
    const firstNumber =
      typeof valueFirst === 'string'
        ? parseFloat(valueFirst.replaceAll(' ', ''))
        : valueFirst;

    return function (valueSecond: T) {
      const secondNumber =
        typeof valueSecond === 'string'
          ? parseFloat(valueSecond.replaceAll(' ', ''))
          : valueSecond;

      if (
        (!firstNumber && firstNumber !== 0) ||
        (!secondNumber && secondNumber !== 0)
      ) {
        return true;
      }

      return (
        (secondNumber as number) < (firstNumber as number) ||
        `Укажите значение меньше, чем ${formatDischargeNumberString(
          `${firstNumber}`
        )}`
      );
    };
  }

  function numberMoreThan<T extends string | number | undefined>(
    valueFirst: T
  ) {
    const firstNumber =
      typeof valueFirst === 'string'
        ? parseFloat(valueFirst.replaceAll(' ', ''))
        : valueFirst;

    return function (valueSecond: T) {
      const secondNumber =
        typeof valueSecond === 'string'
          ? parseFloat(valueSecond.replaceAll(' ', ''))
          : valueSecond;

      if (
        (!firstNumber && firstNumber !== 0) ||
        (!secondNumber && secondNumber !== 0)
      ) {
        return true;
      }

      return (
        (secondNumber as number) > (firstNumber as number) ||
        `Укажите значение больше, чем ${formatDischargeNumberString(
          `${firstNumber}`
        )}`
      );
    };
  }

  function validDate<T extends string | number | undefined>(value: T) {
    const errorMessage = 'Неверный формат даты';
    if (typeof value !== 'string' || !value.trim()) return true;

    const regex = /^\d{2}\.\d{2}\.\d{4}$/;
    if (!regex.test(value)) {
      return errorMessage;
    }

    const [day, month, year] = value.split('.').map(Number);

    const date = new Date(year, month - 1, day);
    return (
      (date.getFullYear() === year &&
        date.getMonth() === month - 1 &&
        date.getDate() === day) ||
      errorMessage
    );
  }

  function validTime<T extends string | number | undefined>(value: T) {
    const errorMessage = 'Неверный формат времени';
    if (typeof value !== 'string' || !value.trim()) return true;

    const timeRegex = /^\d{2}:\d{2}$/;

    if (!timeRegex.test(value)) {
      return errorMessage;
    }

    const [hours, minutes] = value.split(':').map(Number);

    if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
      return errorMessage;
    }

    return true;
  }

  return {
    required,
    numberLessThan,
    numberMoreThan,
    validDate,
    validTime,
  };
}
