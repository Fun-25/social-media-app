import axios from "axios";
import {
  FETCH_POST_REQUEST,
  FETCH_POST_SUCCESS,
  FETCH_POST_FAILURE,
} from "./actionTypes.js";

export const fetchPostRequest = () => {
  return {
    type: FETCH_POST_REQUEST,
  };
};

export const fetchPostSuccess = (data) => {
  return {
    type: FETCH_POST_SUCCESS,
    payload: data,
  };
};

export const fetchPostFailure = (error) => {
  return {
    type: FETCH_POST_FAILURE,
    payload: error,
  };
};
//
//
// export const fetchPost = () => {
//   return (dispatch) => {
//     dispatch(fetchPostRequest());

//        Promise.all([
//          axios.get("https://picsum.photos/200?random=${post.id}"),
//          axios.get("https://jsonplaceholder.typicode.com/posts"),
//        ])
//          .then(([imgResponse, response]) => {
//            const combinedData = response.data.map((post) => ({
//              ...post,
//              image:
//            }));
//            dispatch(fetchPostSuccess(combinedData));
//          })
//          .catch((error) => dispatch(fetchPostFailure(error)));
// };
// }

export const fetchPost = () => {
  return (dispatch) => {
    dispatch(fetchPostRequest());

    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        const combinedData = response.data.map((post) => ({
          ...post,
          image: `https://picsum.photos/200?random=${post.id}`,
        }));
        dispatch(fetchPostSuccess(combinedData));
      })
      .catch((error) => dispatch(fetchPostFailure(error)));
  };
};
