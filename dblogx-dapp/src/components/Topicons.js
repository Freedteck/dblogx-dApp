const TopIcons = () => {
  return (
    <div className='top-icons'>
      <div className='like-comment'>
        <div className='like'>
          <i className='fa-regular fa-thumbs-up' aria-hidden='true'></i>
          <div>5x</div>
        </div>
        <div className='comment'>
          <i className='fa-regular fa-comment' aria-hidden='true'></i>
          <div>100</div>
        </div>
      </div>
      <div className='book-share-tip'>
        <i className='fa-regular fa-bookmark' aria-hidden='true'></i>
        <i className='fa-regular fa-share-from-square' aria-hidden='true'></i>
        <i className='fa-brands fa-gratipay' aria-hidden='true'></i>
      </div>
    </div>
  );
};

export default TopIcons;
