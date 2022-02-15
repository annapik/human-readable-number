module.exports = function toReadable (number) {
    const objNumbers = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
        100: 'one hundred',
        200: 'two hundred',
        300: 'three hundred',
        400: 'four hundred',
        500: 'five hundred',
        600: 'six hundred',
        700: 'seven hundred',
        800: 'eight hundred',
        900: 'nine hundred',
   };

   const ones = number % 10;
   const tens = (number % 100) - ones;
   const hundreds = number - tens - ones;
   const secondTen = tens + ones;
if(number < 20 || (number < 100 && number % 10 == 0) || (number % 100 == 0)) {
  return objNumbers[number]
} else if(String(number).length == 2) {
  return objNumbers[tens] + ' ' + objNumbers[ones]
} else if(String(number).length == 3 && number % 100 < 20) {
  return objNumbers[hundreds] + ' ' + objNumbers[secondTen]
} else if(String(number).length == 3 && number % 10 == 0) {
  return objNumbers[hundreds] + ' ' + objNumbers[tens]
} else if(String(number).length == 3) {
  return objNumbers[hundreds] + ' ' + objNumbers[tens] + ' ' + objNumbers[ones]
}
  }

