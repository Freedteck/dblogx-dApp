import Article from "./Article";
import AuthorProfile from "./Authorprofile";
import TopIcons from "./Topicons";

const MainPost = ({ blog }) => {
  return (
    <div className='main-post'>
      <h2 className='title'>{blog.title}</h2>
      <AuthorProfile blog={blog} />
      <TopIcons />
      <div className='post-img'>
        <img src={blog.postImg} alt='' />
      </div>
      <Article blog={blog} />
      <div className='category-tab'>
        {blog.categories.map((blogCat, index) => (
          <p key={index}>{blogCat}</p>
        ))}
      </div>
    </div>
  );
};

export default MainPost;
