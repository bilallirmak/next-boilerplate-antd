module.exports = {
  mask(str, maskChar, unmaskedLength, maskFromStart = true) {
    const maskStart = maskFromStart ? 0 : Math.max(0, unmaskedLength);
    const maskEnd = maskFromStart
      ? Math.max(0, str.length - unmaskedLength)
      : str.length;
    return str
      .slice(0, 12)
      .split('')
      .map((char, index) => {
        if (index - 2 >= maskStart && index < maskEnd) {
          return maskChar;
        } else {
          return char;
        }
      })
      .join('');
  },
};
