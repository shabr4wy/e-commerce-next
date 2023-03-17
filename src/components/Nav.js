/** @format */

import Link from "next/link";

const Nav = ({ categoriesNames }) => {
  return (
    <nav className="nav">
      <ul>
        {categoriesNames?.map((categoryName) => (
          <li className="Nav__categotryName" key={categoryName}>
            <Link
              className="Nav__categotryName__link"
              href={`/categories/${categoryName}`}
            >
              {categoryName}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
