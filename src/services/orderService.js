import axios from "axios";

export const getOrdersByid = (userId) => {
  return axios.get(
    `http://localhost:5000/api/Cart/getCartByUserId?userId=${userId}`
  );
};

export const addOrder = (listCartItemId, addressId) => {
  return axios.post(
    "http://localhost:5000/api/Order/addOrder",
    listCartItemId,
    addressId
  );
};
