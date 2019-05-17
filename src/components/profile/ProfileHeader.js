import React, { Component } from 'react';
import "./ProfileHeader.css"

class ProfileHeader extends Component {
  render() {
    const {profile} = this.props;
    return (
      <div className="profileheadercontainer">
        <div>
        <h1>Profile Header</h1>
        </div>
        
{/*         
        <div>
          <img src={profile.user.avatar} alt=""/>
        </div>
        <div>
          <h1>{profile.user.firstname}{profile.user.lastname}</h1>
          <p>{profile.title}</p>
          <p>{profile.tagline}</p>
          <p>{profile.skills}</p>

          <p><a href={profile.linkedin}>{profile.linkedin}</a></p>
          <p><a href={profile.github}>{profile.github}</a></p>
          <p><a href={profile.dribble}>{profile.dribble}</a></p>
          <p><a href={profile.personalwebsite}>{profile.personalwebsite}</a></p>
          <p><a href={profile.languages}>{profile.languages}</a></p>
          <p><a href={profile.other1}>{profile.other1}</a></p>
          <p>{profile.heroexperience}</p>
        </div> */}
          <img className="card-img-top img-ind" src={profile.user.avatar} alt="Card image cap" style={{width: "15rem"}} />

<div className="card" style={{width: "60rem"}}>

  <div className="card-body" style={{width: "34rem"}}>
    <h4 className="card-title">HERO EXPERIENCE</h4>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <div className="card-body" style={{width: "34rem"}}>
    <h4 className="card-title">HERO EXPERIENCE</h4>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  
  <hr></hr>
  <div>
  <div className="card-body" style={{width: "20rem"}}>
    <h4 className="card-title">HERO EXPERIENCE</h4>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  </div>

  </div>





      </div>
    )
  }
}

export default ProfileHeader;
