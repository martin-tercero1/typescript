// Inferred
let productPrice = 100;
productPrice = 12
console.log('productPrice', productPrice);

// Explicit
let customerAge: number = 23;
// customerAge = customerAge + '1'; // output: 231
customerAge = customerAge + 1;
console.log('customerAge', customerAge);

let productStock: number;
console.log('productStock', productStock);
if (productStock > 10) {
  console.log('is greater');
}

let discount = parseInt('123');
console.log('discount', discount);

if (discount < 200) {
  console.log('Applied')
} else {
  console.log('Not apply')
}

let hex = 0x12fa;
console.log('hex', hex);

let bin = 0b10101;
console.log('bin', bin);

const myNumber: Number = 10; // Incorrect because refers to the Object
