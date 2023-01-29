/** @format */

import Link from "next/link";

const Nav = ({ categoriesNames }) => {
  return (
    <nav className="nav">
      <ul>
        {categoriesNames?.map((categoryName) => (
          <li key={categoryName}>
            <Link href={`/categories/${categoryName}`}>{categoryName}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
