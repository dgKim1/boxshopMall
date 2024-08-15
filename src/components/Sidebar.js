import React from "react";
import styles from "./Sidebar.css"
import CloseButton from 'react-bootstrap/CloseButton';
import { CiMenuBurger } from "react-icons/ci";

const Sidebar = () => {
  const closeNav = ()=>{
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("mySidenav").style.display = "none";
  }
  const openNav = ()=>{
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("mySidenav").style.display = "block";
  }
  return (
    <div>
      <button onClick={openNav} className='menu-box'><CiMenuBurger size={25}/></button>
      <div id="mySidenav" className="sidenav">
      <a href="javascript:void(0)" class="closebtn" onClick={closeNav}>&times;</a>
        <a href="#">여성</a>
        <a href="#">남성</a>
        <a href="#">Top</a>
        <a href="#">Bottom</a>
      </div>
    </div>
  );
};

export default Sidebar;
