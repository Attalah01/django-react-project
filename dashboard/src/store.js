// import { createStore, applyMiddleware } from 'redux';
import logger from "redux-logger";
import { configureStore } from "@reduxjs/toolkit";
// import thunk from 'redux-thunk';
import rootReducer from "./redux/reducers";
// import { composeWithDevTools } from 'redux-devtools-extension';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
