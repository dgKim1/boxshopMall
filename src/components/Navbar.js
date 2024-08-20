import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { IoPerson } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import { RiShoppingBag4Fill } from "react-icons/ri";
import Sidebar from './Sidebar';
import SimpleSlider from './SimpleSlider';





function Navbar({ authenticate, setAuthenticate,isSlide,setIsSlide }) {
  const MenuList = ["All","Women", "Man", "Top", "Bottom"];
  const [clickTarget,setClickTarget] = useState(null);
  const [windowSize, setWindowSize] = useState({
    width : undefined,
    height: undefined,
});
  const navigate = useNavigate();
  const goToLogin = () => {
    console.log(authenticate);
    if (authenticate) {
      setIsSlide(true);
      setAuthenticate(false);
      alert("로그아웃 완료!")
    } else {
      setIsSlide(false);
      navigate("/login");
    }
  };

  const search = (event) => {
    if (event.key === "Enter") {
      let keyword = event.target.value;
      navigate(`/?q=${keyword}`);
    }
  };

  const onClickTab = (event,menu) =>{
    if(menu==="All") navigate("/")
    else navigate(`/filter?search=${menu}`);
    horizontalIndicator(event);
  }

  const goToHome = () => {
    navigate("/");
  };

  function horizontalIndicator(target) {
    if(target===null) setUnderline();//첫 마운트시 클릭 이벤트가 없으므로 무조건 target이 null이 되는 에러 처리
    else{
    let underLine = document.getElementById('under-line');
    underLine.style.left = target.offsetLeft + "px";
    underLine.style.width = target.offsetWidth + "px";
    underLine.style.top = target.offsetTop + target.offsetHeight+"px";
    }
  }
  function setUnderline(){
    let underLine = document.getElementById('under-line');
let firstMenu = document.getElementById('menu');
underLine.style.left = firstMenu.offsetLeft+ "px";
underLine.style.width = firstMenu.offsetWidth + "px";
underLine.style.top = firstMenu.offsetTop+firstMenu.offsetHeight+"px";

  }

  function resizeWindow(){
    setWindowSize({
      // 현재 브라우저의 가로, 세로 길이로 셋팅
                width: window.innerWidth,
                height: window.innerHeight,
    
            })
  }


useEffect(()=>{
  setUnderline();
},[isSlide]);
useEffect(()=>{
  window.addEventListener("resize",resizeWindow)
  horizontalIndicator(clickTarget)
},[windowSize]);

  return (
    <div>
      <div className="login-bttn" onClick={goToLogin}>
        <span className='mr-2'><RiShoppingBag4Fill size={25}/></span>
        {authenticate ? <><IoPerson size={25}/><div>로그아웃</div></> : <><IoPersonOutline size={25}/><div>로그인</div></>}
      </div>
      <div className="logo-img" onClick={goToHome}>
        <img width={300}  src='/img/shopmallLogo.png' />
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
      {
        isSlide? (<div className='flex justify-center items-center'>
        <h className="lilita-one-big my-4">Best&nbsp;&nbsp;Products🔥</h>
        </div>):null
      }
      {
      isSlide ? (
      <SimpleSlider/>
      ) : null
      }
      <div className="menu-area">
        <ul className="menu-list">
        <div id="under-line"></div>
          {MenuList.map((menu) => (
            <li onClick={(event)=>{
              onClickTab(event.target,menu)
              setClickTarget(event.currentTarget)
            }} 
              className='lilita-one-small' id='menu'>{menu}</li>
          ))}
        </ul>
      </div>
      <Sidebar/>
    </div>
  );
}

export default Navbar;
