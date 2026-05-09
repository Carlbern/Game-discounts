import style from "../styles/FreeDealStyle.module.css";
import { useState, useEffect } from "react";

function FreeDeal() {
  const [game, setPosts]: any = useState([]);

  useEffect(() => {
    fetch(
      "https://www.cheapshark.com/api/1.0/deals?sortBy=Recent&upperPrice=0&pageSize=1",
    )
      .then((response) => response.json())
      .then((json) => {
        setPosts(json);
      });
  }, []);

  return (
    <div className="main">
      {game.map((game: any) => (
        <div className={style.main}>
          {/*Bannern, vanligtvis på vänster sida */}
          <div
            className={style.banner}
            style={{ backgroundImage: `url(${game.thumb})` }}
          >
            {/*Ligger "över" bannern för att mörk bakgrund*/}
            <div className="gameText"></div>
            <div className={style.headers}>
              <h2>Gratis deal</h2>
              <p>Just nu</p>
            </div>
            <h3 className={style.title}>{game.title}</h3>
          </div>
          {/*Text med priser, vanligtvis på höger sida*/}
          <div className={style.prices}>
            <div className="orgPrices">
              <p className="orgPrice">Orginal pris: ${game.normalPrice}</p>
              <p className="saving">Rabatt: {Math.round(game.savings)}%</p>
            </div>
            <div className={style.priceButton}>
              <a
                className="link"
                href={`https://www.cheapshark.com/redirect?dealID=${game.dealID}`}
              >
                <button>Free</button>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default FreeDeal;
