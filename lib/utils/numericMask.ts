import { addThousandSeparater, stringTruncate } from './maskUtils';

export type NumberMask = {
  maxIntegers: number;
  maxDecimals: number;
  thousandsSeparator: string;
  decimalSeparator: string;
  allowLeadingZeroes?: boolean;
}

const numericMask = (value: string, caretPosition: number, mask: NumberMask) => {
  const { maxIntegers, maxDecimals, thousandsSeparator, decimalSeparator, allowLeadingZeroes = false } = mask;
  if (value === '') return { newValue: value, caretPosition };
  const lastChar = value[value.length - 1];
  if ([thousandsSeparator, decimalSeparator].includes(lastChar)) {
    const sequence = value.slice(0, -1);
    if (sequence.length === 0) return {
      caretPosition: maxDecimals > 0 ? 2 : 0,
      newValue: maxDecimals > 0 ? `0${decimalSeparator}` : '',
      };
    if (sequence.includes(decimalSeparator)) return { newValue: sequence, caretPosition };
    return {
      newValue: `${sequence}${maxDecimals > 0 ? decimalSeparator : ''}`,
      caretPosition: maxDecimals > 0 ? caretPosition + 2 : caretPosition,
    };
  }
  const onlyNumbers = value.replace(/[^0-9,]/g, '');
  const [integerPart, ...decimalPart] = onlyNumbers.split(decimalSeparator);

  const integer = stringTruncate(integerPart || '0', maxIntegers);
  const integerApplyLeadingZeroes = allowLeadingZeroes ? integer : integer.replace(/^0+/, '');
  const decimal = stringTruncate(decimalPart.join(''), maxDecimals);
  const newValue = `${addThousandSeparater(integerApplyLeadingZeroes || '0', thousandsSeparator)}${decimal ? `${decimalSeparator}${decimal}` : ''}`;
  return {
    newValue,
    caretPosition: caretPosition + (newValue.length - value.length),
  };
};

export default numericMask;
