import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addCartItems: (state, action) => {
      state.cartItems.push(action.payload);
    },
    setCartItems: (state, action) => {
      state.cartItems = action.payload;
    },
    deleteCartItem: (state, action) => {
      const index = state.cartItems.findIndex(
        (item) => item.id === action.payload
      );
      state.cartItems.splice(index, 1);
    },
  },
});

export const { addCartItems, deleteCartItem, setCartItems } = cart.actions;
export default cart.reducer;
