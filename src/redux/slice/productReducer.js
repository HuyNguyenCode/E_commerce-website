import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import {
  getAllProducts,
  getProductsByCategory,
  getProductsById,
  getProductsByShopId,
} from "@/services/productService";

export const renderProducts = createAsyncThunk(
  "products/renderProducts",
  async (limit) => {
    try {
      let response = await getAllProducts(limit);
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

export const renderProsByShopId = createAsyncThunk(
  "products/renderProsByShopId",
  async (shopId) => {
    try {
      let response = await getProductsByShopId(shopId, 15);
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

export const renderMayLikePros = createAsyncThunk(
  "products/renderMayLikePros",
  async (categoryId) => {
    try {
      let response = await getProductsByCategory(categoryId, 10);
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

export const renderSellingPros = createAsyncThunk(
  "products/renderSellingPros",
  async (categoryId) => {
    try {
      let response = await getProductsByCategory(categoryId, 10);
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

export const renderProsById = createAsyncThunk(
  "products/renderProsById",
  async (productId) => {
    try {
      let response = await getProductsById(productId);
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

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    error: "",
    loading: false,
    productsArr: [],
    sellingProsArr: [],
    mayLikeProsArr: [],
    proDetail: [],
    prosInShop: [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(renderProducts.pending, (state) => {
        state.loading = true;
        state.productsArr = [];
        state.error = null;
      })
      .addCase(renderProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.productsArr = action.payload;
        state.error = null;
      })
      .addCase(renderProducts.rejected, (state, action) => {
        state.loading = false;
        console.log(action.error);
        state.error = action.error;
      })
      .addCase(renderMayLikePros.pending, (state) => {
        state.loading = true;
        state.mayLikeProsArr = [];
        state.error = null;
      })
      .addCase(renderMayLikePros.fulfilled, (state, action) => {
        state.loading = false;
        state.mayLikeProsArr = action.payload;
        state.error = null;
      })
      .addCase(renderMayLikePros.rejected, (state, action) => {
        state.loading = false;
        console.log(action.error);
        state.error = action.error;
      })
      .addCase(renderSellingPros.pending, (state) => {
        state.loading = true;
        state.sellingProsArr = [];
        state.error = null;
      })
      .addCase(renderSellingPros.fulfilled, (state, action) => {
        state.loading = false;
        state.sellingProsArr = action.payload;
        state.error = null;
      })
      .addCase(renderSellingPros.rejected, (state, action) => {
        state.loading = false;
        console.log(action.error);
        state.error = action.error;
      })
      .addCase(renderProsById.pending, (state) => {
        state.loading = true;
        state.proDetail = [];
        state.error = null;
      })
      .addCase(renderProsById.fulfilled, (state, action) => {
        state.loading = false;
        state.proDetail = action.payload;
        state.error = null;
      })
      .addCase(renderProsById.rejected, (state, action) => {
        state.loading = false;
        console.log(action.error);
        state.error = action.error;
      })
      .addCase(renderProsByShopId.pending, (state) => {
        state.loading = true;
        state.prosInShop = [];
        state.error = null;
      })
      .addCase(renderProsByShopId.fulfilled, (state, action) => {
        state.loading = false;
        state.prosInShop = action.payload;
        state.error = null;
      })
      .addCase(renderProsByShopId.rejected, (state, action) => {
        state.loading = false;
        console.log(action.error);
        state.error = action.error;
      });
  },
});

export default productsSlice.reducer;
