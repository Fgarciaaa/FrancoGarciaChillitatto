import mock from "./mock";

export function getAllProducts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mock);
    }, 2000);
  });
}

export function getProductById(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mock.find(x => x.id === id));
    }, 2000);
  });
}
