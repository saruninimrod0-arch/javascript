function getMonthlyContribution(grossIncome) {
  if (grossIncome < 5999) return 150.00;
  if (grossIncome >= 6000 && grossIncome <= 7999) return 300.00;
  if (grossIncome >= 8000 && grossIncome <= 11999) return 400.00;
  if (grossIncome >= 12000 && grossIncome <= 14999) return 500.00;
  if (grossIncome >= 15000 && grossIncome <= 19999) return 600.00;
  if (grossIncome >= 20000 && grossIncome <= 24999) return 750.00;
  if (grossIncome >= 25000 && grossIncome <= 29999) return 850.00;
  if (grossIncome >= 30000 && grossIncome <= 49999) return 1000.00;
  if (grossIncome >= 50000 && grossIncome <= 99999) return 1500.00;
  if (grossIncome >= 100000) return 2000.00;
  throw new Error("Invalid gross income value");
}

// Example usage
const income = 25000;
const contribution = getMonthlyContribution(income);
console.log(`The monthly contribution for a gross income of Ksh ${income} is Ksh ${contribution}`);