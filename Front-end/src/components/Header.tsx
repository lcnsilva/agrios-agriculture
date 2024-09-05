import logo from "../assets/logo.png";
import lupa from "../assets/lupa.png";
import carrinho from "../assets/carrinho.png";
import "./Header.scss";

function Header() {
  return (
    <header>
      <img src={logo} alt="logo" />
      <ul>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Services</a>
        </li>
        <li>
          <a href="">Projects</a>
        </li>
        <li>
          <a href="">News</a>
        </li>
        <li>
          <a href="">Shop</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
      </ul>
      <div className="pesquisa">
        <a href=""><img src={lupa} alt="lupinha de pesquisa" /></a>
        <a href=""><img src={carrinho} alt="carrinho de compra" /></a>
      </div>
    </header>
  );
}

export default Header;
