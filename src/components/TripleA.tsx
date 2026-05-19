import { useState, useEffect } from "react";
import { OrbitProgress } from "react-loading-indicators";
import style from "../styles/TripleAStyle.module.css";

function TripleA() {
  const url =
    "https://www.cheapshark.com/api/1.0/deals?AAA=1&sortBy=DealRating&pageSize=9";

  const [isLoading, setIsLoading]: any = useState(true);
  const [, setGames] = useState([]);
  const [filteredGames, setFilteredGames]: any = useState([]);
  {
    /*Fetches top AAA games from API, to be filtered later*/
  }
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setIsLoading(false);
        setGames(json);
        setFilteredGames(
          Array.from(
            new Map(
              json.map((item: { title: any }) => [item.title, item]),
            ).values(),
          ),
        );
      });
  }, []);

  return (
    <div className="main">
      <div className={style.headers}>
        <h2 className={style.h2}>AAA-Spel</h2>
        <p>På rabatt just nu</p>
      </div>
      {/*Overarching div*/}
      <div className={style.tripleA}>
        {isLoading && (
          <OrbitProgress
            color="rgb(168, 248, 232)"
            size="medium"
            text=""
            textColor=""
          />
        )}
        {/*Div for individual game*/}
        {/*Max 3 games printed*/}
        {filteredGames.slice(0, 3).map((game: any, index: any) => (
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
