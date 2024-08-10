import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";

function Navbar({ authenticate, setAuthenticate }) {
  const MenuList = ["여성", "남성", "Top", "Bottom"];
  const navigate = useNavigate();
  const goToLogin = () => {
    console.log(authenticate);
    if (authenticate) {
      setAuthenticate(false);
      console.log("gotologout");
      navigate("/logout");
    } else navigate("/login");
  };

  const search = (event) => {
    if (event.key === "Enter") {
      let keyword = event.target.value;
      navigate(`/?q=${keyword}`);
    }
  };

  const goToHome = () => {
    navigate("/");
  };
  console.log(authenticate);
  return (
    <div>
      <div className="login-bttn" onClick={goToLogin}>
        <FontAwesomeIcon icon={faUser} />
        {authenticate ? <div>로그아웃</div> : <div>로그인</div>}
      </div>
      <div className="logo-img" onClick={goToHome}>
        <img width={100} src="https://www2.hm.com/hm-logo.png" />
      </div>
      <div className="search-box">
        <div className="search-underline">
          <IoIosSearch className="h-5 w-5" />
          <input
            type="search"
            className="border-2 pr-3 border-none focus:outline-none"
            placeholder="search..."
            onKeyPress={(event) => search(event)}
          />
        </div>
      </div>
      <div className="menu-area">
        <ul className="menu-list">
          {MenuList.map((menu) => (
            <li>{menu}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
