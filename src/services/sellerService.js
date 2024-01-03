import axios from "axios";

export const getShopInforById = (shopId) => {
  return axios.get(`http://localhost:5000/api/Shop/info?shop_id=${shopId}`);
};
