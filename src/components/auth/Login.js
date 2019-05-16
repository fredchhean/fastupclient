import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import classnames from "classnames";
import {loginUser} from "../../actions/authActions";
import TextFieldGroup from "../common/TextFieldGroup";


class Login extends Component {
  constructor(){
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
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
    if(nextProps.auth.isAuthenticated){
      this.props.history.push("/dashboard");
    }
    if(nextProps.errors){
      this.setState({errors: nextProps.errors})
    }
  }

  onSubmit(e){
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password,
    };
    this.props.loginUser(userData)
    // console.log(userData);
    // axios.post("http://localhost:8000/api/users/register", newUser)
    //   .then(res => console.log(res))
    //   .catch(err => console.log(err))
  }



  onChange(e){
    this.setState({[e.target.name]: e.target.value});
  }

  
  render() {
    const {errors} = this.state;

    return (
      <div>
              <h1>login</h1>

        {/* <form onSubmit={this.onSubmit}>
        <TextFieldGroup
          placeholder="email address"
          name="email"
          type="email"
          value={this.state.email}
          onChange={this.onChange}
          error={errors.email}
        />
          <TextFieldGroup
          placeholder="password"
          name="password"
          type="password"
          value={this.state.password}
          onChange={this.onChange}
          error={errors.password}
        />
        <input type="submit"/>
        </form> */}


        <form onSubmit={this.onSubmit}>
  <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input error={errors.email} onChange={this.onChange} value={this.state.email} name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input error={errors.password} onChange={this.onChange} value={this.state.password} name="password" type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div className="form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>






      </div>














    )
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, {loginUser})(Login);