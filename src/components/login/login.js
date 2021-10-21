import React, {useState} from 'react'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import './login.scss'

const Login = () => {
  const login = useSelector((state) => state.login)
  const password = useSelector((state) => state.password)
  const [loginLabel, setLoginLabel] = useState('')
  const [passwordLabel, setPasswordLabel] = useState('')

  const onSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <form onSubmit={onSubmit} className='login'>
      <div className='login__block'>
        <div className='login__block-input'>
          <input
            type='text'
            value={loginLabel}
            placeholder='login'
            onChange={(e) => setLoginLabel(e.target.value)}>
          </input>
          <input
            type='text'
            value={passwordLabel}
            placeholder='password'
            onChange={(e) => setPasswordLabel(e.target.value)}>
          </input>
        </div>
      </div>
      {(login === loginLabel && password === Number.parseInt(passwordLabel)) ?
        <Link to='/profile' className='login__btn-valid'>
          Войти
        </Link>
        :
        <button className='login__btn-disabled'>Войти</button>
      }
    </form>
  )
}

export default Login
