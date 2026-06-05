import Header from "../components/Header";
import Footer from "../components/Footer";
import style from "../styles/AboutStyle.module.css";

function Omoss() {
  return (
    <>
      <Header />
      <div className={`main ${style.omMain}`}>
        <div className={style.siteDesc}>
          <h2>About the website</h2>
          <p className={style.p}>
            This website is create for the purpose of brokering discounts from
            many resellers. You can on the website search for specific games in
            order to discover potential discoutns. You can also find
            miscellaneous discounts that we find particularly interesting.
          </p>
          <p className={style.p}>
            The website is created using the{" "}
            <a href="https://react.dev/">React</a> framework and its library{" "}
            <a href="https://reactrouter.com/">react-router</a>
          </p>
        </div>
        <div className={style.apiInfo}>
          <h2>API</h2>
          <p className={style.p}>
            The website uses the Rest API:{" "}
            <a href="https://reactrouter.com/">Cheapshark</a>, an API for price
            comparisons online.
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
