import React, { Component } from 'react';
import "./ProfileHeader.css"

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
    <div>
      
      <div className="card card1" style={{ width: "60rem" }}>
        <div className="card-body card-body1" style={{ width: "34rem" }}>
          <h4 className="card-title">Hero Experience</h4>
          <p className="card-text">{profile.user.title}</p>
        </div>

        <div className="card-body card-body1" style={{ width: "34rem" }}>
          <h4 className="card-title">Skills</h4>
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
            <h4 className="card-title">Languages</h4>
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

