const myvariable = 23; // declaring as well as initializing a variale to a constant number

// Function that returning number of characters in a string
console.log(myvariable);
const ReturnsCharacters = (str) => {
  return str.length;
};
console.log(ReturnsCharacters("Hello"));

//Function that returning some text
const ReturnsText = () => {
  return "some text returning";
};
console.log(ReturnsText());

//converting string to uppercase

const StringToUppercase = (str) => {
  return str.toLowerCase();
};
console.log(
  "Conevrting string to lowercase : " +
    `${StringToUppercase("shah hussain hamdani")}`
);

//converting string to lowercase

const StringToLowercase = (str) => {
  return str.toLowerCase();
};
console.log(
  "Conevrting string to lowercase : " +
    `${StringToLowercase("SHAH HUSSAIN HAMDANI")}`
);

// getting first index value of array
const array = [1, 2, 3, 4];
const GetFirstIndex = (arr) => {
  return arr[0];
};
console.log("Getting First Index of Array : " + `${GetFirstIndex(array)}`);

// Surcharge finding of an amount by function

const SurchargeFinding = (val1, val2, percent) => {
  let TotalSum = val1 + val2;
  let Percentage = (TotalSum * percent) / 100;
  return TotalSum + Percentage;
};
console.log(
  "Surhcarge Amount Founded : " + ` ${SurchargeFinding(100, 50, 10)} `
);


    // Replacnig chaacters of a stirng
const ReplaceCharacters = (value, oldchar, newchar) => {
  return value.replace(oldchar, newchar);
};
console.log(ReplaceCharacters('Shah hussain hamdani','hussain','abbas'))
