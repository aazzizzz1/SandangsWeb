import React, { Component } from "react";
import Contain from "../components/Model/Contain";
import BtnGroup from "../components/Store/BtnGroup";
import Store from "../components/Store/Store";
import "../App.css";
export default class HomeFittingRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: null
    };
  }
  getSelectedItemApp(selectedItem) {
    this.setState({
      selectedItem
    });
  }
  render() {
    return (
      <div>
        <div className="container-fluid">
          <hr className="style13"></hr> 
          <div className="d_flex">
            <div className="col-lg-8 col-sm-5">
              <BtnGroup />
              <Store getSelectedItemApp={this.getSelectedItemApp.bind(this)} />
            </div>
            <div className="col-lg-4 col-sm-3">
              <Contain selectedItem={this.state.selectedItem} />
            </div>
          </div>
          
        </div>
      </div>
    );
  }
}

