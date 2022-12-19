import React from "react";
import BlogWrapper from "../../UI/BlogWrapper";
import "./Blog.scss";

const Blog = () => {
  return (
    <BlogWrapper>
      <div id="blog" className="blog">
        <h1>Blog</h1>
        <p>
          Bonjour:)!, you can keep tracking what I'm working on and learning
          with this section. I will update this Blog every time that I'm
          learning, creating !
        </p>
      </div>
    </BlogWrapper>
  );
};

export default Blog;
