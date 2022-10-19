import React from "react"
import Home from "../components/MainPage/Home"
import FlashDeals from "../components/TopDesainer/FlashDeals"
// import TopCate from "../components/top/TopCate"
// import NewArrivals from "../components/newarrivals/NewArrivals"
import Discount from "../components/discount/Discount"
import Shop from "../components/shops/Shop"
import Annocument from "../components/annocument/Annocument"
// import Wrapper from "../components/wrapper/Wrapper"
import TopMitra from "../components/TopMitra/TopMitra"



const Pages = ({ productItems, addToCart, CartItem, shopItems }) => {
  return (
    <>
      <Home CartItem={CartItem} />
      <Discount />
      <FlashDeals productItems={productItems} addToCart={addToCart} />
      <TopMitra productItems={productItems} addToCart={addToCart} />
      {/* <TopCate />
      <NewArrivals /> */}
      <Annocument />
      <Shop shopItems={shopItems} addToCart={addToCart} />
      {/* <Wrapper /> */}
    </>
  )
}

export default Pages
