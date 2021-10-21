import React from 'react'
import './header.scss'
import { Link } from 'react-router-dom'

const Header = () => {

  return (
    <header className='header'>
      <Link to='/'>
        Header
      </Link>
      <div></div>
    </header>
  )
}

export default Header
