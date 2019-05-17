import React, { Component } from 'react';
import "./ProfileHeader.css";
import isEmpty from "../../validation/is-empty";
import Logolinkedin from "../profile/linkedin (3).png"
import Logodribble from "../profile/dribble-logo.png"
import Logogithub from "../profile/github-sign.png"
import Logostar from "../profile/star (3).png"



class ProfileHeader extends Component {
  render() {
    const {profile} = this.props;
    return (
      newFunction(profile)
    )
  }
}

export default ProfileHeader;
function newFunction(profile) {
  return <div className="profileheadercontainer">
    <div>
      <h1>Profile Header</h1>
    </div>


    <img className="card-img-top img-ind" src={profile.user.avatar} alt="Card image cap" style={{ width: "15rem" }} />
    <div className="nameforindivcard">{profile.user.firstname} {profile.user.lastname}</div>
    <div className="nameforindivcard2">{profile.title}</div>
    <div className="nameforindivcard3">"{profile.tagline}"</div>


    <div>
    
    <div className="card card1" style={{ width: "60rem" }}>
      
    <div className="card-body card-body1" style={{ width: "60rem" }}>
          <h4 className="card-title titlesocial">Social Networks</h4>
          <div>
          <a className="logonetwork" href={profile.linkedin}><img src={Logolinkedin}/></a>
          <a className="logonetwork" href={profile.linkedin}><img src={Logodribble}/></a>
          <a className="logonetwork" href={profile.linkedin}><img src={Logogithub}/></a>
          <a className="logonetwork" href={profile.linkedin}><img src={Logostar}/></a>
          </div>
        </div>
        </div>

      
      <div className="card card1" style={{ width: "60rem" }}>
 
        <div className="card-body card-body1" style={{ width: "34rem" }}>
          <h4 className="card-title titlesocial">Hero Experience</h4>
          <p className="card-text">{profile.heroexperience}</p>
        </div>

        <div className="card-body card-body1" style={{ width: "34rem" }}>
          <h4 className="card-title titlesocial">Skills</h4>
          {/* <p className="card-text">{profile.user.skills}</p> */}
          <p className="card-text">
            {profile.skills.slice(0,10). map((skill, index) => (
              <p key={index}>
              {skill}
              </p>
            ))}
          </p>
        </div>

        <hr></hr>
        <div>
          <div className="card-body" style={{ width: "20rem" }}>
            <h4 className="card-title titlesocial">Languages</h4>
            {/* <p className="card-text">{profile.user.languages}</p> */}
            <p className="card-text">
            {profile.languages.slice(0,10). map((language, index) => (
              <p key={index}>
              {language}
              </p>
            ))}
          </p>
            
            
          </div>
        </div>
      </div>
    </div>





  </div>;
}

