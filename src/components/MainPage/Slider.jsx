import React from "react";
import SlideCard from "./SlideCard";

const SliderHome = () => {
  return (
    <section style={{ minWidth: "100% !important", margin: "auto" , radius: "5px"}} className="homeSlide contentWidth">
      <div className="container" style={{ minWidth: "100%",radius: "5px" }}>
        <SlideCard />
      </div>
    </section>
  );
};

export default SliderHome;