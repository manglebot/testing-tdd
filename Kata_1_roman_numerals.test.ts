import { romanNumerals } from "./Kata_1_roman_numerals";

test("Return number 5", () => {
  expect(romanNumerals(123)).toEqual("[100,20,3]");
});



// I = 1
// V = 5
// X = 10
// L = 50
// C = 100
// D = 500
// M = 1000

// letters can only be use 3 times in a row and values are added
// 
// eg III = 3, XXX = 30, CCC = 300 etc

// adding XI = 11, LV = 55, CL = 150, DC = 600
// LXVI = 66, CCLX = 250, DCCLV = 755

// subtracking - if numeral is smaller we subtract
// eg IX = 9

// test ideas... convert numverals to numbers.
// try adding numerals.
// for minus - try - if numeral less than next numberal, subtract.

// needs to be the opposite way around - return numeral


//later = parameterised testing