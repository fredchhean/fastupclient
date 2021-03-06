import {GET_ERRORS, SET_CURRENT_USER} from "./types";
import setAuthToken from "../utils/setAuthToken";
import axios from "axios";
import jwt_decode from "jwt-decode";


//instead of typing hardcorded local host
const BackEndUrl = process.env.REACT_APP_SERVER_DOMAIN

//Register User
export const registerUser = (userData,history) => dispatch => {
      axios
        .post(`${BackEndUrl}/api/users/register`, userData)
        .then(res => history.push('/login'))
        .catch(err => dispatch({
          type: GET_ERRORS,
          payload: err.response.data

        }))

};


export const fileUpload = (avatar) => {
  axios
    .post(`${BackEndUrl}/api/file-router/upload-image`,avatar)
    .then(res => console.log(res))
    .catch(err => console.log(err))
};

// //login - Get User Token
export const loginUser = userData => dispatch => {
  axios.post(`${BackEndUrl}/api/users/login`, userData)
    .then(res => {
      //save to localstorage
      const {token} = res.data;
      //set token to ls
      localStorage.setItem("jwtToken", token);
      //set token to Auth header
      setAuthToken(token);
      //decode token to get user data
      const decoded = jwt_decode(token);
      //set current user
      dispatch(setCurrentUser(decoded));

    })
    .catch(err => 
      dispatch({
      type: GET_ERRORS,
      payload: err.response.data

    })

    )
};

//set logged in user
export const setCurrentUser = (decoded) => {
  return{
    type: SET_CURRENT_USER,
    payload: decoded
  }
} 

//log user out
export const logoutUser = () => dispatch => {
  //remove token from localStorage
  localStorage.removeItem("jwtToken");
  //remove auth header for future "requests"
  setAuthToken(false);
  //set current user to {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
}