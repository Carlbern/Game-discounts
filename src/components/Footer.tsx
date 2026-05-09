import style from "../styles/FooterStyle.module.css";
import { Link } from "react-router";

function Footer() {
  return (
    <div className={`main ${style.main}`}>
      {/*Navigation */}
      <ul className={`${style.footerUl}`}>
        <h4>Navigation</h4>
        <li>
          <Link to="/">Hem</Link>
        </li>
        <li>
          <Link to="/search">Top rabatter</Link>
        </li>
        <li>
          <Link to="Omoss">Om oss</Link>
        </li>
      </ul>
      {/*Powered by message */}
      <div>
        <p>
          Powered by: <a href="https://www.cheapshark.com/">Cheapshark</a>
        </p>
      </div>
      <div className="EMPTY-FILLER"></div>
    </div>
  );
}
export default Footer;
