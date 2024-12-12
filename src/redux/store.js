"use client";
// const { createStore, applyMiddleware } = require("redux");
import { createStore, applyMiddleware } from "redux";
// const thunk = require("redux-thunk").default;
import { thunk } from "redux-thunk";
import rootReducer from "@/redux/reducers";

const middleware = [thunk];

const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;
