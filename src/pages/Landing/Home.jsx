import "./Home.css";
import { Link } from "react-router-dom";
import { Banner, Button, Category } from "../../components";

export const Home = () => {
  return (
    <>
      <div className="home-container">
        <Banner />
        <div className="banner-div"></div>
        <div className="text-center m-tb-1 ">
          <h2 className="headline-2 ">FunYard</h2>
          <Link to="/explore">
            <Button name={"Explore"} btnvariant={"btn-secondary"} />
          </Link>
        </div>
        <hr />
        <h3 className="headline-3 hero-heading">Browse Categories</h3>
        <div className="categories-div">
          <Category />
        </div>
      </div>
    </>
  );
};
