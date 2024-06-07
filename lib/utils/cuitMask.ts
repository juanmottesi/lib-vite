const cuitMask = (value: string) => {
  const onlyNumbers = value.replace(/[^0-9]/g, '');
  const cuit = onlyNumbers.slice(0, 11);
  if (cuit.length === 0 ) return cuit;
  const firstPart = cuit.slice(0, 2).padEnd(2, '_');
  const secondPart = cuit.slice(2, 10).padEnd(8, '_');
  const therdPart = cuit.slice(10, 11).padEnd(1, '_');
  return `${firstPart}-${secondPart}-${therdPart}`;
};

export default cuitMask;