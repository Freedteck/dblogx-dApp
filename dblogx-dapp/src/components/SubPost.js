import AuthorComment from "./AuthorComment";

const SubPost = ({blog}) => {
    return ( 
        <div className="sub">
            <AuthorComment blog={blog} />
        </div>
     );
}
 
export default SubPost 