const distance = 1500;
let budget = 175;
let average = 3;

// 55 miles per hour - 30 miles per gallon
//1.How many gallons of fuel will you need for the entire trip?
let sumOfGallons = 1500 * (1 / 30);
console.log(`Gallons if 55 miles per hour: ${sumOfGallons}`);
//2.Will your budget be enough to cover the fuel expense?
let isEnough = sumOfGallons * 3 <= budget;
console.log(isEnough); //true

// 60 miles per hour - 28 miles per gallon
//1.How many gallons of fuel will you need for the entire trip?
let sumOfGallons1 = 1500 * (1 / 28);
console.log(`Gallons if 60 miles per hour: ${sumOfGallons1}`);
//2.Will your budget be enough to cover the fuel expense?
let isEnough1 = sumOfGallons1 * 3 <= budget;
console.log(isEnough1); //true

//75 miles per hour - 23 miles per gallon
//1.How many gallons of fuel will you need for the entire trip?
let sumOfGallons2 = 1500 * (1 / 23);
console.log(`Gallons if 75 miles per hour: ${sumOfGallons2}`);
//2.Will your budget be enough to cover the fuel expense?
let isEnough2 = sumOfGallons2 * 3 <= budget;
console.log(isEnough2); //false
