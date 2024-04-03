import BlogList from "./Bloglist";

const MoreByAuthor = ({ blog, blogs }) => {
  return (
    <div className='more'>
      <div className='more-post'>
        <p>More from {blog.authorName}</p>
        {blogs && <BlogList blog={blog} blogs={blogs} endIndex={2} />}
      </div>
    </div>
  );
};

export default MoreByAuthor;
