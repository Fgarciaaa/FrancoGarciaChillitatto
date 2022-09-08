import mock from "./mock";

export function getAllProducts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mock);
    }, 2000);
  });
}

