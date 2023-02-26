import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

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
      <Helmet>
        <title>post</title>
        <meta
          name="description"
          content="this is default description from the top of meta tag"
        />
        <link rel="canonical" href="https://socailpractice.vercel.app/" />

        <meta property="og:title" content="this is the title of og tag" />
        <meta
          property="og:description"
          content="This is the description of the page"
        />
        <meta property="og:url" content="https://socailpractice.vercel.app/" />
        <meta
          property="og:image"
          content="https://i.ibb.co/2gD41VZ/download.jpg"
        />
        <meta property="og:image:alt" content="peing" />

        <meta property="og:locale" content="ja_JP" />
        <meta property="twitter:title" content="This is the title of twitter" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:image"
          content="https://i.ibb.co/2gD41VZ/download.jpg"
        />
        <meta property="twitter:image:alt" content="peing" />
        <meta
          property="twitter:description"
          content="Peing-質問箱-は、匿名で質問をする＆質問を受け取れるサービスです。質問箱は5秒で作成完了。URLをTwitterやInstagramに投稿して、いろんな人の質問に回答しよう！"
        />
        <meta
          property="twitter:url"
          content="https://socailpractice.vercel.app/"
        />
        <meta property="twitter:site" content="@peing_net" />
        <meta property="twitter:domain" content="peing.net" />
      </Helmet>
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
