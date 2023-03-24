import React from 'react'

const OnePost = ({ id, title, body }) => {
    return (
        <>
            <h2>{id}</h2>
            <h3>{title}</h3>
            <h5>{body}</h5>
            <hr/>
        </>
    )
}

export default OnePost