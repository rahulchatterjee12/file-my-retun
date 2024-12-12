/*
// redux/reducers/loadingReducer.js

import {START_LOADING, STOP_LOADING} from "@/redux/actions/loading/types";

const initialState = {
    loading: true,
};

const loadingReducer = (state = initialState, action) => {
    switch (action.type) {
        case START_LOADING:
            return { ...state, loading: true };
        case STOP_LOADING:
            return { ...state, loading: false };
        default:
            return state;
    }
};

export default loadingReducer;
*/
