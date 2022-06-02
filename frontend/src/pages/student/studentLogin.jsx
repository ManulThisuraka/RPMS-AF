import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { showErrorMsg } from "../../helpers/message";
import { showLoading } from "../../helpers/loading";
import { setAuthentication, isAuthenticated } from "../../helpers/auth";
import isEmpty from "validator/lib/isEmpty";
import isEmail from "validator/lib/isEmail";
import { signin } from "../../api/auth";

const SignIn = () => {
  let history = useNavigate();

  useEffect(() => {
    if (isAuthenticated() && isAuthenticated().roleID === 0) {
      history.push("/");
    } else if (isAuthenticated() && isAuthenticated().roleID === 1) {
      history.push("/product");
    }
  }, [history]);

  const [formData, setFormData] = useState({
    stdEmail: "user@x.com",
    password: "password1234",
    errorMsg: false,
    loading: false,
  });

  const { stdEmail, password, errorMsg, loading } = formData;

  /************************************
   *EVENT HANDLERS*
   *************************************/
  const handleChange = (evt) => {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
      errorMsg: "",
    });
  };

  const handleSubmit = (evt) =>  {
    evt.preventDefault();

    //client-side validation
    if (isEmpty(stdEmail) || isEmpty(password)) {
      setFormData({
        ...formData,
        errorMsg: "All fields are required",
      });
    } else if (!isEmail(stdEmail)) {
      setFormData({
        ...formData,
        errorMsg: "Invalid Email",
      });
    } else {
      const { stdEmail, password } = formData;
      const data = { stdEmail, password };
      console.log("DATA",data);

    //   setFormData({ ...formData, loading: true });
       await signin(data)
        .then((response) => {
            console.log("Axios login success: ", response);
        //   setAuthentication(response.data.token, response.data.user);

        //   if (isAuthenticated() && isAuthenticated().roleID === 0) {
        //     console.log("Redirecting to student home page");
        //     history.push("/testss");
        //   } else {
        //     console.log("Redirecting to user dashboard");
        //     history.push("/product");
        //   }
        })
        .catch((err) => {
          console.log("signin api function error: ", err);
        //   setFormData({
        //     ...formData,
        //     loading: false,
        //     errorMsg: err.response.data.errorMessage,
        //   });
        });
    }
  };

  /************************************
   *VIEWS*
   *************************************/

  const showSigninForm = () => (
    <form className="signup-form" onSubmit={handleSubmit}>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      {/* email */}
      <div className="form-group input-group">
        <div className="input-group-prepend">
          <span className="input-group-text">
            <i className="fa fa-envelope"></i>
          </span>
        </div>
        <input
          name="email"
          value={stdEmail}
          className="form-control"
          placeholder="Email address"
          type="email"
          onChange={handleChange}
        />
      </div>&nbsp;

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
      </div>&nbsp;

      {/* signin button */}
      <center>
      <div className="form-group">
        <button type="submit" className="btn btn-primary btn-block">
          Sign In
        </button>
      </div>
      </center>

      {/* create new account */}
      <p className="text-center text-Black">
        <b> Don't have an account? </b> <Link to="/signup">Register Here</Link>
      </p>
    </form>
  );

  /************************************
   *RENDER* col-md-4 py-4 mx-auto center
   *************************************/

  return (
    <div className="signin-container">
      <div className="row px-3 py-4 vh-100">
        <div className="col-md-4 py-5 mx-auto align-self-center ceneter">
          {errorMsg && showErrorMsg(errorMsg)}
          {loading && <div className="text-center pb-4">{showLoading()}</div>}
          {showSigninForm()}
        </div>
      </div>
    </div>
  );
};

export default SignIn;
