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

        <div className="connecttext">
        <p>
        We connect Entrepreneurs and FastLancers
        </p>
        </div>
        <div className="textunicorns">
        <p>
        To create the futur UNICORNS
      </p>
      <div className="buttoncontainer">
      <Link class="btn btn-primary1" to="/entrepreneurs" role="button">You are an Freelancer</Link>
      <Link class="btn btn-primary1" to="/profiles" role="button">You are an Entrepreneur</Link>

      </div>
      
      </div>
        </div>

      </div>
      
      </div>
      
      
    )
  }
}

export default Landing;