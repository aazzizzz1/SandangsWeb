import React, { Component } from "react";
import "./style.css";

export default class SignUpKonveksiSatu extends Component {
  render() {
    return (
      <form>
        <div class="image_signup">
        <img src="././images/sandangs/sandangsblue.png" alt=""></img>
        </div>
        <h3>Identitas Konveksi</h3>
        <div className="mb-3">
          <label>Nomor Induk Berusaha (NIB)</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
          />
        </div>
        <div className="mb-3">
          <label>Alamat</label>
          <input type="text" className="form-control" placeholder="Last name" />
        </div>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label>No. Telpon</label>
          <input
            type="phone"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="mb-3">
          <label>NPWP</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter NPWP"
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Next
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/">sign in?</a>
        </p>
      </form>
    );
  }
}


