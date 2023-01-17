import React from 'react'
import profileImage from '../../../../assets/profileImage.png'
import './users.js'

const Users = () => {
  return (
    <div className="users-sections">
      <section>
        <div>
          <div>
            <img src={profileImage} alt="profileImmages" />
          </div>
        </div>
      </section>
      <section></section>
    </div>
  )
}

export default Users
