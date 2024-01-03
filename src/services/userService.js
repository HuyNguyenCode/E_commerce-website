import axios from "axios";
import qs from "qs";

export const getAddressById = (userId) => {
  return axios.get(
    `http://localhost:5000/api/Address/getByUserId?userId=${userId}`
  );
};

export const signupUser = (fullName, email, phoneNumber, password) => {
  return axios.post(
    "http://localhost:5000/api/User/register",
    fullName,
    email,
    phoneNumber,
    password
  );
};

export const loginUser = (email, password) => {
  const userInfor = JSON.stringify({ email, password });
  console.log(password);
  console.log(userInfor);
  return axios.post("http://localhost:5000/login", userInfor, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
