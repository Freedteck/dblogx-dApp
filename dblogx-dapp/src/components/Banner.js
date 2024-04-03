import image from "../image.png";

const Banner = () => {
  return (
    <div className='main-container banner'>
      <div className='banner-desc'>
        <h2>
          Own Your Voice,
          <br />
          Empower Your Creativity
        </h2>
        <p>Empowering Creators with Decentralization and Direct Monetization</p>
        <div className='join-explore'>
          <a href='/' className='join btn btn-colored'>
            Join DBlogX
          </a>
          <a href='/' className='btn explore' id='show-blogs'>
            Explore content
          </a>
        </div>
      </div>
      <div className='banner-img'>
        <img src={image} alt={'banner'} />
      </div>
    </div>
  );
};

export default Banner;
