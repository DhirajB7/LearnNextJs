import Link from 'next/link'
import React from 'react'

const Posts = ({ id, title, body }) => {
    return (
        <>
            <Link href={`/posts/${id}`}>{id} {title}</Link>
            <p>{body.slice(0,20)}...</p>
            <hr/>
        </>
    )
}

export default Posts