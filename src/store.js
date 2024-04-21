import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import productReducer from "./slices/productSlice";
import saleReducer from "./slices/saleSlice";

import persistStore from "redux-persist/es/persistStore";

const rootReducer = combineReducers({
  products: productReducer,
  sales: saleReducer,
  // Add other reducers here
});

const persistConfig = {
  key: "root",
  storage,
  // Add any config options here
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

const persistedStore = persistStore(store);

export { store, persistedStore };
