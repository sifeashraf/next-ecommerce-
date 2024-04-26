import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import cartItems from "./cartItems-api";

export const apicall = createAsyncThunk(
  "cartItemsFetch/fetchCart",
  async (data: any, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const response = await cartItems.cartItems(data);
      return response.data;
    } catch {
      console.log("dos'nt work");
    }
  }
);

export const userCartItemsFetch = createAsyncThunk(
  "userCartItemsFetch/fetchcart",
  async (email: any, thunkApi) => {
    const { rejectWithValue } = thunkApi;

    try {
      let response = await cartItems.getUserCartItems(email);
      return response.data;
    } catch {}
  }
);

let cartSlice = createSlice({
  name: "cartItems",
  initialState: { products: [], userdata: {} as any },
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(apicall.fulfilled, (state, action) => {
      // Add user to the state array
      // state = action.payload;
      // console.log(action.payload);
    });
    builder.addCase(userCartItemsFetch.fulfilled, (state, action) => {
      // Add user to the state array
      state.userdata = action.payload;
    });
  },
});
export default cartSlice.reducer;
