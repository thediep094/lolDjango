// Write funtion use for more sections
// Example helpers
const hugMoneyFormat = (value: string): string => {
  const currencyDecimal = value.slice(value.indexOf(","));
  if (currencyDecimal === ",00") {
    return value.slice(0, value.indexOf(","));
  }
  return value;
};

export default hugMoneyFormat;
