import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  const handleClick = () => {
    window.open("https://www.netflix.com/in/login", "_blank");
  };
  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        className="nav_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
      />
      <img
        className="nav_avatar"
        src="https://pbs.twimg.com/media/CW2i0pJW4AEYFI3?format=png&name=360x360"
        alt="Netflix Logo"
        onClick={() => {
          handleClick();
        }}
      />
    </div>
  );
}

export default Nav;
