import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tables: [],
};

const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    addTable(state, action) {
      const tableNumber = action.payload;
      state.tables.push({
        number: tableNumber,
        status: "available",
      });
    },
    assignTable(state, action) {
      const { tableNumber, customer } = action.payload;
      const table = state.tables.find((table) => table.number === tableNumber);
      if (table) {
        table.status = "occupied";
        table.customer = customer;
      }
    },
    markTableAsAvailable(state, action) {
      const tableNumber = action.payload;
      const table = state.tables.find((table) => table.number === tableNumber);
      if (table) {
        table.status = "available";
        delete table.customer;
      }
    },
  },
});

export const { addTable, assignTable, markTableAsAvailable } =
  tableSlice.actions;

export default tableSlice.reducer;
