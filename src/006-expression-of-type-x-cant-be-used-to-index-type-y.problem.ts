const productPrices = {
  Apple: 1.2,
  Banana: 0.5,
  Orange: 0.8,
};

const getPrice = (productName: string) => {
  // const index = productName as keyof typeof productPrices;
  // return productPrices[index];
  return productPrices[productName];
};
