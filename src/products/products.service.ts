import { Product } from './products.model';

// This file will have the Product service
// Which is the business logic
export const products: Product[] = [];

export const addProduct = (data: Product): void => {
  products.push(data);
}

export const calculateStock = (): number => {
  let total = 0;

  products.forEach((item) => {
    total += item.stock;
  })
  return total;
}
