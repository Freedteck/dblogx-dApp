import Categories from "./Categories";
import TopBrand from "./Topbrand";

const SideBar = ({ blogs }) => {
  return (
    <div className='sidebar'>
      <TopBrand />
      <Categories blogs={blogs} />
    </div>
  );
};

export default SideBar;
