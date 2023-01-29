import React from "react";
import Sdata from "./Sdata";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlideCard = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    appendDots: (dots) => {
      return <ul style={{ margin: "0px" }}>{dots}</ul>;
    },
  };
  return (
    <Slider {...settings} style={{ minWidth: "100% !important", margin: "0px auto", width: "100%", maxHeight: "335px", radius: "5px", overflow: "hidden" }}>
      {Sdata.map((value, index) => {
        return (
          <div style={{ minWidth: "100% !important" }} className="center" key={index}>
            <img src={value.cover} alt="" style={{ margin: "0px auto", width: "100%", height: "100%", marginTop: "-50px",radius: "5px" }} />
          </div>
        );
      })}
    </Slider>
  );
};

export default SlideCard;