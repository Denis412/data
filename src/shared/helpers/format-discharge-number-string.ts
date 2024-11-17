export default function formatDischargeNumberString(
  value: string | number | null
) {
  if (value === '-') return value;
  if (typeof value !== 'string' || !/^-?\d+(\.\d+)?$/.test(value)) {
    return '';
  }

  const isNegative = value.startsWith('-');
  const positiveNumberString = isNegative ? value.slice(1) : value;

  const [integerPart, decimalPart] = positiveNumberString.split('.');

  const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  const formattedNumber = decimalPart
    ? `${formattedInteger}.${decimalPart}`
    : formattedInteger;

  return isNegative ? `-${formattedNumber}` : formattedNumber;
}
