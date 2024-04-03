import { Link } from "react-router-dom";

const BlogList = ({ blogs, endIndex }) => {
  const featBlogs = blogs.slice(0, endIndex);

  return (
    <div className='blog-list row posts'>
      {featBlogs.map((blog) => (
        <Link to={`/blogs/${blog.id}`} className='post' key={blog.id}>
          <div className='post-img'>
            <img src={blog.postImg} alt='' />
          </div>
          <div className='post-details'>
            <div className='title-desc'>
              <h3 className='title'>{blog.title}</h3>
              <p className='desc'></p>
              <p>{blog.content.slice(0, 200)}</p>
            </div>
            <div className='author'>
              <img src={blog.postImg} alt='' />
              <p className='name'>{blog.authorName}</p>
              <p className='date'>{blog.date}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BlogList;
