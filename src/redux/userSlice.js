import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
    wishlist: [],
    cart: [],
    selectedProduct: {},
    billingDetails: {}, // NEW
  },

  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },

    addToWishlist: (state, action) => {
      const item = action.payload;
      if (!state.wishlist.some((p) => p.id === item.id)) {
        state.wishlist.push(item);
      }
    },

    addToCart: (state, action) => {
      const item = action.payload;
      const exists = state.cart.find((p) => p.id === item.id);

      if (exists) {
        exists.quantity += item.quantity ?? 1;
      } else {
        state.cart.push({ ...item, quantity: item.quantity ?? 1 });
      }
    },

    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },

    updateCartQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.cart.find((p) => p.id === id);
      if (item) item.quantity = quantity;
    },

    setSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },

    setBillingDetails: (state, action) => {
      state.billingDetails = action.payload;
    },
  },
});

export const {
  setUser,
  addToWishlist,
  removeFromCart,
  addToCart,
  updateCartQuantity,
  setSelectedProduct,
  setBillingDetails,
} = userSlice.actions;
export default userSlice.reducer;
