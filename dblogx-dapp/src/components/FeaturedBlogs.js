import { useState } from "react";
import BlogList from "./Bloglist";
import useFetch from "../hooks/useFetch";

const FeaturedBlogs = () => {
  const [endIndex, setEndIndex] = useState(3);

  const handleExplpore = () => {
    setEndIndex(endIndex + 3);
  };

  const { data: blogs, isPending, error } = useFetch("http://localhost:8000/blogs");
  return (
    <div className='featured-content main-container'>
      <h2>Featured Content</h2>
      {error && <div style = {{color: 'red', textAlign: "center", fontSize: '1.5rem'}}>{ error }</div>}
      {isPending && <div style = {{color: 'green', textAlign: "center", fontSize: '1.5rem'}}>Loading...</div>}
      {blogs && <BlogList blogs={blogs} endIndex={endIndex} />}

      <a
        href='/'
        className='btn btn-colored'
        id='explore'
        onClick={(e) => {
          e.preventDefault();
          handleExplpore();
        }}>
        Explore more content
      </a>
    </div>
  );
};

export default FeaturedBlogs;
