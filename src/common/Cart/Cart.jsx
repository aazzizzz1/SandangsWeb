// // import "./style.css"
// // import React, { useState, useEffect } from "react"
// // import axios from 'axios';

// // const Cart = ({ CartItem, addToCart, decreaseQty }) => {
// //   // Stpe: 7   calucate total of items
// //   const totalPrice = Cartkeranjangs.reduce((price, item) => price + keranjangs.qty * keranjangs.harga, 0)

// //   const [item, setData] = useState();

// //   useEffect(() => {
// //       // Make a request for a user with a given ID
// //       axios.get('https://fashionizt.yufagency.com/koneksi_produk.php')
// //       .then((res) =>{
// //         const responseData = res.data.produk
// //         setData(responseData);
// //       })
// //       .catch(function (error) {
// //         // handle error
// //         console.log(error);
// //       })
// //       .finally(function () {
// //         // always executed
// //       });
// //   }, []);

// //   // prodcut qty total
// //   return (
// //     <>
// //       <section className='cart-items'>
// //         <div className='container d_flex'>
// //           {/* if hamro cart ma kunai pani item xaina bhane no diplay */}

// //           <div className='cart-details'>
// //             {Cartkeranjangs.length === 0 && <h1 className='no-items product'>No Items are add in Cart</h1>}

// //             {/* yasma hami le cart item lai display garaaxa */}
// //             {item && Cartkeranjangs.map((item) => {
// //               const {id, nama, img_produk, harga} = item;
// //               const productQty = keranjangs.harga * keranjangs.qty

// //               return (
// //                 <div className='cart-list product d_flex' key={id}>
// //                   <div className='img'>
// //                     <img src={img_produk} alt='' key={id}/>
// //                   </div>
// //                   <div className='cart-details'>
// //                     <h3 key={id}>{nama}</h3>
// //                     <h4 key={id}>
// //                       Rp {keranjangs.harga} * {keranjangs.qty}
// //                       <span>Rp {productQty}</span>
// //                     </h4>
// //                   </div>
// //                   <div className='cart-items-function'>
// //                     <div className='removeCart'>
// //                       <button className='removeCart'>
// //                         <i className='fa-solid fa-xmark'></i>
// //                       </button>
// //                     </div>
// //                     {/* stpe: 5 
// //                     product ko qty lai inc ra des garne
// //                     */}
// //                     <div className='cartControl d_flex'>
// //                       <button className='incCart' onClick={() => addToCart(item)} key={id}>
// //                         <i className='fa-solid fa-plus'></i>
// //                       </button>
// //                       <button className='desCart' onClick={() => decreaseQty(item)} key={id}>
// //                         <i className='fa-solid fa-minus'></i>
// //                       </button>
// //                     </div>
// //                   </div>

// //                   <div className='cart-item-price'></div>
// //                 </div>
// //               )
// //             })}
// //           </div>

// //           <div className='cart-total product'>
// //             <h2>Total Harga Keranjang</h2>
// //             <div className=' d_flex'>
// //               <h4>Total Harga :</h4>
// //               <h3>Rp {totalPrice}</h3>
// //             </div>
// //           </div>
// //         </div>
// //       </section>
// //     </>
// //   )
// // }

// // export default Cart

// import React, { Component } from "react"
// import axios from 'axios';
// import swal from 'sweetalert';

// const api2 = 'https://api.yufagency.com/keranjang'
// class Cart extends Component {
//   constructor(props){
//     super(props)
//     this.state={
//       produk:[],
//         response:'',
//         display:"none",
//         keranjangs:[]
//     }
// }

//     componentDidMount(){
//       axios.get(api2)
//       .then(res => {
//         this.setState({
//           produk: res.data.keranjang
//         })
//       } )
//       .catch(function (error) {
//         // handle error
//         console.log(error);
//       })
//   }

//   masukKeranjang = (value) => {
  
//     axios.get(api2 + ".id_produk=" +value.id)
//     .then(res => {
//       if(res.data.length === 0){
//           // console.log("Produk :", value)  
//             const keranjang = {
//               jumlah : 1,
//               total_harga: value.harga,
//               produk: value
//             }
            
