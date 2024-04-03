import { Link } from "react-router-dom";

const AuthorComment = ({ blog }) => {
  return (
    <div className='author-comment'>
      <div className='author-deets'>
        <div className='author'>
          <div className='img'>
            <img src={blog.authorImg} alt='' />
          </div>
          <div className='writer'>
            <p className='written'>WRITTEN BY</p>
            <p>{blog.authorName}</p>
          </div>
        </div>
        <p>
          {blog.about}
        </p>
      </div>
      <div className='comments'>
        <p>Join the conversation</p>
        <div className='img-text-btn'>
          <div className='img-text'>
            <div className='img'>
              <i className='fa-solid fa-user' aria-hidden='true'></i>
            </div>
            <textarea
              name=''
              id=''
              cols='30'
              rows='10'
              placeholder='Comment'></textarea>
          </div>
          <Link className='btn btn-colored' to='/'>
            Respond
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AuthorComment;
