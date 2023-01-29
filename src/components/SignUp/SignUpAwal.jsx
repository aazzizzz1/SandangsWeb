import React, { Component } from "react";
import "./style.css";
import { Link } from 'react-router-dom';

class SignUpAwal extends Component {
  render() {
    return (
      <form>
        <div class="image_signup">
          <img src="././images/sandangs/sandangsbiru.png" alt=""></img>
        </div>
        <h4>Silahkan pilih dahulu Sign Up anda</h4>
        <div className="d-grid d_flex">
          <Link to="/signupkonveksi">
          <button type="submit" className="btn btn-primary2">
              Sign Up as Konveksi
            </button>
          </Link>
          <Link to="/signupdesainer">
          <button type="submit" className="btn btn-primary2">
              Sign Up as Desainer
            </button>
          </Link>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/">sign in?</a>
        </p>
      </form>
    );
  }
}

export default SignUpAwal;



