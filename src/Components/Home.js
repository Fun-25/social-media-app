import "./Home.css";
import "../App.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost } from "../redux/actions/postAction";
import { Link } from "react-router-dom";

import { RingLoader } from "react-spinners";
const Home = () => {
  const loading = useSelector((state) => state.loading);
  const data = useSelector((state) => state.data);
  const error = useSelector((state) => state.error);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPost());
  }, []);

  return (
    <div className="home">
      {loading ? (
        <div className="loading-spinner-container">
          <div className="loading-spinner">
            <RingLoader color="#000000" loading={loading} size={50} />
          </div>
        </div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        data.length > 0 &&
        data.map((item, index) => (
          <div className="post-container" key={index}>
            <div className="img-container">
              <img src={item.image} alt="post" />
            </div>

            <div className="desc">
              <p>User id: {item.userId}</p>
              <p className="post-title">Title : {item.title}</p>
              <p className="post-body">Body : {item.body}</p>
            </div>

            <Link className="link" to={`/post/${item.id}`}>
              Read More...
            </Link>
          </div>
        ))
      )}
    </div>
  );
};

export default Home;
