import React from 'react'
import {Container, Alert, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function Logout() {
    const navigate = useNavigate();
  return (
    <Container>
      <Alert key='danger' variant='danger'>
          <h3>로그인을 하셔야 합니다!</h3>
      </Alert>
      <button className='go-login' onClick={()=>navigate("/login")}>
        로그인 페이지로 이동 →
    </button>
    </Container>
  )
}

export default Logout