//               axios
//               .post(api2, keranjang)
//               .then(res => {
//                 swal({
//                   title: "Berhasil Masuk Keranjang",
//                   text: "Kamu berhasil masukan ke keranjang"+keranjang.produk.nama,
//                   icon: "success",
//                   timer:1500,
//                 });
//                 this.setState({
//                   keranjang: res.data.keranjang
//                 })
//               } )
//               .catch(function (error) {
//                 // handle error
//                 console.log(error);
//               })
//       } else{
//         const keranjang = {
//           jumlah : res.data[0].keranjang.jumlah+1,
//           total_harga: res.data[0].keranjang.total_harga+value.harga,
//           produk: value
//         }
//         axios
//               .put(api2,"/"+ res.data[0].keranjang.id, keranjang)
//               .then(res => {
//                 swal({
//                   title: "Berhasil Masuk Keranjang",
//                   text: "Kamu berhasil masukan ke keranjang"+keranjang.produk.nama,
//                   icon: "success",
//                   timer:1500,
//                 });
//                 this.setState({
//                   produk: res.data.keranjang
//                 })
//               } )
//               .catch(function (error) {
//                 // handle error
//                 console.log(error);
//               })

//       }
//     } )
//     .catch(function (error) {
//       // handle error
//       console.log(error);
//     })
//   }


//   render() {
//       return (
//           <><>
//                   {this.state.keranjangs.map((produk, keranjangs) => {
//                       return (
//                         <section className='cart-items'>
//                         <div className='container d_flex'>
//                           {/* if hamro cart ma kunai pani item xaina bhane no diplay */}
                
//                           <div className='cart-details'>
//                             {keranjangs.length === 0 && <h1 className='no-items product'>No Items are add in Cart</h1>}
                
//                             {/* yasma hami le cart item lai display garaaxa */}
                            
                                                        
//                             {/* // const {id, nama, img_produk, harga} = item;
//                               // const productQty = keranjangs.harga * keranjangs.qty */}
                
//                               return (
//                                 <div className='cart-list product d_flex' key={keranjangs.id}>
//                                   <div className='img'>
//                                     <img src={keranjangs.img_produk} alt='' key={keranjangs.id}/>
//                                   </div>
//                                   <div className='cart-details'>
//                                     <h3 key={keranjangs.id}>{keranjangs.nama}</h3>
//                                     <h4 key={keranjangs.id}>
//                                       Rp {keranjangs.harga} * {keranjangs.qty}
//                                       <span>Rp {keranjangs.productQty}</span>
//                                     </h4>
//                                   </div>
//                                   <div className='cart-items-function'>
//                                     <div className='removeCart'>
//                                       <button className='removeCart'>
//                                         <i className='fa-solid fa-xmark'></i>
//                                       </button>
//                                     </div>
//                                     {/* stpe: 5 
//                                     product ko qty lai inc ra des garne
//                                     */}
//                                     <div className='cartControl d_flex'>
//                                       <button className='incCart' onClick={() => this.masukKeranjang(keranjangs)} key={keranjangs.id}>
//                                         <i className='fa-solid fa-plus'></i>
//                                       </button>
//                                       <button className='desCart' onClick={() => this.masukKeranjang(keranjangs)} key={keranjangs.id}>
//                                         <i className='fa-solid fa-minus'></i>
//                                       </button>
//                                     </div>
//                                   </div>
                
//                                   <div className='cart-item-price'></div>
//                                 </div>
//                               )
                          
//                           </div>
                
//                           <div className='cart-total product'>
                            
//                             <h2>Total Harga Keranjang</h2>
//                             <div className=' d_flex'>
//                               <h4>Total Harga :</h4>
                              
//                               <h3>Rp {keranjangs.totalPrice}</h3>

//                             </div>
//                           </div>
//                         </div>
//                       </section>
//                       );
//                   })}
//               </></>
//       );
//   }
// }

// export default Cart;
