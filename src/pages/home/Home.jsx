import Featured from "../../components/featured/Featured";
import FeaturedHome from "../../components/featuredHome/FeaturedHome";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import PropertyList from "../../components/propertyList/PropertyList";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <div className="homeText">
          <h1 className="homeTitle">Trending destinations</h1>
          <p className="featuredText">
            Most popular choices for travelers from India
          </p>
        </div>
        <Featured />
        <div className="homeText">
          <h1 className="homeTitle">Browse by property type</h1>
        </div>
        <PropertyList />
        <div className="homeText">
          <h1 className="homeTitle">Homes guests love</h1>
        </div>
        <FeaturedHome />
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
