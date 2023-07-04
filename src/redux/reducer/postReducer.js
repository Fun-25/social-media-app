import React from "react";
import {
  FETCH_POST_REQUEST,
  FETCH_POST_SUCCESS,
  FETCH_POST_FAILURE,
} from "../actions/actionTypes";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POST_REQUEST:
      return { ...state, loading: true };
    case FETCH_POST_SUCCESS:
      return { ...state, loading: false, data: action.payload, error: "" };
    case FETCH_POST_FAILURE:
      return { ...state, loading: false, data: [], error: action.payload };
      default:return state;
  }
};
export default postReducer;