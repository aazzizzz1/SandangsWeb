import React from "react"
import "./Home.css"
import SliderHome from "./Slider"

const Home = () => {
  return (
    <div className="container">
      <section className="home">
        <div className="d_flex" style={{ minWidth: "100%" }}>
          {/* <Categories /> */}
          <SliderHome />
        </div>
      </section>
    </div>
  );
};

export default Home;