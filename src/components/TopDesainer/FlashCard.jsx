import React, { Component} from 'react';
import  axios  from 'axios'
// import qs from 'querystring'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Button from "./Button"

const SampleNextArrow = (props) => {
    const { onClick } = props
    return (
      <div className='control-btn' onClick={onClick}>
        <button className='next'>
          <i className='fa fa-long-arrow-alt-right'></i>
        </button>
      </div>  
    )
  }
  const SamplePrevArrow = (props) => {
    const { onClick } = props
    return (
      <div className='control-btn' onClick={onClick}>
        <button className='prev'>
          <i className='fa fa-long-arrow-alt-left'></i>
        </button>
      </div>
    )
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }
  

const api = 'https://fashionizt.yufagency.com/koneksi_desainer.php'

class ListDesainer extends Component {
    constructor(props){
        super(props)
        this.state={
            desainer:[],
            response:'',
            display:"none",
        }
    }

    componentDidMount(){
        axios.get(api).then(res => {
          this.setState({
            desainer: res.data.desainer
          })
        } )
    }

    render() {
        return (
            <><>
                <Slider {...settings}>
                    {this.state.desainer.map((desainer) => {
                        return (
                            <div className='box'>
                                <div className='product mtop'>
                                    <div className='img'>
                                        <span className='discount' key={desainer.id}>{desainer.rating}% Off</span>
                                        <img key={desainer.id} src={desainer.img_profil} alt='' />
                                        <div className='product-like'>
                                            <label>{}</label> <br />
                                            <i className='fa-regular fa-heart' ></i>
                                        </div>
                                    </div>
                                    <div className='product-details'>
                                        <h4 className="tengah" key={desainer.id}>{desainer.nama}</h4>
                                        <div className="tengah">
                                            <div className='rate'>
                                                <i className='fa fa-star'></i>
                                                <i className='fa fa-star'></i>
                                                <i className='fa fa-star'></i>
                                                <i className='fa fa-star'></i>
                                                <i className='fa fa-star'></i>
                                            </div>
                                        </div>
                                        <div className="tengah">
                                            <div className='price'>
                                                <h3 key={desainer.id}>{desainer.bio} </h3>
                                                {/* step : 3
                                                if hami le button ma click garryo bahne
                                                */}
                                                                                {/* <button onClick={() => addToCart(productItems)}>
                                                    <i className='fa fa-plus'></i>
                                                </button> */}
                                            </div>
                                        </div>
                                        <div className="tengah">
                                            <Button />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </Slider>            
                </></>
        );
    }
}

export default ListDesainer;

