import Header from "../components/Header";
import GameDeal from "../components/GameDeal";
import Footer from "../components/Footer";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import "../styles/GameStyle.css";

function Game() {
  const { id } = useParams<{ id: any }>();
  const [game, setGame]: any = useState([]);
  const [stores, setStores]: any = useState([]);

  useEffect(() => {
    fetch(`https://www.cheapshark.com/api/1.0/games?id=${id}`)
      .then((response) => response.json())
      .then((json) => {
        setGame(json);
      });
    console.log(game);
  }, []);

  useEffect(() => {
    fetch(`https://www.cheapshark.com/api/1.0/stores`)
      .then((response) => response.json())
      .then((json) => {
        setStores(json);
      });
    console.log(stores);
  }, []);
  return (
    <>
      <Header />
      {/*Övergripande div*/}
      {game.info && (
        <div className="gameMain">
          {/*Banner */}
          <div className="main gameBanner">
            <div className="titleimage">
              <h3>{game.info.title}</h3>
              <img src={game.info.thumb} alt="" />
              {/*Info om spel (bara dess betyg för tillfället) */}
            </div>

            <div className="info">
              <h4>Betyg:</h4>
              {game.deals[0] && (
                <div className="ratings">
                  {/*Steam*/}
                  <div className="steamRating">
                    <img
                      className="steamLogo"
                      src="/logos/steamLogo.png"
                      alt=""
                    />
                    <GameDeal
                      type="reviews"
                      platform="steam"
                      id={game.deals[0].dealID}
                    />
                  </div>
                  {/*Metacritic*/}
                  <div className="metaRating">
                    <img
                      className="metaLogo"
                      src="/logos/metacriticLogo.png"
                      alt=""
                    />
                    <GameDeal
                      type="reviews"
                      platform="metacritic"
                      id={game.deals[0].dealID}
                    />
                  </div>
                </div>
              )}
            </div>
            {/*Spelets bästa rabatt*/}
            <div className="bestDeal">
              <h4>Bästa deal</h4>
              <GameDeal
                className="bestDealImage"
                type="bestdeal"
                id={game.deals[0].dealID}
              />
              {/*Knapp*/}
              <a
                href={`https://www.cheapshark.com/redirect?dealID=${game.deals[0].dealID}`}
              >
                <button className="priceBtn">{game.deals[0].price}</button>
              </a>
            </div>
          </div>
          {/*Alla spelets rabatter i lista*/}
          <div className="main gameDeals">
            {game.deals && (
              <div className="deals">
                <h2>Spelets rabatter</h2>
                {/*Enskild rabatt*/}
                {game.deals.map((deal: any) => (
                  <div className="deal">
                    {stores[0] && (
                      <div className="store">
                        <h4>{stores[deal.storeID - 1].storeName}</h4>
                        <img
                          src={`https://www.cheapshark.com${
                            stores[deal.storeID - 1].images.logo
                          }`}
                          alt=""
                        />
                      </div>
                    )}
                    {/*Knapp*/}
                    <a
                      href={`https://www.cheapshark.com/redirect?dealID=${deal.dealID}`}
                    >
                      <button className="priceBtn listBtn">{deal.price}</button>
                    </a>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
      <div className="footerGame">
        <Footer />
      </div>
    </>
  );
}
export default Game;
