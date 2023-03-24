import Link from 'next/link'
import React from 'react'

const Posts = ({ id, title, body }) => {
    return (
        <>
            <Link href={`/posts/${id}`}>{title}</Link>
            <hr/>
        </>
    )
}

export default Posts