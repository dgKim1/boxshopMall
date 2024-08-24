import React from 'react'
import { Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { IoPerson } from "react-icons/io5";
import { CiLock } from "react-icons/ci";

const Login = ({setAuthenticate}) => {
  const navigate = useNavigate();
  const loginUser = (event)=>{
    event.preventDefault();
    setAuthenticate(true);
    navigate("/");

  }
  return ( 
    <Container className='h-full '>
      <div className='login-wrap'>
        <form className='h-3/5 login-form'>
          <div className='flex items-center mb-3'>
          <h className="outfit-shop text-3xl pb-3 font-bold">Login</h>
        </div>
        <div className='id-box'>
        <label className='text-gray-400 flex items-center'><span><IoPerson/></span>아이디 또는 전화번호</label>
        <input type='text' className='input-id'/>
        </div>
        <div className='id-box-bottom'>
        <label className='text-gray-400 flex items-center'><span><CiLock/></span>비밀번호</label>
        <input type='text' className='input-id'/>
        </div>
        <button className="login-form-bttn outfit-shop text-xl" onClick={(event)=>loginUser(event)}>로그인</button>
      </form>
      <ul className='flex relative'>
        <li><a className='find-text'>아이디 찾기</a></li>
        <li className='li-passwd'><a className='find-text '>비밀번호 찾기</a></li>
        <li className='li-sign'><a className='find-text'>회원가입</a></li>
      </ul>
      </div>
    </Container>
  )
}

export default Login
