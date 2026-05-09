import { useState, useEffect } from "react";

import style from "../styles/TripleAStyle.module.css";

function TripleA() {
  const [games, setGames] = useState([]);
  {
    /*Hämtar de tre spel med bäst "rabattbetyg" som också är av typen AAA*/
  }
  useEffect(() => {
    fetch(
      "https://www.cheapshark.com/api/1.0/deals?AAA=1&sortBy=DealRating&pageSize=3",
    )
      .then((response) => response.json())
      .then((json) => {
        setGames(json);
      });
  }, []);

  return (
    <div className="main">
      <div className={style.headers}>
        <h2 className={style.h2}>AAA-Spel</h2>
        <p>På rabatt just nu</p>
      </div>
      {/*Övergripande div*/}
      <div className={style.tripleA}>
        {/*Div för enskilt spel*/}
        {games.map((game: any, index: any) => (
          <div
            key={index}
            className={style.game}
            style={{ backgroundImage: `url(${game.thumb})` }}
          >
            {/*Övergripande för texten*/}
            <div className={style.gameText}>
              <h4>{game.title}</h4>
              <div className={style.prices}>
                <p className={style.orgPrice}>
                  Original pris: ${game.normalPrice}
                </p>
                Pris:
                {/*Om spel är gratis*/}
                {Math.round(game.salePrice) == 0 && (
                  <a
                    href={`https://www.cheapshark.com/redirect?dealID=${game.dealID}`}
                  >
                    <button className={style.priceBtn}> Free</button>
                  </a>
                )}
                {/*Om spel INTE är gratis*/}
                {Math.round(game.salePrice) > 0 && (
                  <a
                    href={`https://www.cheapshark.com/redirect?dealID=${game.dealID}`}
                  >
                    <button className={style.priceBtn}>
                      {" "}
                      ${game.salePrice}
                    </button>
                  </a>
                )}
              </div>
              <p className={style.saving}>
                Rabatt: {Math.round(game.savings)}%
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default TripleA;
