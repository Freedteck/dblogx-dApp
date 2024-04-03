import { Link } from "react-router-dom";
import BlogList from "./Bloglist";
import Topbar from "./Topbar";

const MainBar = ({ blogs, endIndex, handleExplore }) => {
  return (
    <div className='main-bar'>
      <Topbar />
      <BlogList blogs={blogs} endIndex={endIndex} />
      <Link
        to=''
        className='btn btn-colored'
        id='explore'
        onClick={(e) => {e.preventDefault()
        handleExplore()}}>
        Load more
      </Link>
    </div>
  );
};

export default MainBar;
