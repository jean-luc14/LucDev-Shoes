import React from 'react'
import { Link } from 'react-router-dom'
import '../scss/components/PageNotFound.scss'

const PageNotFound = () => {
  return (
    <div className="center">
      <h1> Hey,this page does not exist</h1>
      <Link to='/'> Go to Home </Link>
    </div>
  )
}

export default PageNotFound