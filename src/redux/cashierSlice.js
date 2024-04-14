import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  order: [],
  total: 0,
  subtotal: 0,
  discountApplied: false,
  discountAmount: 0,
};

const DISCOUNT_CODE = "YASSER10";
const DISCOUNT_PERCENTAGE = 10;

const cashierSlice = createSlice({
  name: "cashier",
  initialState,
  reducers: {
    addMenuItemToOrder(state, action) {
      const menuItem = action.payload;
      const existingItem = state.order.find((item) => item.id === menuItem.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.order.push({ ...menuItem, quantity: 1 });
      }
    },
    modifyOrderQuantity(state, action) {
      const { menuItem, quantity } = action.payload;
      const existingItem = state.order.find((item) => item.id === menuItem.id);
      if (existingItem) {
        existingItem.quantity = quantity;
      }
      if (existingItem?.quantity === 0) {
        state.order.splice(state.order.indexOf(existingItem), 1);
      }
    },
    applyDiscount(state, action) {
      const discountCode = action.payload;
      if (discountCode === DISCOUNT_CODE) {
        if (!state.discountApplied) {
          state.discountApplied = true;
          state.discountAmount = (state.total * DISCOUNT_PERCENTAGE) / 100;
          state.total -= Math.floor(state.discountAmount);
        }
      }
    },
    calculateTotal(state) {
      if (state.discountApplied) {
        state.discountAmount = (state.total * DISCOUNT_PERCENTAGE) / 100;
        state.total -= Math.floor(state.discountAmount);
      }
      state.total = state.order.reduce((acc, item) => {
        return acc + item.price * item.quantity;
      }, 0);
      state.subtotal = state.total;
      state.total -= Math.floor(state.discountAmount);
    },
  },
});

export const {
  addMenuItemToOrder,
  modifyOrderQuantity,
  applyDiscount,
  calculateTotal,
} = cashierSlice.actions;

export default cashierSlice.reducer;
