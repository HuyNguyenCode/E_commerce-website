import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getShopInforById } from "@/services/sellerService";

export const renderShopInfor = createAsyncThunk(
  "seller/renderShopInfor",
  async (shopId) => {
    try {
      let response = await getShopInforById(shopId);
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

export const sellerReducer = createSlice({
  name: "seller",
  initialState: {
    error: "",
    loading: false,
    inforArr: [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(renderShopInfor.pending, (state) => {
        state.loading = true;
        state.inforArr = [];
        state.error = null;
      })
      .addCase(renderShopInfor.fulfilled, (state, action) => {
        state.loading = false;
        state.inforArr = action.payload;
        state.error = null;
      })
      .addCase(renderShopInfor.rejected, (state, action) => {
        state.loading = false;
        console.log(action.error);
        state.error = action.error;
      });
  },
});

export default sellerReducer.reducer;
