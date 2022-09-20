import mock from "./mock";

const DELAY = 2000;

export function getAllProducts(categoryId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (categoryId) {
        resolve(mock.filter((product) => product.category === categoryId));
      } else {
        resolve(mock);
      }
    }, DELAY);
  });
}

export function getProductById(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mock.find((x) => x.id === id));
    }, DELAY);
  });
}
