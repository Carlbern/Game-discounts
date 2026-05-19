import Header from "../components/Header";
import GameDeal from "../components/GameDeal";
import Footer from "../components/Footer";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import style from "../styles/GameStyle.module.css";
import { OrbitProgress } from "react-loading-indicators";

function Game() {
  const { id } = useParams<{ id: any }>();
  const urlGame = `https://www.cheapshark.com/api/1.0/games?id=${id}`;
  const urlStores = `https://www.cheapshark.com/api/1.0/stores`;

  const [game, setGame]: any = useState([]);
  const [stores, setStores]: any = useState([]);
  const [isLoadingGame, setIsLoadingGame]: any = useState(true);
  const [isLoadingStores, setIsLoadingStores]: any = useState(true);

  useEffect(() => {
    fetch(urlGame)
      .then((response) => response.json())
      .then((json) => {
        setIsLoadingGame(false);
        setGame(json);
      });
    console.log(game);
  }, []);

  useEffect(() => {
    fetch(urlStores)
      .then((response) => response.json())
      .then((json) => {
        setIsLoadingStores(false);
        setStores(json);
      });
    console.log(stores);
  }, []);
  return (
    <>
      <Header />
      {/*Overarching div*/}
      {isLoadingGame && (
        <div className={`main ${style.main}`}>
          <OrbitProgress
            color="rgb(168, 248, 232)"
            size="medium"
            text=""
            textColor=""
          />
        </div>
      )}
      {game.info && (
        <div className={`${style.main}`}>
          {/*Banner */}
          <div className={`main ${style.banner}`}>
            <div className={style.titleimage}>
              <h3>{game.info.title}</h3>
              <img src={game.info.thumb} alt="" />
              {/*Info om spel (bara dess betyg för tillfället) */}
            </div>

            <div className={style.info}>
              <h4>Betyg:</h4>
              {game.deals[0] && (
                <div className={style.info}>
                  {/*Steam*/}
                  <div className={style.steamRating}>
                    <img
                      className={style.steamLogo}
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
                  <div className={style.metaRating}>
                    <img
                      className={style.metaLogo}
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
            <div className={style.bestDeal}>
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
                <button className={style.priceBtn}>
                  {game.deals[0].price}
                </button>
              </a>
            </div>
          </div>
          {/*Alla spelets rabatter i lista*/}
          {isLoadingStores ? (
            <div className={`main ${style.gameDeals}`}>
              <OrbitProgress
                color="rgb(168, 248, 232)"
                size="medium"
                text=""
                textColor=""
              />
            </div>
          ) : (
            <div className={`main ${style.gameDeals}`}>
              {game.deals && (
                <div className={style.deals}>
                  <h2>Spelets rabatter</h2>
                  {/*Enskild rabatt*/}
                  {game.deals.map((deal: any) => (
                    <div className={style.deal}>
                      {stores[0] && (
                        <div className={style.store}>
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
                        <button
                          className={`${style.listBtn} ${style.priceBtn}`}
                        >
                          {deal.price}
                        </button>
                      </a>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      )}
      <div className={style.footer}>
        <Footer />
      </div>
    </>
  );
}
export default Game;
