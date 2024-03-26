import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./ProductsStore";

const rootStore = configureStore({
  reducer: {
    product: productSlice.reducer,
  },
});

export default rootStore;
