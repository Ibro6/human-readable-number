module.exports = function toReadable (number) {
//     const zeroToNineteen = [
//         "",
//         "one",
//         "two",
//         "three",
//         "four",
//         "five",
//         "six",
//         "seven",
//         "eight",
//         "nine",
//         "ten",
//         "eleven",
//         "twelve",
//         "thirteen",
//         "fourteen",
//         "fifteen",
//         "sixteen",
//         "seventeen",
//         "eighteen",
//         "nineteen"
//     ];
//   const teenToNinety =
//    ['twenty', 
//    'thirty', 
//    'fourty', 
//    'fivety', 
//    'sixty', 
//    'seventy', 
//    'eighty', 
//    'ninety'
// ];
//   const oneHundredToNineHundred = [
//    'one hundred',
//    'two hundred', 
//    'three hundred', 
//    'four hundred', 
//    'six hundred', 
//    'seven hundred', 
//    'eight hundred', 
//    'nine hundred'
//   ];
//   const checkToThreedigit = number/100;
//   const checkToTwodigit = number/10;

//   if (number === 0) return "zero";
//   if (number < 20) return ones[number];

//   if(checkToThreedigit < 10 && checkToThreedigit > 0) {
//       firstN = parseInt(number/100);
//       secondN = parseInt((number%100)/10);
//       thirdN = parseInt(number%10);
//       return [oneHundredToNineHundred[firstN-1], teenToNinety[secondN-1], zeroToNine[thirdN]].join(' ');
//   }

const ones = [
    "",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen"
];

const tens = [
    "",
    "",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety"
];

if (number === 0) return "zero";
if (number < 20) return ones[number];

if (number < 100)
    return (
        tens[parseInt(number / 10)] +
        (number % 10 !== 0 ? " " : "") +
        ones[number % 10]
    );

let numString = number.toString();

if (numString[1] === "0" && numString[2] === "0")
    return ones[numString[0]] + " hundred";
else
    return (
        ones[numString[0]] +
        " hundred " +
        toReadable(parseInt(numString[1] + numString[2]))
    );

}
