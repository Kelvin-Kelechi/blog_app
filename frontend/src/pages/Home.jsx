import React, { useEffect } from "react";
import Blog from "../components/Blog";
import { BlogContextHooks } from "../hooks/blogHook";
import { BlogContainer } from "../styles/HomeStyle";
const Home = () => {
  const { blog, dispatch } = BlogContextHooks();

  useEffect(() => {
    const fetchBlog = async () => {
      const res = await fetch("/api/blog");
      const json = await res.json();
      if (res.ok) {
        dispatch({ type: "SET_BLOGS", payload: json });
      }
    };
    fetchBlog();
  }, [dispatch]);
  return (
    <div>
      <BlogContainer>
        {blog && blog.map((blogs) => ( <Blog key={blogs._id} blogs={blogs} />))}
      </BlogContainer>
    </div>
  );
};

export default Home;
