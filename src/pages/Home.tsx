import Header from "../components/Header";
import TripleA from "../components/TripleA";
import FreeDeal from "../components/FreeDeal";
import ListSimple from "../components/ListSimple";
import Footer from "../components/Footer";

import "../styles/HomeStyle.css";
function Home() {
  return (
    <>
      <Header main />

      <TripleA />
      <FreeDeal />

      <div className="lists main">
        <div className="recentList">
          <ListSimple recent />
        </div>
        <div className="divider"></div>
        <div className="reviewList">
          <ListSimple reviews />
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Home;
