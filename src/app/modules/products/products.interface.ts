// export type ProductName = {
//   firstName: string;
//   middleName: string;
//   lastName: string;
// };

export type Product = {
  productName: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  variants: {
    type: string;
    value: string;
  }[];
  inventory: {
    quantity: number;
    inStock: boolean;
  };
};
