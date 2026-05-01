import "../styles/ListSimpleStyle.css";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCertificate,
  faArrowTrendDown,
} from "@fortawesome/free-solid-svg-icons";

function ListSimple(props: any) {
  const [games, setGames]: any = useState([]);

  //För att hämta senaste rabatterna
  if (props.recent) {
    useEffect(() => {
      fetch("https://www.cheapshark.com/api/1.0/deals?sortBy=DealRating")
        .then((response) => response.json())
        .then((json) => {
          setGames(json);
        });
    }, []);

    //För att hämta rabatter med bäst spelbetyg
  } else if (props.reviews) {
    useEffect(() => {
      fetch("https://www.cheapshark.com/api/1.0/deals?sortBy=Metacritic")
        .then((response) => response.json())
        .then((json) => {
          setGames(json);
        });
    }, []);
    //För att hämta rabatter med störst mängd sparande
  } else if (props.top) {
    useEffect(() => {
      fetch("https://www.cheapshark.com/api/1.0/deals?sortBy=Savings")
        .then((response) => response.json())
        .then((json) => {
          setGames(json);
        });
    }, []);
  }
  console.log(games);
  return (
    <>
      {props.recent && <h3>Senaste rabatterna</h3>}
      {props.reviews && <h3>Bästa recensionner</h3>}
      {props.top && <h3>Bästa rabatterna</h3>}
      {/*Övergripande div*/}
      <div className="ListSimple">
        {/*Varje enskilt spel i listan*/}
        {games.map((game: any) => (
          <div className="gameListItem">
            {/*Left side of list item */}
            <div className="leftSide">
              <img src={game.thumb} alt="" />
            </div>
            {/*Right side of list item */}
            <div className="rightSide">
              {/*Speltitel */}
              <h4>{game.title}</h4>
              {/*Icon och pris */}
              {props.recent && (
                <div className="pricesList">
                  {/*Bilden syns enbart i mobilvy */}
                  <img src={game.thumb} className="mobileViewImage" />
                  <p>
                    <span>
                      <FontAwesomeIcon icon={faArrowTrendDown} />
                      <span> </span>
                    </span>
                    {/*Pris */}
                    {Math.round(game.savings)}%
                  </p>
                  {/*Knapp */}
                  <a
                    href={`https://www.cheapshark.com/redirect?dealID=${game.dealID}`}
                  >
                    {Math.round(game.salePrice) == 0 && (
                      <button className="priceBtn listBtn">Free</button>
                    )}
                    {Math.round(game.salePrice) > 0 && (
                      <button className="priceBtn listBtn">
                        ${game.salePrice}
                      </button>
                    )}
                  </a>
                </div>
              )}
              {props.top && (
                <div className="pricesList">
                  <img src={game.thumb} className="mobileViewImage" />
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
                      <button className="priceBtn listBtn">Free</button>
                    )}
                    {Math.round(game.salePrice) > 0 && (
                      <button className="priceBtn listBtn">
                        ${game.salePrice}
                      </button>
                    )}
                  </a>
                </div>
              )}
              {props.reviews && (
                <div className="pricesList">
                  <img src={game.thumb} className="mobileViewImage" />
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
                    <button className="priceBtn listBtn">
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
