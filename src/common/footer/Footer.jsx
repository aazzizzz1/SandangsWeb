import React from "react"
import "./style.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid2'>
          <div className='box-1'>
            <img src="././images/sandangs/sandangswhite.png" alt=""></img>
            <p>Sebuah aplikasi berbasis desktop dan mobile yang menjadi marketplace fashion yang didukung oleh teknologi AR Swapping Clothes yang dapat memilih baju sesuai selera
              dan bisa custom sendiri baju yang diinginkan oleh desainer dan konveksi pilihan anda sendiri
            </p>
            <div className='icon d_flex'>
              <div className='img d_flex'>
                <i class='fa-brands fa-google-play'></i>
                <span>Google Play</span>
              </div>
              {/* <div className='img d_flex'>
                <i class='fa-brands fa-app-store-ios'></i>
                <span>App Store</span>
              </div> */}
            </div>
          </div>

          <div className='box'>
            <h2>About Us</h2>
            <ul>
              <li>Sandangs Mall</li>
              <li>Pre-order</li>
              <li>Fitting Room</li>
              <li>Sandangs Desainer</li>
              <li>Sandangs Mitra Produksi</li>
            </ul>
          </div>
          <div className='box'>
            <h2>Customer Care</h2>
            <ul>
              <li>Help Center </li>
              <li>How to Buy </li>
              <li>Track Your Order </li>
              <li>Corporate & Bulk Purchasing </li>
              <li>Returns & Refunds </li>
            </ul>
          </div>
          <div className='box'>
            <h2>Contact Us</h2>
            <ul>
              <li>Pens Sky Venture, Politeknik Elektronika Negeri Surabaya </li>
              <li>Email: </li>
              <li>sandangs.indonesia@gmail.com</li>
              <li>Instagram : </li>
              <li>sandangs.indonesia</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
