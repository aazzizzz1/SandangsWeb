import React from "react";
import "./Search.css";
import { Link } from "react-router-dom";
// import Button from 'react-bootstrap/Button';
// import 'bootstrap/dist/css/bootstrap.min.css';

const Search = ({ CartItem }) => {
  // fixed Header
  // window.addEventListener("scroll", function () {
  //   const search = document.querySelector(".search")
  //   search.classList.toggle("active", window.scrollY > 100)
  // })

  return (
    <>
      <section className="search">
        <div className="container d_flex">
          <Link to="/">
            <div className="logo width ">
              <img src="././images/sandangs/sandangsblue.png" alt=""></img>
            </div>
          </Link>
          <div className="search-box f_flex">
            <i class="fa fa-search"></i>
          </div>
          <div className="icon f_flex width">
            <div className="cart">
              <a href="https://play.google.com/store/apps/details?id=com.fashionizt.cloths">
                <i className="fa fa-shopping-cart fa-lg icon-circle"></i>
              </a>
              <span>{CartItem.length === 0 ? "" : CartItem.length}</span>
            </div>
          </div>

          <div className="button2">
            <a href="https://play.google.com/store/apps/details?id=com.fashionizt.cloths">
              <button class="btn-primary">Login</button>
            </a>
          </div>
          <div className="button4">
          <Link to="/signupawal">
              <button class="btn btn-primary" > Daftar </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Search;
