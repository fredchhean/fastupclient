import React, { Component } from 'react';
import "./Entrepreneurs.css";
import Light from "../../../../src/img-for-landing/idea.png";
import Comet from "../../../../src/img-for-landing/start-up (1).png";
import Team from "../../../../src/img-for-landing/network (2).png";
import {Link} from "react-router-dom";






export default class Entrepreneurs extends Component {
  render() {
    return (
      <div>
<div className="top-container">
      <div className="desclanding">

        <div className="connecttext">
        <p>
            How it works ?
        </p>
        </div>
        <div className="propositioncontainer">

      <div className="test card-body card-body1" style={{width: "55rem"}}>
      <img className="card-img-top" src={Light} alt="Card image cap" style={{width: "15rem"}} />
    <h4 className="card-title card-title1">Awesome Idea</h4>
    <p className="textoflogo card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>

  <div className="test card-body card-body1" style={{width: "55rem"}}>
  <img className="card-img-top" src={Team} alt="Card image cap" style={{width: "15rem"}} />
    <h4 className="card-title card-title1">FastLancer Squad</h4>
    <p className="textoflogo card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>

  <div className="test card-body card-body1" style={{width: "55rem"}}>
  <img className="card-img-top" src={Comet} alt="Card image cap" style={{width: "15rem"}} />
    <h4 className="card-title card-title1">SkyRocket</h4>
    <p className="textoflogo card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
 

  </div>




        </div>
        <div>
    <Link class="btn btn-primary1 btn-primary2" to="/entrepreneurs" role="button">You want to submit your projet</Link>
    </div>


      </div>


      </div>







      
           
      </div>
    )
  }
}
