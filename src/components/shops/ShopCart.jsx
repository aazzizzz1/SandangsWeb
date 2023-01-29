import React, { Component } from "react"
import axios from 'axios';

const api1 = 'https://fashionizt.yufagency.com/koneksi_produk.php'
// const api1 = 'https://api.yufagency.com/produk'
// const api2 = 'https://api.yufagency.com/keranjang'
class ShopCart extends Component {
  constructor(props){
    super(props)
    this.state={
      produk:[],
      response:'',
      display:"none",
      keranjang:[]
    }
}

    componentDidMount(){
      axios
      .get(api1)
      .then(res => {
        this.setState({
          produk: res.data.produk
        })
      } )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }
  
  masukKeranjang = (value) => {
    axios
        .post('https://api.yufagency.com/keranjang', value)
        .then(response => 
          this.setState({ id: response.data.keranjang }))
        .catch(error => {
            this.setState({ errorMessage: error.message });
            console.error('There was an error!', error);
        });
    
    // console.log("Ojec:", value)
    // axios
    // .get(api2 + ".id=" +value.id)
    // .then(res => {
    //   if(res.data.length === 0){
    //       // console.log("Produk :", value)  
    //         const keranjang = {
    //           jumlah : 1,
    //           total_harga: value.harga,
    //           produk: value
    //         }
    //           axios
    //           .post(api2, keranjang)
    //           .then(res => {
    //             swal({
    //               title: "Berhasil Masuk Keranjang",
    //               text: "Kamu berhasil masukan ke keranjang"+keranjang.produk.nama,
    //               icon: "success",
    //               timer:1500,
    //             });
    //             this.setState({
    //               keranjang: res.data.keranjang
    //             })
    //           } )
    //           .catch(function (error) {
    //             // handle error
    //             console.log(error);
    //           })
    //   } else{
    //     const keranjang = {
    //       jumlah : res.data[0].keranjang.jumlah+1,
    //       total_harga: res.data[0].keranjang.total_harga+value.harga,
    //       produk: value
    //     }
    //     axios
    //           .put(api2,"/"+ res.data[0].keranjang.id, keranjang)
    //           .then(res => {
    //             swal({
    //               title: "Berhasil Masuk Keranjang",
    //               text: "Kamu berhasil masukan ke keranjang"+keranjang.produk.nama,
    //               icon: "success",
    //               timer:1500,
    //             });
    //             this.setState({
    //               keranjang: res.data.keranjang
    //             })
    //           } )
    //           .catch(function (error) {
    //             // handle error
    //             console.log(error);
    //           })
    //   }
    // } )
    // .catch(function (error) {
    //   // handle error
    //   console.log(error);
    // })
  }

  render() {
      return (
          <><>
                  {this.state.produk.map((produk) => {
                      return (
                          <div className='box'>
                          <div className='product mtop'>
                            <div className='img'>
                              <span className='discount' key={produk.id} >{produk.rating}% Off</span>
                              <img src={produk.img_produk} key={produk.id} alt=''  />
                              <div className='product-like'>
                                <label>{}</label> <br />
                                <i className='fa-regular fa-heart' onClick={{}}></i>
                              </div>
                            </div>
                            <div className='product-details'>
                              <h3 key={produk.id} >{produk.nama}</h3>
                              <div className='rate'>
                                <i className='fa fa-star'></i>
                                <i className='fa fa-star'></i>
                                <i className='fa fa-star'></i>
                                <i className='fa fa-star'></i>
                                <i className='fa fa-star'></i>
                              </div>
                              <div className='price'>
                                <h4 key={produk.id} >Rp {produk.harga} </h4>
                                <a href="https://play.google.com/store/apps/details?id=com.fashionizt.cloths">
                                <button onClick={() => this.masukKeranjang(produk)}>
                                  <i className='fa fa-plus'></i>
                                </button>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                  })}
              </></>
      );
  }
}

export default ShopCart;
