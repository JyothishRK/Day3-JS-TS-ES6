interface Product {
  id: number;
  name: string;
  price: number;
  category?: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Laptop",
    price: 999.99,
    category: "Electronics",
  },
  {
    id: 2,
    name: "Coffee Mug",
    price: 12.99,
  },
  {
    id: 3,
    name: "Headphones",
    price: 149.99,
    category: "Electronics",
  },
];

export function learnInterface(): number {
  products.forEach((product) => {
    console.log(
      `Product Id: ${product.id}\n` +
        `Product Name: ${product.name}\n` +
        `Product Price: $${product.price}\n` +
        `Product Category: ${product.category || "No Category"}\n`
    );
  });
  return 1;
}
