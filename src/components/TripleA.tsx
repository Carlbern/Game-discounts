import { useState, useEffect } from "react";

import "../styles/TripleAStyle.css";

function TripleA() {
  const [games, setGames] = useState([]);
  {
    /*Hämtar de tre spel med bäst "rabattbetyg" som också är av typen AAA*/
  }
  useEffect(() => {
    fetch(
      "https://www.cheapshark.com/api/1.0/deals?AAA=1&sortBy=DealRating&pageSize=3"
    )
      .then((response) => response.json())
      .then((json) => {
        setGames(json);
      });
  }, []);

  return (
    <div className="main">
      <div className="headers">
        <h2>AAA-Spel</h2>
        <p>På rabatt just nu</p>
      </div>
      {/*Övergripande div*/}
      <div className="tripleA">
        {/*Div för enskilt spel*/}
        {games.map((game: any, index: any) => (
          <div
            key={index}
            className="game"
            style={{ backgroundImage: `url(${game.thumb})` }}
          >
            {/*Övergripande för texten*/}
            <div className="gameText">
              <h4>{game.title}</h4>
              <div className="prices">
                <p className="orgPrice">Original pris: ${game.normalPrice}</p>
                Pris:
                {/*Om spel är gratis*/}
                {Math.round(game.salePrice) == 0 && (
                  <a
                    href={`https://www.cheapshark.com/redirect?dealID=${game.dealID}`}
                  >
                    <button className="priceBtn"> Free</button>
                  </a>
                )}
                {/*Om spel INTE är gratis*/}
                {Math.round(game.salePrice) > 0 && (
                  <a
                    href={`https://www.cheapshark.com/redirect?dealID=${game.dealID}`}
                  >
                    <button className="priceBtn"> ${game.salePrice}</button>
                  </a>
                )}
              </div>
              <p className="saving">Rabatt: {Math.round(game.savings)}%</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default TripleA;
