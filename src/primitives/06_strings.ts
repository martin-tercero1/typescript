let productTitle = 'Amazing Product';
// productTitle = null; not possible in TS
productTitle = 'Changed Amazing Product';
console.log('productTitle', productTitle);

const productDescription = "I'm a product description";
console.log('productDescription', productDescription);

const productPrice = 100;

const summary = `
title: ${productTitle}
description: ${productDescription}
price: ${productPrice}
`;
console.log('summary', summary);

const myString: String = 'asd' // incorrect
