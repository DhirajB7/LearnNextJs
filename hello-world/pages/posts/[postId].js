import OnePost from "@/components/postComponent/OnePost"

const postId = ({ posts }) => {
    return (
        <div>
            <OnePost id={posts.id} title={posts.title} body={posts.body} />
        </div>
    )
}

export default postId

export const getStaticPaths = async () => {

    const response = await fetch('https://jsonplaceholder.typicode.com/posts')

    const resJson = await response.json()

    const paths = resJson.map(post => ({params: {postId: `${post.id}`}}))

     return {
        paths,
        fallback:false
    }

}


export const getStaticProps = async (context) => {

    const { params } = context

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)

    const resJson = await response.json()

    return {

        props: {
            posts: resJson
        }

    }

}