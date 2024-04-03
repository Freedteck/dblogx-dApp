const AuthorProfile = ({ blog }) => {
  return (
    <div className='author-profile'>
      <div className='author'>
        <div className='img'>
          <img src={blog.authorImg} alt='' />
        </div>
        <div className='name-date'>
          <p className='name'>{blog.authorName}</p>
          <p className='date'>{blog.date}</p>
        </div>
      </div>
      <div className='follow'>
        <i className='fa-solid fa-user-plus' aria-hidden='true'></i>
        <p>Follow</p>
      </div>
    </div>
  );
};

export default AuthorProfile;
