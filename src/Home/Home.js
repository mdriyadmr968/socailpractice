import React, { useEffect, useState } from "react";

const Home = () => {
  const [posts, setPosts] = useState(null);
  useEffect(() => {
    const headers = {
      "Content-Type": "application/json",
      "x-app-token": "E9FE46D9-FC93-480F-9DC6-D26F7DE243A0",
    };
    fetch(
      "https://ms-testnet.api.onnftverse.com/v1/marketplace/0/blog/post/list?type=TUTORIAL",
      {
        headers,
      }
    )
      .then((res) => res.json())
      .then((data) => setPosts(data.content));
  });

  return (
    <div style={{ backgroundColor: "white", color: "black", paddingTop: "5%" }}>
      <div style={{ width: "60%", margin: "auto" }}>
        <div>
          <h1 style={{ textAlign: "center", marginBottom: "5%" }}>
            Welcome to reactBlog
          </h1>

          {posts &&
            posts.map((post) => (
              <div key={post.postId}>
                <h1>{post.title}</h1>
                <p>
                  {post?.description.slice(0, 200)}{" "}
                  {<a href={`post/${post.postId}`}>Read more</a>}
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
