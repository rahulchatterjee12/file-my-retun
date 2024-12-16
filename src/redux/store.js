"use client";

import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import rootReducer from "../redux/reducers";

// Apply the middleware
const middleware = applyMiddleware(thunk);

// Create the store with the rootReducer and the applied middleware
const store = createStore(rootReducer, middleware);

export default store;

