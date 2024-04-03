const How = () => {
  return (
    <div className='how main-container'>
      <h2>How It Works</h2>
      <div className='row'>
        <div className='card'>
          <div className='icon-header-desc'>
            <div className='icon'>
              <i className='fa-solid fa-handshake'></i>
            </div>
            <div className='header-desc'>
              <h3>Sign Up Securely with ICP</h3>
              <p>
                No lengthy registration forms! Leverage your existing ICP
                Internet Identity for secure and easy signup on DBlogX.
              </p>
            </div>
          </div>
          <a href='/' className='btn btn-colored'>
            Learn More
          </a>
        </div>

        <div className='card'>
          <div className='icon-header-desc'>
            <div className='icon'>
              <i className='fa-solid fa-magnifying-glass'></i>
            </div>
            <div className='header-desc'>
              <h3>Discover & Follow</h3>
              <p>
                Explore a diverse range of content across various categories and
                find creators you resonate with. Follow them to stay updated on
                their latest posts.
              </p>
            </div>
          </div>
          <a href='/' className='btn btn-colored'>
            Learn More
          </a>
        </div>

        <div className='card'>
          <div className='icon-header-desc'>
            <div className='icon'>
              <i className='fa-solid fa-plus'></i>
            </div>
            <div className='header-desc'>
              <h3>Create & Share</h3>
              <p>
                Unleash your creativity with our user-friendly blog post
                creation interface and craft compelling content.
              </p>
            </div>
          </div>
          <a href='/' className='btn btn-colored'>
            Learn More
          </a>
        </div>

        <div className='card'>
          <div className='icon-header-desc'>
            <div className='icon'>
              <i className='fa-solid fa-comment'></i>
            </div>
            <div className='header-desc'>
              <h3>Engage & Connect</h3>
              <p>
                Join the conversation by leaving comments on posts you find
                interesting and upvote thoughtful comments to elevate valuable
                discussions within the community.
              </p>
            </div>
          </div>
          <a href='/' className='btn btn-colored'>
            Learn More
          </a>
        </div>

        <div className='card'>
          <div className='icon-header-desc'>
            <div className='icon'>
              <i className='fa-solid fa-hand-holding-dollar'></i>
            </div>
            <div className='header-desc'>
              <h3>Monetize Your Work (Optional)</h3>
              <p>
                Enable ICP tipping directly on your posts, allowing your
                audience to support your work financially. Place targeted
                advertisements within your content for a small fee (in ICP) and
                share revenue with DBlogX.
              </p>
            </div>
          </div>
          <a href='/' className='btn btn-colored'>
            Learn More
          </a>
        </div>

        <div className='card'>
          <div className='icon-header-desc'>
            <div className='icon'>
              <i className='fa-solid fa-money-bill-transfer'></i>
            </div>
            <div className='header-desc'>
              <h3>Withdraw & Earn</h3>
              <p>
                Seamlessly withdraw your ICP earnings from tips and
                advertisement revenue share directly to your ICP wallet.
              </p>
            </div>
          </div>
          <a href='/' className='btn btn-colored'>
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default How;
