import { useState, useEffect } from "react";
import style from "../styles/gameDealStyle.module.css";

function GameDeal(props: any) {
  const [bestDeal, setDeal]: any = useState([]);
  const [stores, setStores]: any = useState([]);

  //Hämtar specifik rabatt efter dess ID
  useEffect(() => {
    fetch(`https://www.cheapshark.com/api/1.0/deals?id=${props.id}`)
      .then((response) => response.json())
      .then((json) => {
        setDeal(json);
      });
  }, [props.id]);
  console.log(bestDeal);

  //Hämtar alla butiker och dess information
  useEffect(() => {
    fetch(`https://www.cheapshark.com/api/1.0/stores`)
      .then((response) => response.json())
      .then((json) => {
        setStores(json);
      });
    console.log(stores);
  }, [bestDeal]);

  //Hämta information om spelets recensioner
  if (props.type == "reviews") {
    return (
      <>
        <div>
          {props.platform == "steam" && (
            <div>
              {bestDeal?.gameInfo !== undefined && (
                <p>{bestDeal.gameInfo.steamRatingPercent}%</p>
              )}
            </div>
          )}
          {props.platform == "metacritic" && (
            <div>
              {bestDeal?.gameInfo !== undefined ? (
                <div>
                  {bestDeal.gameInfo.metacriticScore == 0 && <p>n/a</p>}
                  {bestDeal.gameInfo.metacriticScore > 0 && (
                    <p>{bestDeal.gameInfo.metacriticScore}%</p>
                  )}
                </div>
              ) : (
                <p>n/a</p>
              )}
            </div>
          )}
        </div>
      </>
    );
  }
  //Hämtar spelets bästa rabatt
  else if (props.type == "bestdeal") {
    return (
      <>
        <div className={style.image}>
          {stores[0]?.images !== undefined &&
            bestDeal.gameInfo !== undefined && (
              <img
                src={`https://www.cheapshark.com${
                  stores[bestDeal.gameInfo.storeID - 1].images.logo
                }`}
                alt=""
              />
            )}
        </div>
      </>
    );
  }
}
export default GameDeal;
