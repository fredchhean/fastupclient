import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import isEmpty from "../../validation/is-empty";
import "./ProfileItem.css";


class ProfileItem extends Component {
  render() {
    const {profile} = this.props;
    return (
<div className="cardcontainer">
<div className="card" style={{width: "20rem"}}>
    <img className="card-img-top" src={profile.user.avatar}  alt="Card image cap"/>
    <div id ="jaune" className="card-body">
    <h3 className="card-title"><p>{profile.user.firstname}</p><p> {profile.user.lastname}</p></h3>
    <h2 className="card-text">{profile.title}</h2>
  </div>

  <div id ="jaune" className="card-body">
    <Link to={`/profile/${profile.handle}`} href="#" className="card-link">Card profile</Link>
  </div>
    </div>
    </div>


    )
  }
}

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
}

export default ProfileItem;


 























