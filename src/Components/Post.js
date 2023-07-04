 import './Post.css'
 import '../App.css'
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    // Fetch individual post data based on userId
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setPost(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <div className="single-post-container" key={post.id}>
      <img src={`https://picsum.photos/200?random=${post.id}`} alt="post" />
      <div className="desc">
        <p>User id: {post.userId}</p>
        <p>Title: {post.title}</p>
        <p>Body: {post.body}</p>
      </div>
    </div>
  );
};

export default Post;

