import { toast } from "react-toastify";
const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
  cartTotalQuantity: localStorage.getItem("cartQuantity") ? JSON.parse(localStorage.getItem("cartQuantity")) : 0,
  cartTotalAmount: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      // check already exist or not
      const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
        toast.info("increased product quantity", { position: "top-right" });
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
        toast.success("added a new product", { position: "top-right" });
      }
      //   update cart quantity
      state.cartTotalQuantity += 1;

      //   save to local storage
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      localStorage.setItem("cartQuantity", JSON.stringify(state.cartTotalQuantity));
    },

    decreaseCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex((cartItem) => cartItem.id === action.payload.id);
      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
        toast.info(`Decreased ${action.payload.name} cart quantity`, {
          position: "top-right",
        });
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const nextCartItems = state.cartItems.filter((cartItem) => cartItem.id !== action.payload.id);

        state.cartItems = nextCartItems;
        toast.error(`${action.payload.name} removed from cart`, {
          position: "top-right",
        });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    removeFromCart: (state, action) => {
      const nextCartItems = state.cartItems.filter((cartItem) => cartItem.id !== action.payload.id);

      state.cartItems = nextCartItems;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      toast.error(`${action.payload.name} removed from cart`, {
        position: "top-right",
      });
    },
  },
});

export const { addToCart, removeFromCart, decreaseCart, increaseCart } = cartSlice.actions;
export default cartSlice.reducer;