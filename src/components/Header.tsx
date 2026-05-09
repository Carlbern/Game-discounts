import style from "../styles/HeaderStyle.module.css";
import { Link } from "react-router";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Header(props: any) {
  const [search, setSearch]: any = useState("");
  const navigate = useNavigate();

  //Används för att uppdatera search information i Input
  const updateInputChange = (e: any) => {
    setSearch(e.target.value);
  };
  //Navigerar till ny sida vid tryck av "Enter"
  const registerKeyDown = (e: any, navigation: any) => {
    if (e.key === "Enter") {
      navigate(`/search/${navigation.search}`);
    }
  };
  return (
    <div className="main">
      {/*Visar sidrubrik */}
      {props.main && <h1>Spelrabatter.se</h1>}
      <section className={style.section}>
        <div className="EMPTY-FILLER"></div>
        <nav className={style.nav}>
          <Link className={style.link} to="/">
            Hem
          </Link>
          <Link className={style.link} to="/search">
            Top Rabatter
          </Link>
          <Link className={style.link} to="/omoss">
            Om oss
          </Link>
        </nav>
        {/*Sök input och knapp*/}
        <div className={style.search}>
          <input
            onKeyDown={(e) => registerKeyDown(e, { search })}
            type="text"
            value={search}
            onChange={updateInputChange}
          />

          <Link to={`/search/${search}`}>
            <button>Sök</button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Header;
