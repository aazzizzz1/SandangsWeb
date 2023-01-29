import React from "react"
import Fitroom from "./FitRoom.js"
import Froom from "./Froom.css"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const FitRo = () => {
    const settings = {
      dots: false,
      infinite: false,
      slidesToShow: 6,
      slidesToScroll: 0,
      autoplay: false,
    }
    return (
      <>
        <Slider {...settings}>
          {Fitroom.map((value, index) => {
            return (
              <>
                <div className='box product' key={index}>
                  <div className='img'>
                    <img src={value.cover} alt='' width='100%' />
                  </div>
                  <h4>{value.tittle}</h4>
                  {/* <span>{value.price}</span> */}
                </div>
              </>
            )
          })}
        </Slider>
      </>
    )
  }
  
  export default FitRo