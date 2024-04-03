import { Link } from "react-router-dom";

const TopBrand = () => {
  return (
    <div className='top-brand'>
      <h2 className='logo'>DBlogX</h2>
      <p>We empower creators with decentralization and direct monetization</p>
      <Link to="" className="btn btn-colored sign-up">Connect</Link>
    </div>
  );
};

export default TopBrand;
