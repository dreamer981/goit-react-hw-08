import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contactsSlice";
import filtersReducer from "./filtersSlice";
import { combineReducers } from "redux";

// Root reducer
const rootReducer = combineReducers({
  contacts: contactsReducer,
  filters: filtersReducer,
});

// Store oluşturma
export const store = configureStore({
  reducer: rootReducer
});

