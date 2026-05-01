import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { Link } from "react-router";
import "../styles/SearchStyle.css";
import Header from "../components/Header";
import ListSimple from "../components/ListSimple";
import Footer from "../components/Footer";

function Search() {
  const { title } = useParams<{ title: any }>();
  const [games, setGames]: any = useState([]);

  //Hämtar alla spel efter sökning av dess titel
  useEffect(() => {
    fetch(`https://www.cheapshark.com/api/1.0/games?title=${title}`)
      .then((response) => response.json())
      .then((json) => {
        setGames(json);
      });
    console.log(games);
  }, [title]);

  return (
    <>
      <Header />
      <div className="main">
        {title ? (
          <div className="gamesSearch">
            <h2>Sökresultat</h2>
            {games.length > 0 ? (
              <div>
                {/*Enskilt spel */}
                {games.map((game: any, index: any) => (
                  <div key={index} className="gameSearch">
                    <h3>{game.external}</h3>
                    <div className="searchImage">
                      <img src={game.thumb} alt="" />
                    </div>
                    {/*Knapp*/}
                    <Link className="searchBtn" to={`/game/${game.gameID}`}>
                      <button className="priceBtn listBtn">Gå till spel</button>
                    </Link>
                  </div>
                ))}
              </div>
            ) : (
              <h3 className="noResult">Inga sökresultat</h3>
            )}
          </div>
        ) : (
          <ListSimple top />
        )}
      </div>
      <Footer />
    </>
  );
}
export default Search;
