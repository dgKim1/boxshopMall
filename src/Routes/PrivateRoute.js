import React from 'react'
import ProductDetail from '../page/ProductDetail'
import { Navigate } from 'react-router-dom'

function PrivateRoute({authenticate}) {
  return (
    <div>
      {authenticate?(<ProductDetail/>):(<Navigate to={"/login"}/>)}
    </div>
  )
}

export default PrivateRoute
