import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { getAllCategorys } from "@/services/categoryService";
import { getProductsByCategory } from "@/services/productService";

export const renderCategorys = createAsyncThunk(
  "categorys/renderCategorys",
  async () => {
    try {
      let response = await getAllCategorys();
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

export const renderProductsCategory = createAsyncThunk(
  "products/renderProductsCategory",
  async (categoryId) => {
    try {
      let response = await getProductsByCategory(categoryId, 15);
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

export const categorysSlice = createSlice({
  name: "categorys",
  initialState: {
    error: "",
    loading: false,
    categorysArr: [],
    productsBycateArr: [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(renderCategorys.pending, (state) => {
        state.loading = true;
        state.categorysArr = [];
        state.error = null;
      })
      .addCase(renderCategorys.fulfilled, (state, action) => {
        state.loading = false;
        state.categorysArr = action.payload;
        state.error = null;
      })
      .addCase(renderCategorys.rejected, (state, action) => {
        state.loading = false;
        console.log(action.error);
        state.error = action.error;
      })
      .addCase(renderProductsCategory.pending, (state) => {
        state.loading = true;
        state.productsBycateArr = [];
        state.error = null;
      })
      .addCase(renderProductsCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.productsBycateArr = action.payload;
        state.error = null;
      })
      .addCase(renderProductsCategory.rejected, (state, action) => {
        state.loading = false;
        console.log(action.error);
        state.error = action.error;
      });
  },
});

export default categorysSlice.reducer;
