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
  

const api = 'https://fashionizt.yufagency.com/koneksi_konveksi.php'

class ListKonveksi extends Component {
    constructor(props){
        super(props)
        this.state={
            konveksi:[],
            response:'',
            display:"none",
        }
    }

    componentDidMount(){
        axios.get(api).then(res => {
          this.setState({
            konveksi: res.data.konveksi
          })
        } )
    }
    
    
    render() {
        return (
            <><>
                <Slider {...settings}>
                    {this.state.konveksi.map((konveksi) => {
                        return (
                            <div className='box'>
                                <div className='product mtop'>
                                    <div className='img'>
                                        <span className='discount' key={konveksi.id}>{konveksi.rating}% Off</span>
                                        <img key={konveksi.id} src={konveksi.img_profil} alt='' />
                                        <div className='product-like'>
                                            <label>{}</label> <br />
                                            <i className='fa-regular fa-heart' ></i>
                                        </div>
                                    </div>
                                    <div className='product-details'>
                                        <h4 className="tengah" key={konveksi.id}>{konveksi.nama}</h4>
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
                                                <h3 key={konveksi.id}>{konveksi.bio} </h3>
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

export default ListKonveksi;