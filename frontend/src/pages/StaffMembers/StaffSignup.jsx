import React, { useState, useEffect , Component} from 'react';
//import axios from 'axios';
//import React, { useState, useEffect } from "react";
import isEmpty from "validator/lib/isEmpty";
import isEmail from "validator/lib/isEmail";
import equals from "validator/lib/equals";
import isNumeric from "validator/lib/isNumeric";
import { showErrorMsg, showSuccessMsg } from "../../helpers/message";
import { showLoading } from "../../helpers/loading";
import { isAuthenticated } from "../../helpers/auth";
import { Link, useNavigate } from "react-router-dom";
import { staffSignup } from "../../api/auth";


const StaffSignup = () => {
        let history = useNavigate();
      
       /*  useEffect(() => {
          if (isAuthenticated() && isAuthenticated().role === 1) {
            history.push("/admin/dashboard");
          } else if (isAuthenticated() && isAuthenticated().role === 2) {
            history.push("/product");
          } */
       // }, [history]);
      
        const [formData, setFormData] = useState({
            firstName: "Tania",
            lastName: "Fernando",
            userID: "SD0009",
            userType: "Staff",
            userSubType: "Co-Supervisor",
            topicArea: "Machine Learning",
            email: "taniafdo@gmail.com",
            username: "TaniaFdo",
            password: "tania12",
            password1: "tania12",
            successMsg: false,
            errorMsg: false,
            loading: false,
        });
      
        const {
          firstName,
          lastName,
          userID,
          userType,
          userSubType,
          topicArea,
          email,
          username,
          password,
          password1,
          successMsg,
          errorMsg,
          loading,
        } = formData;
      
        /************************************
         *EVENT HANDLERS*
         *************************************/
        const handleChange = (evt) => {
          //console.log(evt);
          setFormData({
            ...formData,
            [evt.target.name]: evt.target.value,
            successMsg: "",
            errorMsg: "",
          });
        };
      
        const handleSubmit = (evt) => {
          evt.preventDefault();
      
          //client-side validation
          if (
            isEmpty(firstName) ||
            isEmpty(lastName) ||
            isEmpty(userID) ||
            isEmpty(userType) ||
            isEmpty(userSubType) ||
            isEmpty(topicArea) ||
            isEmpty(email) ||
            isEmpty(username) ||
            isEmpty(password) ||
            isEmpty(password1)
          ) {
            setFormData({
              ...formData,
              errorMsg: "All fields are required",
            });
          } else if (!isEmail(email)) {
            setFormData({
              ...formData,
              errorMsg: "Invalid Email",
            });
          } else if (!equals(password, password1)) {
            setFormData({
              ...formData,
              errorMsg: "Passwords do not match",
            });
          } else {
            const {
              firstName,
              lastName,
              userID,
              userType,
              userSubType,
              topicArea,
              email,
              username,
              password,
            } = formData;
            const data = {
              firstName,
              lastName,
              userID,
              userType : "Staff",
              userSubType,
              topicArea,
              email,
              username,
              password,
            };
      
            setFormData({ ...formData, loading: true });
            staffSignup(data)
              .then((response) => {
                console.log("Axios signup success: ", response);
                setFormData({
                  firstName: "",
                  lastName: "",
                  userID: "",
                  userType: "",
                  userSubType: "",
                  topicArea: "",
                  email: "",
                  username: "",
                  password: "",
                  password2: "",
                  loading: false,
                  successMsg: response.data.successMessage,
                });
              })
              .catch((err) => {
                console.log("Axios signup error: ", err);
                setFormData({
                  ...formData,
                  loading: false,
                  errorMsg: err.response.data.errorMessage,
                });
              });
          }
        };
      
        /************************************
         *VIEWS*
         *************************************/
      
        const showSignupForm = () => (
          <form className="signup-form" onSubmit={handleSubmit}>
            <br />
            <center>
              {" "}
              <h2> Staff Registration Form </h2>{" "}
            </center>{" "}
            <br />
            {/* firstName */}
            <div className="form-group input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fa fa-user"></i>
                </span>
              </div>
              <input
                name="firstName"
                value={firstName}
                className="form-control"
                placeholder="First name"
                type="text"
                onChange={handleChange}
              />
            </div>
            {/* lastName */}
            <div className="form-group input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fa fa-user"></i>
                </span>
              </div>
              <input
                name="lastName"
                value={lastName}
                className="form-control"
                placeholder="Last name"
                type="text"
                onChange={handleChange}
              />
            </div>
            {/* userId */}
            <div className="form-group input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fa fa-id-card"></i>
                </span>
              </div>
              <input
                name="userID"
                value={userID}
                className="form-control"
                placeholder="Staff ID"
                type="text"
                onChange={handleChange}
              />
            </div>
            {/* user SubType */}
            <div className="form-group input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i class="fa fa-users" aria-hidden="true"></i>
                </span>
              </div>
              <input
                name="userSubType"
                value={userSubType}
                className="form-control"
                placeholder="Staff Designation"
                type="text"
                onChange={handleChange}
              />
            </div>
            {/* Topic Area */}
            <div className="form-group input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fa fa-file"></i>
                </span>
              </div>
              <input
                name="topicArea"
                value={topicArea}
                className="form-control"
                placeholder="Reasearch Topic"
                type="text"
                onChange={handleChange}
              />
            </div>
            {/* email */}
            <div className="form-group input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fa fa-envelope"></i>
                </span>
              </div>
              <input
                name="email"
                value={email}
                className="form-control"
                placeholder="Email address"
                type="email"
                onChange={handleChange}
              />
            </div>
            {/* username */}
            <div className="form-group input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fa fa-user"></i>
                </span>
              </div>
              <input
                name="username"
                value={username}
                className="form-control"
                placeholder="Username"
                type="text"
                onChange={handleChange}
              />
            </div>
            {/* password */}
            <div className="form-group input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fa fa-lock"></i>
                </span>
              </div>
              <input
                name="password"
                value={password}
                className="form-control"
                placeholder="Create password"
                type="password"
                onChange={handleChange}
              />
            </div>
            {/* password1 */}
            <div className="form-group input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fa fa-lock"></i>
                </span>
              </div>
              <input
                name="password1"
                value={password1}
                className="form-control"
                placeholder="Confirm password"
                type="password"
                onChange={handleChange}
              />
            </div>
            <br/>
       
            {/* signup button */}
            <center>
            <div className="form-group">
              <button type="submit" className="btn btn-primary btn-block">
                Sign Up
              </button>
            </div>
            </center>
            <br/>
            {/* already have account */}
            <div>
              <p className="text-center text-Black">
                <b> Have an account? </b> <Link to="/">Log In</Link>
              </p>
            </div>
            
          </form>
        );
      
        /************************************
         *RENDER*
         *************************************/
      
        return (
          <div className="staffsignup-container">
            <div className="row px-3 py-4 vh-100">
              <div className="col-md-5 mx-auto align-self-center">
                <br />
                <br />
                {successMsg && showSuccessMsg(successMsg)}
                {errorMsg && showErrorMsg(errorMsg)}
                {loading && <div className="text-center pb-4">{showLoading()}</div>}
                {showSignupForm()}
                {/*<p style = {{ color: 'black'}}>{JSON.stringify(formData)}</p>*/}
              </div>
            </div>
          </div>
        );
      };

export default StaffSignup;
      






    
  
