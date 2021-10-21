import React from 'react'
import {useSelector} from 'react-redux'

import './profile-page.scss'

const ProfilePage = () => {
  const login = useSelector((state) => state.login)

  return (
    <div className='profile__width'>
      <h1 className='profile__title'>{login} </h1>
    </div>
  )
}

export default ProfilePage
