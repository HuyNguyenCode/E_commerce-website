import axios from "axios";

export const getAllCategorys = () => {
  return axios.get("http://localhost:5000/getListCategories");
};
