import React from "react"
import logo from "../../components/assets/images/logo.svg"
import { Link } from "react-router-dom"
import "./Search.css"
// import Button from 'react-bootstrap/Button';
// import 'bootstrap/dist/css/bootstrap.min.css';

const Search = ({ CartItem }) => {
  // fixed Header
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search")
    search.classList.toggle("active", window.scrollY > 100)
  })

  return (
    <>
      <section className='search'>
        <div className='container c_flex'>
          <div className='logo width '>
          <img src="././images/sandangs/sandangsblue.png" alt=""></img>
          </div>

          <div className='search-box f_flex'>
            <i class="fa fa-search"></i>
          </div>

          <div className='icon f_flex width'>
            <div className='cart'>
              <Link to='/cart'>
              <i className='fa fa-shopping-cart fa-lg icon-circle'></i>
                <span>{CartItem.length === 0 ? "" : CartItem.length}</span>
              </Link>
            </div>
          </div>

          <div className='button1'>
            <div className='button'></div>
            <button class="btn btn-outline-primary">Login</button>
          </div>

          <div className='button2'>  
          <div className='button'></div>
          <button type="button" class="btn btn-primary" data-toggle="button" aria-pressed="true" autocomplete="on"> Daftar </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Search
