import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {PropTypes} from "prop-types";
import {connect} from "react-redux";
import "./Landing.css";
import ImageRocket from "./image/rocket.jpg";
import Galaxy from "../../../img-for-landing/galaxy.png"




class Landing extends Component {
  render() {
    return (
      <div>
      <div className="top-container">
      <div className="desclanding">
      {/* <p>Lorem ipsum dolor sit,</p>
      <p>amet consectetur adipisicing elit.</p>
        Cum, tempora ipsa quo temporibus veniam minima soluta quasi facilis? */}
        {/* <img src={Galaxy} className="rocket"/> */}
        <p className="connecttext">
        We connect Entrepreneurs and FastLancers
        </p>
        <p className="textunicorns">
        To create the futur UNICORNS
      </p>
        </div>

      </div>
      <div className="howitworkscontainer">
      <div>szszsz</div>

      </div>
      {/* <div>
      <Link to="/login" className="button-landing">login</Link>
    <Link to="/register" className="button-landing">sign up</Link>
      </div> */}
      <div className="middlecontainer">
      <div className="entrepreneurlittle">
          <img src="/images/fred.jpg" alt=""/>
          <h2>Hello.</h2>
          <p>Lorem ipsum dolor sit amet, vitae volutpat, dui conubia, dolor urna. Non auctor, montes nulla distinctio.
          </p>
        </div>
        
      
      </div>
      <div className="cardcontainer">
      <div className="card" style={{width: "18rem"}}>
  <img className="card-img-top" src="..." alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
<div className="card" style={{width: "18rem"}}>
  <img className="card-img-top" src="..." alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
<div className="card" style={{width: "18rem"}}>
  <img className="card-img-top" src="..." alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div>
 
      </div>
      
      
    )
  }
}

export default Landing;