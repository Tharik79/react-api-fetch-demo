import React from 'react'

function ComLists({name, email, body}) {
  return (
    <div>ComLists
        <h2>{name}</h2>
        <p>{email}</p>
        <p>{body}</p>
    </div>
  )
}

export default ComLists