// Calculating area of a trinagle
const Area_Of_triangle = (base, height) => {
  return (base * height) / 2;
};
console.log("Area of triangle : " + `${Area_Of_triangle(12, 12)}`);

const Sum_Of_Numbers = (num1, num2) => {
  return num1 + num2;
};
const Product_Of_Numbers = (num1, num2) => {
  return num1 * num2;
};

console.log("Sum of two numbers : ", `${Sum_Of_Numbers(12, 12)}`);
console.log("Product of two numbers : ", `${Product_Of_Numbers(12, 12)}`);

// getting current date
const neeDate = new Date();
console.log(neeDate);

// converting in celsius from farenhit
const CelsiusToFarenhit = (celius) => {
  return (celius * 9) / 5 + 32;
};
console.log("Farenhit to celsius : ", `${CelsiusToFarenhit(100)}`);

// converting in celsius from farenhit
const FarenhiToCelsius = (farenhit) => {
  return ((farenhit - 32) * 5) / 9;
};
console.log("Celcuis to Farenhit : ", `${FarenhiToCelsius(100)}`);


