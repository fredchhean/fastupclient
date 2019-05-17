import React, { Component } from 'react';
import "./Entrepreneurs.css";
import Light from "../../../../src/img-for-landing/idea.png";
import Comet from "../../../../src/img-for-landing/start-up (1).png";
import Team from "../../../../src/img-for-landing/network (2).png";





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
    <h4 className="card-title card-title1">Squad Sprint</h4>
    <p className="textoflogo card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>

  <div className="test card-body card-body1" style={{width: "55rem"}}>
  <img className="card-img-top" src={Comet} alt="Card image cap" style={{width: "15rem"}} />
    <h4 className="card-title card-title1">Rocket Adventure</h4>
    <p className="textoflogo card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>




        </div>

      </div>
  


      </div>







      
           
      </div>
    )
  }
}
