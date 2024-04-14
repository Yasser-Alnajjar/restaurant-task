import { configureStore } from "@reduxjs/toolkit";
import cashierReducer from "./cashierSlice";
import tableReducer from "./tableSlice";
import menuReducer from "./menuSlice";

const store = configureStore({
  reducer: {
    cashier: cashierReducer,
    menu: menuReducer,
    table: tableReducer,
  },
});

export default store;
