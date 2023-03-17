/** @format */

const Header = () => {
  return (
    <header className="header">
      <div>
        <h1 className="header__shop-name"> Fake Shop </h1>
      </div>

      <div className="header__cart">
        <a>Cart</a>
      </div>

      <div className="header__signIn">
        <a>Sign In</a>
      </div>
    </header>
  );
};

export default Header;
