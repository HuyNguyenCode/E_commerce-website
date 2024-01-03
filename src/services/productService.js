import axios from "axios";

export const getAllProducts = (limit) => {
  return axios.get(
    `http://localhost:5000/getListProductHomepage?limit=${limit}`
  );
};

export const getProductsByCategory = (categoryId, limit) => {
  return axios.get(
    `http://localhost:5000/getListByCategoryId?categoryId=${categoryId}&limit=${limit}`
  );
};

export const getProductsById = (productId) => {
  return axios.get(
    `http://localhost:5000/getProductDetail?product_id=${productId}`
  );
};

export const getProductsByShopId = (shopId, limit) => {
  return axios.get(
    `http://localhost:5000/getListByShopId?shopId=${shopId}&limit=${limit}`
  );
};
