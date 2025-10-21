type Sizes = 'S' | 'M' | 'L' | 'XL';

type Product = {
  createdAt: Date;
  title: string;
  stock: number;
  size?: Sizes; // Optional property
}

function createProductToJSON(product: Product) {
  return {
    createdAt: product.createdAt.toISOString(),
    title: product.title,
    stock: product.stock,
    size: product.size,
  }
}

const product1 = createProductToJSON({
  createdAt: new Date(),
  title: 'Product 1',
  stock: 12,
  size: 'XL',
});

console.log(product1);

const createProductToJSONV2 = (product: Product) => {
  return {
    createdAt: product.createdAt.toISOString(),
    title: product.title,
    stock: product.stock,
    size: product.size,
  }
}

const product2 = createProductToJSONV2({
  createdAt: new Date(),
  title: 'Product 2',
  stock: 10,
});

console.log(product2);
