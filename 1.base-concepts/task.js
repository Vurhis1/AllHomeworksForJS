"use strict";

function solveEquation(a, b, c) {
  let arr = [];  
  let d = b ** 2 - 4 * a * c;
	if (d == 0) {		
	  let oneRoot = -b / (2 * a);
	  arr.push(oneRoot);
	} else if (d > 0) {
	  let firstRoot = (-b + Math.sqrt(d))/(2 * a);
	  let secondRoot = (-b - Math.sqrt(d))/(2 * a);
	  arr.push(firstRoot, secondRoot);		  		
	} 
  return arr; 
}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {

  if(isNaN(percent)) {
	return false;
  }

  if(isNaN(contribution)) {
	return false;
  }

  if(isNaN(amount)) {
	return false;
  }

  if(isNaN(countMonths)) {
	return false;
  }

  let bodyCredit = amount - contribution;
  let newPercent = percent / 100 / 12;
  let monthlyPayment = bodyCredit * (newPercent + (newPercent / (((1 + newPercent) ** countMonths) - 1))); 
  let totalAmount = +Number((monthlyPayment * countMonths).toFixed(2));
  
  return totalAmount;
  }
  
