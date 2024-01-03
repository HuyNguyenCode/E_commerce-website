import axios from "axios";

export const getCartProducts = (userId) => {
  return axios.get(
    `http://localhost:5000/api/Cart/getCartByUserId?userId=${userId}`
  );
};

export const increaseQuantity = (cartItemId) => {
  return axios.put(
    `http://localhost:5000/api/Cart/increaseCart?cartItem_id=${cartItemId}`
  );
};

export const decreaseQuantity = (cartItemId) => {
  return axios.put(
    `http://localhost:5000/api/Cart/decreaseCart?cartItem_id=${cartItemId}`
  );
};

export const deleteProduct = (cartItemId) => {
  return axios.delete(
    `http://localhost:5000/api/Cart/removeCart?cartItem_id=${cartItemId}`
  );
};

export const addProduct = (productId, userId, option, quantity) => {
  const productInfor = JSON.stringify({ productId, userId, option, quantity });
  console.log(productInfor);
  return axios.post("http://localhost:5000/api/Cart/addToCart", productInfor, {
    mode: "no-cors",
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
      "Access-Control-Allow-Methods": "POST",
      "Access-Control-Allow-Origin": "*",
    },
  });
};
