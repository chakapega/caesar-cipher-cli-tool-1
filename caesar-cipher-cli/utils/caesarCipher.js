const encode = (text, shift) => {
  let result = "";
  const key = Number(shift);

  for (let i = 0; i < text.length; i += 1) {
    if (/[a-zA-Z]/.test(text[i])) {
      if (text[i].toUpperCase() === text[i]) {
        result += String.fromCharCode(
          ((text.charCodeAt(i) + key - 65) % 26) + 65
        );
      } else {
        result += String.fromCharCode(
          ((text.charCodeAt(i) + key - 97) % 26) + 97
        );
      }
    } else {
      result += text[i];
    }
  }

  return result;
};

const decode = (text, shift) => {
  const newShift = (26 - Number(shift)) % 26;
  const result = encode(text, newShift);

  return result;
};

module.exports = {
  encode,
  decode
};
