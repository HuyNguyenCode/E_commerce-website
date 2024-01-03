import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAddressById } from "@/services/userService";
import { signupUser, loginUser } from "@/services/userService";

export const renderAddress = createAsyncThunk(
  "user/renderAddress",
  async (userId) => {
    try {
      let response = await getAddressById(userId);
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

export const userRegister = createAsyncThunk(
  "user/userRegister",
  async (userInfor) => {
    try {
      let response = await signupUser(
        userInfor.fullName,
        userInfor.email,
        userInfor.phoneNumber,
        userInfor.password
      );
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

export const loginForUser = createAsyncThunk(
  "user/loginForUser",
  async (email, password) => {
    try {
      console.log("password in reducer");
      const newPass = "admin";
      let response = await loginUser(email, password);
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

export const userReducer = createSlice({
  name: "user",
  initialState: {
    error: "",
    loading: false,
    addressArr: [],
    isSignupSuccess: false,
    isLoginSuccess: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(renderAddress.pending, (state) => {
        state.loading = true;
        state.addressArr = [];
        state.error = null;
      })
      .addCase(renderAddress.fulfilled, (state, action) => {
        state.loading = false;
        state.addressArr = action.payload;
        state.error = null;
      })
      .addCase(renderAddress.rejected, (state, action) => {
        state.loading = false;
        console.log(action.error);
        state.error = action.error;
      })
      .addCase(userRegister.pending, (state) => {
        state.loading = true;
        state.isSignupSuccess = false;
        state.error = null;
      })
      .addCase(userRegister.fulfilled, (state, action) => {
        state.loading = false;
        state.isSignupSuccess = action.payload;
        state.error = null;
      })
      .addCase(userRegister.rejected, (state, action) => {
        state.loading = false;
        console.log(action.error);
        state.error = action.error;
      })
      .addCase(loginForUser.pending, (state) => {
        state.loading = true;
        state.isLoginSuccess = false;
        state.error = null;
      })
      .addCase(loginForUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isLoginSuccess = action.payload;
        state.error = null;
      })
      .addCase(loginForUser.rejected, (state, action) => {
        state.loading = false;
        console.log(action.error);
        state.error = action.error;
      });
  },
});

export default userReducer.reducer;
