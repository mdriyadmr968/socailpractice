import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { FacebookShareButton, TwitterShareButton } from "react-share";
import { FacebookIcon, TwitterIcon } from "react-share";

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
      {/* Helmet */}
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

      {/* Facebook & twitter share button  */}
      <FacebookShareButton
        url={"https://socailpractice.vercel.app/"}
        quote={"Testing facebook share"}
        hashtag={"#hashtag"}
        description={"aiueo"}
        className="Demo__some-network__share-button"
      >
        <FacebookIcon size={32} round /> Facebookでshare
      </FacebookShareButton>
      <br />
      <TwitterShareButton
        title={"test"}
        url={"https://peing.net/ja/"}
        hashtags={["hashtag1", "hashtag2"]}
      >
        <TwitterIcon size={32} round />
        Twitterでもshare
      </TwitterShareButton>
      <a href="/">Home</a>
      <h1 style={{ marginTop: "2%" }}>Title: {post?.title}</h1>
      <h3>Category: {post?.category}</h3>
      <h1>Description</h1>

      <div>{post?.description}</div>
    </div>
  );
};
export default Post;
