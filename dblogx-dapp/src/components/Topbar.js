import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <div className='top-tab'>
      <ul>
        <li>
          <Link to='/following'>Following</Link>
        </li>
        <li>
          <Link to='/trending'>Trending</Link>
        </li>
        <li>
          <Link to='/recent'>Recent</Link>
        </li>
      </ul>
    </div>
  );
};

export default Topbar;
