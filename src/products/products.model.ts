// This file will have the Product model
// Which is the data interface
export type Sizes = 'S' | 'M' | 'L' | 'XL';

export type Product = {
  createdAt: Date;
  title: string;
  stock: number;
  size?: Sizes; // Optional property
};


