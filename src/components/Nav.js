/** @format */

const Nav = ({ categoriesNames }) => {
  return (
    <nav className="nav">
      <ul>
        {categoriesNames?.map((categoryName) => (
          <li key={categoryName}>{categoryName}</li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
