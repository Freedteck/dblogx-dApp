import AboutBlog from "../components/AboutBlog";
import Banner from "../components/Banner";
import Creators from "../components/Creators";
import FeaturedBlogs from "../components/FeaturedBlogs";
import How from "../components/How";
import Lower from "../components/Lower";

const Home = () => {
  return (
    <div className='homepage'>
      <Banner />
      <AboutBlog />
      <FeaturedBlogs />
      <How />
      <Creators />
      <Lower />
    </div>
  );
};

export default Home;
