import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCartProducts } from "@/services/cartService";
import { addOrder } from "@/services/orderService";

export const renderCartProducts = createAsyncThunk(
  "carts/renderCartProducts",
  async (userId) => {
    try {
      let response = await getCartProducts(userId);
      if (response.status === 200) {
        return response.data;
      } else {
        return -1;
      }
    } catch (error) {
      console.log(error);
    }
  }
);

export const createOrder = createAsyncThunk(
  "carts/createOrder",
  async (listCartItemId, addressId) => {
    try {
      let response = await addOrder(listCartItemId, addressId);
      console.log(response);
      if (response.status === 200) {
        return response.data;
      } else {
        return -1;
      }
    } catch (error) {
      console.log(error);
    }
  }
);

export const cartReducer = createSlice({
  name: "carts",
  initialState: {
    error: "",
    loading: false,
    cartProductsArr: [],
    isAddSuccess: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(renderCartProducts.pending, (state) => {
        state.loading = true;
        state.cartProductsArr = [];
        state.error = null;
      })
      .addCase(renderCartProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.cartProductsArr = action.payload;
        state.error = null;
      })
      .addCase(renderCartProducts.rejected, (state, action) => {
        state.loading = false;
        console.log(action.error);
        state.error = action.error;
      })
      .addCase(createOrder.pending, (state) => {
        state.loading = true;
        state.isAddSuccess = false;
        state.error = null;
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.isAddSuccess = action.payload;
        state.error = null;
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.loading = false;
        console.log(action.error);
        state.error = action.error;
      });
  },
});

export default cartReducer.reducer;
