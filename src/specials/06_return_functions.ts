// Function return type
const calcTotal = (prices: number[]): number => {
  let total = 0;
  prices.forEach((item) => {
    total += item;
  })
  return total;
}

// Void means that the function doesn't return anything
const printTotal = (prices: number[]):void => {
  const rta = calcTotal(prices);
  console.log(`The total is: ${rta}`)
}

printTotal([1, 2, 3, 4])
