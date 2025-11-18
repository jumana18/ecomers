import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
    wishlist: [],
    cart: [],
  },

  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },

    addToWishlist: (state, action) => {
      const item = action.payload;
      const exists = state.wishlist.some((p) => p.id === item.id);
      if (!exists) state.wishlist.push(item);
    },

    addToCart: (state, action) => {
      const item = action.payload;
      const exists = state.cart.find((p) => p.id === item.id);

      if (exists) {
        exists.quantity += 1;
      } else {
        state.cart.push({ ...item, quantity: 1 });
      }
    },

    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
 },
});

export const { setUser, addToWishlist,addToCart,removeFromCart,} = userSlice.actions;
export default userSlice.reducer;
