const login = (dto: { email: string, password: string }): void => {
  console.log(dto.email, dto.password)
}

login({
  email: 'martin@tfm.com',
  password: '12345'
})

type Sizes = 'S' | 'M' | 'L' | 'XL';

type Product = {
  createdAt: Date;
  title: string;
  stock: number;
  size?: Sizes; // Optional property
}

const products: any[] = [];

const addProduct = (data: Product): void => {
  products.push(data);
}

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

console.log(products);
