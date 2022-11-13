import React from "react";
import { BlogFrame } from "../styles/HomeStyle";

const Blog = ({ blogs }) => {
  return (
    <BlogFrame>
      <div>
        <h2>{blogs.title}</h2>
        <p>
          <strong>snippet</strong>
          {blogs.snippet}
        </p>
        <p>
          <strong>description</strong>
          {blogs.body}
        </p>
      </div>
    </BlogFrame>
  );
};

export default Blog;
