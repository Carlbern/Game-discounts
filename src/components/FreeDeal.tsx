import style from "../styles/FreeDealStyle.module.css";
import { OrbitProgress } from "react-loading-indicators";
import { useState, useEffect } from "react";

function FreeDeal() {
  const url =
    "https://www.cheapshark.com/api/1.0/deals?sortBy=Recent&upperPrice=0&pageSize=1";
  const [game, setPosts]: any = useState([]);
  const [isLoading, setIsLoading]: any = useState(true);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setIsLoading(false);
        setPosts(json);
      });
  }, []);

  return (
    <div className="main">
      {isLoading && (
        <OrbitProgress
          color="rgb(168, 248, 232)"
          size="medium"
          text=""
          textColor=""
        />
      )}
      {game.map((game: any) => (
        <div className={style.main}>
          {/*Banner, usually on the left side */}
          <div
            className={style.banner}
            style={{ backgroundImage: `url(${game.thumb})` }}
          >
            {/*Is in front of banner to create dark filter*/}
            <div className="gameText"></div>
            <div className={style.headers}>
              <h2>Free deal</h2>
              <p>Right now!</p>
            </div>
            <h3 className={style.title}>{game.title}</h3>
          </div>
          {/*Text with prices, usually on right side*/}
          <div className={style.prices}>
            <div className="orgPrices">
              <p className="orgPrice">Original price: ${game.normalPrice}</p>
              <p className="saving">Discount: {Math.round(game.savings)}%</p>
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
