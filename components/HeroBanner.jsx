import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { urlFor } from "../lib/client";
import { useEffect } from "react";

const HeroBanner = ({ heroBanner }) => {
  const [loginState, setLoginState] = useState("Login");
  const router = useRouter();
  // const handleLogout = () => {
  //   if (typeof window !== "undefined") {
  //     console.log("checking");
  //     if (localStorage.getItem("profile")) {
  //       console.log("Inside");
  //       localStorage.clear;
  //     } else {
  //       router.push(`/Authentication/Auth`);
  //     }
  //   }
  // };

  const handleLogout = () => {
    setLoginState("Login");
    if (typeof window !== "undefined") {
      console.log("inside logout");
      localStorage.clear();
    }
  };

  const handleAuth = () => {
    if (typeof window !== "undefined") {
      if (!localStorage.getItem("profile")) {
        router.push("/Authentication/Auth");
        // setLoginState("Logout");
      }
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (localStorage.getItem("profile")) {
        setLoginState("Logout");
      }
      if (loginState === "Login") {
        console.log("testing useeffect");
      }
    }
  }, [router.asPath]);

  let path;
  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     path = localStorage.getItem("profile");
  //   }
  // }, [path]);

  let username;

  if (typeof window !== "undefined") {
    username = localStorage.getItem("username");
  }

  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">
          {username ? `Welcome! ${username} 👋` : heroBanner.smallText}
        </p>
        <h3>{heroBanner.midText}</h3>
        <h1>{heroBanner.largeText1}</h1>
        <img
          src={urlFor(heroBanner.image)}
          alt="headphones"
          className="hero-banner-image"
        />

        <div>
          {
            // <Link href={`/Authentication/Auth`}>
            <button
              style={{ display: loginState === "Login" ? "block" : "none" }}
              onClick={handleAuth}
              type="button"
            >
              Login
            </button>

            //   <button style={{display: loginState==='Logout' ? 'block' : 'none' }} onClick={handleAuth} type="button">
            //   "Logout"
            // </button>
            // </Link>
          }
          {
            <button
              style={{ display: loginState === "Logout" ? "block" : "none" }}
              onClick={handleLogout}
              type="button"
            >
              Logout
            </button>
          }
          <div className="desc">
            {/* <h5>Description</h5>
            <p>{heroBanner.desc}</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
