import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FacebookShareButton, FacebookIcon } from "react-share";

const Post = () => {
  const { slug } = useParams();

  const [post, setPost] = useState(null);
  useEffect(() => {
    const headers = {
      "Content-Type": "application/json",
      "x-app-token": "E9FE46D9-FC93-480F-9DC6-D26F7DE243A0",
    };
    fetch(
      `https://ms-testnet.api.onnftverse.com/v1/marketplace/blog/post/${slug}/detail`,
      {
        headers,
      }
    )
      .then((res) => res.json())
      .then((data) => setPost(data))
      .catch((error) => console.log(error));
  });
  return (
    <div>
      <FacebookShareButton
        url={"https://syied.netlify.app"}
        quote={"Check out my custom image!"}
        hashtag="#customimage"
      >
        <FacebookIcon size={32} round={true} />
        <meta
          property="og:image"
          content={"https://i.ibb.co/2gD41VZ/download.jpg"}
        />
        <meta property="og:title" content={"Custom Image"} />
        <meta
          property="og:description"
          content={"Check out my custom image!"}
        />
      </FacebookShareButton>
      <a href="/">Home</a>
      <h1 style={{ marginTop: "2%" }}>Title: {post?.title}</h1>
      <h3>Category: {post?.category}</h3>
      <h1>Description</h1>

      <div>{post?.description}</div>
    </div>
  );
};
export default Post;
