import {
  Avatar,
  Button,
  Container,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import { LockOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import GoogleLogin from "react-google-login";
import Icon from "./Icon.js";

import { useRouter } from "next/router";

import Input from "./Input";

const Auth = () => {
  const router = useRouter();

  const [isSignUp, setisSignUp] = useState(false);
  const [Showpassword, setShowpassword] = useState(false);
  let username;
  // if (typeof window !== 'undefined') {
  //   username = localStorage.getItem('path')

  // }

  const SubmitHandler = (e) => {
    e.preventDefault();
  };

  const handleChange = () => {};

  const handleShowPassword = () =>
    setShowpassword((prevShowPassword) => !prevShowPassword);

  const switchMode = () => {
    setisSignUp((prevState) => !prevState);
    handleShowPassword(false);
  };

  const GoogleSuccess = async (res) => {
    const username = res.profileObj.name;
    if (typeof window !== "undefined") {
      localStorage.setItem("username", username);
    }
    const googleID = res.googleId;

    console.log(username);
    localStorage.setItem("profile", JSON.stringify({ username, googleID }));
    console.log(res);
    router.push("/");
  };

  const GoogleFailure = () => {
    console.log("Google Sign in failed.Please Try Again Later");
  };

  return (
    <div className="container">
      <div className="screen">
        <div className="screen__content">
          <form className="login">
            <div className="login__field">
              <i className="login__icon fas fa-user" />
              <input
                type="text"
                className="login__input"
                placeholder="User name / Email"
              />
            </div>
            <div className="login__field">
              <i className="login__icon fas fa-lock" />
              <input
                type="password"
                className="login__input"
                placeholder="Password"
              />
            </div>
            <button className="button login__submit">
              <span className="button__text">Log In Now</span>
              <i className="button__icon fas fa-chevron-right" />
            </button>
            <GoogleLogin
              clientId="377386531731-nfueq28h4q7r4sdmbie5ej72928e45bj.apps.googleusercontent.com"
              render={(renderProps) => (
                <button
                  onClick={renderProps.onClick}
                  className="button login__submit"
                  disabled={renderProps.disabled}
                >
                  Sign in With Google
                </button>
              )}
              onSuccess={GoogleSuccess}
              onFailure={GoogleFailure}
              cookiePolicy="single_host_origin"
            />
          </form>
        </div>
        <div class="screen__background">
          <span class="screen__background__shape screen__background__shape4"></span>
          <span class="screen__background__shape screen__background__shape3"></span>
          <span class="screen__background__shape screen__background__shape2"></span>
          <span class="screen__background__shape screen__background__shape1"></span>
        </div>
      </div>
    </div>
  );
};

export default Auth;
