import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/header.css";

const Header = () => {
  return (
    <div className="flex justify-center">
      <div className="flex h-[80px] w-[90%] justify-around absolute z-10 items-center m-auto header">
        <div className="">
          <Link to="/">
            <h1 className="inline-block text-white logo">FLIX</h1>
          </Link>
        </div>
        <div className="flex gap-5">
          <Link to="/">
            <h1 className="">Home</h1>
          </Link>
          <Link to="/movies">
            <h1 className="">Movies</h1>
          </Link>
          <Link to="/series">
            <h1 className="">TV Shows</h1>
          </Link>
        </div>
        {/* <div className="flex gap-3">
        <button>Login</button>
        <button>Register</button>
      </div> */}
      </div>
    </div>
  );
};

export default Header;
