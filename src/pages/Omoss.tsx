import Header from "../components/Header";
import Footer from "../components/Footer";
import style from "../styles/OmossStyle.module.css";

function Omoss() {
  return (
    <>
      <Header />
      <div className={`main ${style.omMain}`}>
        <div className={style.siteDesc}>
          <h2>Om sidan</h2>
          <p className={style.p}>
            Denna sidan är skapad i syfte att mäkla rabatter från massa olika
            återförsäljare. Du kan på sidan söka efter specifika spel för att
            upptäcka potetiella rabatter, du kan också på landningssidan hitta
            diverse rabatter som vi tycker är speciellt intressanta.
          </p>
          <p className={style.p}>
            Sidan är skapad med hjälp av ramverket{" "}
            <a href="https://react.dev/">React</a> och dess tillägg{" "}
            <a href="https://reactrouter.com/">react-router</a>
          </p>
        </div>
        <div className={style.apiInfo}>
          <h2>API</h2>
          <p className={style.p}>
            Sidan använder sig av Rest API:et{" "}
            <a href="https://reactrouter.com/">Cheapshark</a>, ett API för
            prisjämförelse online.
          </p>
          <p className={style.p}>
            Man kan bland annat söka efter spel genom dess namn eller id eller
            söka efter rabatter givet filter och sortering.
          </p>
        </div>
      </div>
      <div className={style.footer}>
        <Footer />
      </div>
    </>
  );
}
export default Omoss;
