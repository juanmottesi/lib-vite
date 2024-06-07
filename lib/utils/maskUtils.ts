export const addThousandSeparater = (value: string, separator: string) => {
  if (separator === '') return value;
  return value.split('').reduceRight((acc, char, index, array) => {
    if ((array.length - 1 - index) % 3 === 0) {
      return `${char}${separator}${acc}`;
    }
    return `${char}${acc}`;
  }, '').slice(0, -1);
};

export const stringTruncate = (value: string, length: number) => value.slice(0, length);
