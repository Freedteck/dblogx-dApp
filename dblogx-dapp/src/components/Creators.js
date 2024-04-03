const Creators = () => {
  return (
    <div className='top-creators main-container'>
      <h2>Top Creators</h2>
      <div className='row'>
        <div className='img'>
          <img src='src/image.png' alt='' />
        </div>
        <div className='details'>
          <h3>Artsy Ashley</h3>
          <p>
            ArtsyAshley is a passionate artist who loves to inspire others with
            her vibrant acrylic paintings and creative tutorials.
          </p>
          <div className='follow'>
            <i className='fa-solid fa-user-plus'></i>
            <p>Follow</p>
          </div>
        </div>
      </div>
      <nav className='content-nav'>
        <i className='fa-solid fa-arrow-left'></i>
        <i className='fa-solid fa-arrow-right'></i>
      </nav>
    </div>
  );
};

export default Creators;
