import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/OmossStyle.css";

function Omoss() {
  return (
    <>
      <Header />
      <div className="main omMain">
        <div className="siteDesc">
          <h2>Om sidan</h2>
          <p>
            Denna sidan är skapad i syfte att mäkla rabatter från massa olika
            återförsäljare. Du kan på sidan söka efter specifika spel för att
            upptäcka potetiella rabatter, du kan också på landningssidan hitta
            diverse rabatter som vi tycker är speciellt intressanta.
          </p>
          <p>
            Sidan är skapad med hjälp av ramverket{" "}
            <a href="https://react.dev/">React</a> och dess tillägg{" "}
            <a href="https://reactrouter.com/">react-router</a>
          </p>
        </div>
        <div className="apiInfo">
          <h2>API</h2>
          <p>
            Sidan använder sig av Rest API:et{" "}
            <a href="https://reactrouter.com/">Cheapshark</a>, ett API för
            prisjämförelse online.
          </p>
          <p>
            Man kan bland annat söka efter spel genom dess namn eller id eller
            söka efter rabatter givet filter och sortering.
          </p>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
}
export default Omoss;
