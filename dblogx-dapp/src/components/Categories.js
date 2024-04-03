const Categories = ({ blogs }) => {
  const allCategories = [];

  const getCat = () => {
    for (let i = 0; i < blogs.length; i++) {
      for (let j of blogs[i].categories) {
        if (!allCategories.includes(j)) {
          allCategories.push(j);
        }
      }
    }
    return allCategories;
  };

  const categories = getCat();

  return (
    <div className='categories'>
      <h3>CATEGORIES</h3>
      <ul className='cat-list'>
        {categories.map((category, index) => (
          <li className={`category ${index === 0 ? "active" : ""}`} key={index}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
