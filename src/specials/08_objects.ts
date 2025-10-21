import { addProduct, calculateStock, products } from '../products/products.service';

addProduct({
  createdAt: new Date(),
  title: 'Product 1',
  stock: 12,
})

addProduct({
  createdAt: new Date(),
  title: 'Product 2',
  stock: 6,
  size: 'XL'
})

console.log(calculateStock());

console.log(products);
