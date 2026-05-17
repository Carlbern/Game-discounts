import style from "../styles/ListSimpleStyle.module.css";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCertificate,
  faArrowTrendDown,
} from "@fortawesome/free-solid-svg-icons";

function ListSimple(props: any) {
  const [games, setGames]: any = useState([]);
  const [filteredGames, setFilteredGames]: any = useState([]);
  const [listLength, setListLength] = useState(10);

  useEffect(() => {
    let url = "";
    if (props.recent) {
      setListLength(10);
      url = "https://www.cheapshark.com/api/1.0/deals?sortBy=DealRating";
    } else if (props.reviews) {
      setListLength(10);
      url = "https://www.cheapshark.com/api/1.0/deals?sortBy=Metacritic";
    } else if (props.top) {
      setListLength(100);
      url = "https://www.cheapshark.com/api/1.0/deals?sortBy=Savings";
    } else {
      return;
    }

    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setGames(json);
        setFilteredGames(
          Array.from(
            new Map(
              json.map((item: { title: any }) => [item.title, item]),
            ).values(),
          ),
        );
      });
    console.log(filteredGames); // Log once per fetch
  }, [props.recent, props.reviews, props.top]);

  return (
    <>
      {props.recent && <h3>Senaste rabatterna</h3>}
      {props.reviews && <h3>Bästa recensionner</h3>}
      {props.top && <h3>Bästa rabatterna</h3>}
      {/*Overarching div*/}
      <div className={style.ListSimple}>
        {/*Every individual game in list*/}
        {/*Maximum 10 items printed*/}
        {filteredGames.slice(0, listLength).map((game: any) => (
          <div className={style.gameListItem}>
            {/*Left side of list item */}
            <div className={style.leftSide}>
              <img src={game.thumb} alt="" />
            </div>
            {/*Right side of list item */}
            <div className={style.rightSide}>
              {/*Game title*/}
              <h4>{game.title}</h4>
              {/*Icon and price */}
              {props.recent && (
                <div className={style.prices}>
                  {/*Image only shown in mobile-view */}
                  <img src={game.thumb} className={style.mobileViewImage} />
                  <p>
                    <span>
                      <FontAwesomeIcon icon={faArrowTrendDown} />
                      <span> </span>
                    </span>
                    {/*Price */}
                    {Math.round(game.savings)}%
                  </p>
                  {/*Button */}
                  <a
                    href={`https://www.cheapshark.com/redirect?dealID=${game.dealID}`}
                  >
                    {Math.round(game.salePrice) == 0 && (
                      <button className={`${style.priceBtn} ${style.listBtn}`}>
                        Free
                      </button>
                    )}
                    {Math.round(game.salePrice) > 0 && (
                      <button className={`${style.priceBtn} ${style.listBtn}`}>
                        ${game.salePrice}
                      </button>
                    )}
                  </a>
                </div>
              )}
              {props.top && (
                <div className={style.prices}>
                  <img src={game.thumb} className={style.mobileViewImage} />
                  <p>
                    <span>
                      <FontAwesomeIcon icon={faArrowTrendDown} />
                      <span> </span>
                    </span>
                    {Math.round(game.savings)}%
                  </p>
                  <a
                    href={`https://www.cheapshark.com/redirect?dealID=${game.dealID}`}
                  >
                    {Math.round(game.salePrice) == 0 && (
                      <button className={`${style.priceBtn} ${style.listBtn}`}>
                        Free
                      </button>
                    )}
                    {Math.round(game.salePrice) > 0 && (
                      <button className={`${style.priceBtn} ${style.listBtn}`}>
                        ${game.salePrice}
                      </button>
                    )}
                  </a>
                </div>
              )}
              {props.reviews && (
                <div className={style.prices}>
                  <img src={game.thumb} className={style.mobileViewImage} />
                  <p>
                    <span>
                      <FontAwesomeIcon icon={faCertificate} />
                      <span> </span>
                    </span>
                    {Math.round(game.metacriticScore)}
                  </p>
                  <a
                    href={`https://www.cheapshark.com/redirect?dealID=${game.dealID}`}
                  >
                    <button className={`${style.priceBtn} ${style.listBtn}`}>
                      ${game.salePrice}
                    </button>
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
export default ListSimple;
