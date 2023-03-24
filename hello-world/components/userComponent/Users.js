import React from 'react'

const Users = ({name,email}) => {
  return (
    <div>
        <h3>{name}</h3>
        <h5>{email}</h5>
        <hr/>
    </div>
  )
}

export default Users