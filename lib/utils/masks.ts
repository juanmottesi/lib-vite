type NumberMask = {
  maxIntegers: number;
  maxDecimals: number;
  thousandsSeparator: string;
  decimalSeparator: string;
  allowLeadingZeroes?: boolean;
}

const addThousandSeparater = (value: string, separator: string) => {
  if (separator === '') return value;
  return value.split('').reduceRight((acc, char, index, array) => {
    if ((array.length - 1 - index) % 3 === 0) {
      return `${char}${separator}${acc}`;
    }
    return `${char}${acc}`;
  }, '').slice(0, -1);
};

const stringTruncate = (value: string, length: number) => value.slice(0, length);

export const numericMask = (value: string, mask: NumberMask) => {
  const { maxIntegers, maxDecimals, thousandsSeparator, decimalSeparator, allowLeadingZeroes = false } = mask;
  if (value === '') return value;
  const lastChar = value[value.length - 1];
  if (['.', ','].includes(lastChar)) {
    const sequence = value.slice(0, -1);
    if (sequence.length === 0) return maxDecimals > 0 ? `0${decimalSeparator}` : '';
    if (sequence.includes(decimalSeparator)) return sequence;
    return `${sequence}${maxDecimals > 0 ? decimalSeparator : ''}`;
  }
  
  const onlyNumbers = value.replace(/[^0-9,]/g, '');
  const [integerPart, ...decimalPart] = onlyNumbers.split(decimalSeparator);

  const integer = stringTruncate(integerPart || '0', maxIntegers);
  const integerApplyLeadingZeroes = allowLeadingZeroes ? integer : integer.replace(/^0+/, '');
  const decimal = stringTruncate(decimalPart.join(''), maxDecimals);
  return `${addThousandSeparater(integerApplyLeadingZeroes || '0', thousandsSeparator)}${decimal ? `${decimalSeparator}${decimal}` : ''}`;
};

export type MaskType = NumberMask | undefined;


export type FnMask = (value: string) => string;