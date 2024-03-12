import { useDispatch, useSelector } from "react-redux";
import { deleteCartItem } from "@/redux/slice/cartReducer";

export function CartController() {
  const dispatch = useDispatch();
  //Hanlde delete product
  const handleDeleteProduct = (cartItemId) => {
    dispatch(deleteCartItem(cartItemId));
  };
  return {
    handleDeleteProduct,
  };
}
