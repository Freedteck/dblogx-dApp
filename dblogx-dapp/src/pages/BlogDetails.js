import { useParams } from "react-router-dom";
import MainPost from "../components/MainPost";
import useFetch from "../hooks/useFetch";
import SubPost from "../components/SubPost";
import MoreByAuthor from "../components/MoreByAuthor";

const BlogDetails = () => {
    const { id } = useParams();
    const {data:blog, error, isPending} = useFetch('http://localhost:8000/blogs/' + id)
    const {data:blogs, error:errors, isPending: isPendings} = useFetch('http://localhost:8000/blogs')
  return (
    <div className='container post-cont'>
      {error && <div style = {{color: 'red', textAlign: "center", fontSize: '1.5rem'}}>{ error }</div>}
      {isPending && <div style = {{color: 'green', textAlign: "center", fontSize: '1.5rem'}}>Loading...</div>}
      {blog && <MainPost blog={blog}/>}
      {blog && <SubPost blog={blog} />}
      {blogs && <MoreByAuthor blog={blog} blogs={blogs}/>}
    </div>
  );
};

export default BlogDetails;
