import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getCartProducts,
  decreaseQuantity,
  increaseQuantity,
  deleteProduct,
  addProduct,
} from "@/services/cartService";

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

export const increaseProduct = createAsyncThunk(
  "carts/increaseProduct",
  async (cartItemId) => {
    try {
      let response = await increaseQuantity(cartItemId);
      console.log(response);
      if (response.status === 200) {
        return true;
      } else {
        return -1;
      }
    } catch (error) {
      console.log(error);
    }
  }
);

export const decreaseProduct = createAsyncThunk(
  "carts/decreaseProduct",
  async (cartItemId) => {
    try {
      let response = await decreaseQuantity(cartItemId);
      if (response.status === 200) {
        return true;
      } else {
        return -1;
      }
    } catch (error) {
      console.log(error);
    }
  }
);

export const deleteCartItem = createAsyncThunk(
  "carts/deleteCartItem",
  async (cartItemId) => {
    try {
      let response = await deleteProduct(cartItemId);
      if (response.status === 200) {
        return true;
      } else {
        return -1;
      }
    } catch (error) {
      console.log(error);
    }
  }
);

export const addCartItem = createAsyncThunk(
  "carts/addCartItem",
  async (proInfor) => {
    try {
      let response = await addProduct(
        proInfor.productId,
        proInfor.userId,
        proInfor.selectedColor,
        proInfor.qty
      );
      console.log(response);
      if (response.status === 200) {
        return true;
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
    isDelete: false,
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
      .addCase(increaseProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(increaseProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(increaseProduct.rejected, (state, action) => {
        state.loading = false;
        console.log(action.error);
        state.error = action.error;
      })
      .addCase(decreaseProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(decreaseProduct.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(decreaseProduct.rejected, (state, action) => {
        state.loading = false;
        console.log(action.error);
        state.error = action.error;
      })
      .addCase(addCartItem.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.isAddSuccess = false;
      })
      .addCase(addCartItem.fulfilled, (state, action) => {
        state.loading = false;
        state.isAddSuccess = action.payload;
        state.error = null;
      })
      .addCase(addCartItem.rejected, (state, action) => {
        state.loading = false;
        console.log(action.error);
        state.isAddSuccess = false;
        state.error = action.error;
      });
  },
});

export default cartReducer.reducer;
