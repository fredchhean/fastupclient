import React, { Component } from 'react';
import PropTypes from 'prop-types';
import{withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {registerUser, fileUpload} from "../../actions/authActions";
import TextFieldGroup from "../common/TextFieldGroup";


class Register extends Component {
  constructor(){
    super();
    this.state = {
      lastname:"",
      firstname:"",
      email:"",
      password:"",
      avatar:"",
      errors:{}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount(){
    if(this.props.auth.isAuthenticated){
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.errors){
      this.setState({ errors: nextProps.errors });

    }
  }

  onChange(e){
    this.setState({[e.target.name]: e.target.value});
  }

  updateAvatar(event){
    const {files} = event.target;
    const updateData = new FormData();
    updateData.append("avatarFile", files[0]);
    console.log(files);
    console.log(updateData);
    fileUpload(updateData);

  }

  onSubmit(e){
    e.preventDefault();
    const newUser = {
      lastname: this.state.lastname,
      firstname: this.state.firstname,
      email: this.state.email,
      password: this.state.password,
      avatar: this.state.avatar,
    }
    this.props.registerUser(newUser, this.props.history);
  }


  render() {
    const {errors} = this.state;
    const {user} = this.props.auth;
    return (
      <div>
       
        <h1>Register</h1>
        <form onSubmit={this.onSubmit}>
        <label>lastname

        <TextFieldGroup
          placeholder="lastname"
          name="lastname"
          type="text"
          value={this.state.lastname}
          onChange={this.onChange}
          error={errors.lastname}
        />
      </label>

        <label>first name
        <TextFieldGroup
          placeholder="firstname"
          name="firstname"
          type="text"
          value={this.state.firstname}
          onChange={this.onChange}
          error={errors.firstname}
        />
    </label>

     <label>email
         <TextFieldGroup
          placeholder="email"
          name="email"
          type="email"
          value={this.state.email}
          onChange={this.onChange}
          error={errors.email}
        />
     </label>

                          
   <label>Password
  <TextFieldGroup
          placeholder="password"
          name="password"
          type="password"
          value={this.state.password}
          onChange={this.onChange}
          error={errors.password}
        />
        </label>


        <label>
       image upload
        <input type="file" name="avatar" onChange={ event => this.updateAvatar(event)}/>
        </label>
<img src={this.state.avatar}></img>

                                  

        <button type="submit">submit</button>
        </form>

      </div>
    )
  }
}

Register.propTypes={
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, {registerUser})(withRouter(Register));