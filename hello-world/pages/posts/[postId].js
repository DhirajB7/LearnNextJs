import OnePost from "@/components/postComponent/OnePost"
import { useRouter } from "next/router"

const postId = ({ posts }) => {

    const router = useRouter()

    if (router.isFallback) {
        return <h1>Loading...</h1>
    }

    return (
        <div>
            <OnePost id={posts.id} title={posts.title} body={posts.body} />
        </div>
    )
}

export default postId

export const getStaticPaths = async () => {

    //const response = await fetch('https://jsonplaceholder.typicode.com/posts')

    // const resJson = await response.json()

    // const paths = resJson.map(post => ({params: {postId: `${post.id}`}}))

    const paths =
        [
            { params: { postId: "1" } },
            { params: { postId: "2" } },
            { params: { postId: "3" } },
        ]

    return {
        paths,
        fallback: true
    }

}


export const getStaticProps = async (context) => {

    const { params } = context

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)

    const resJson = await response.json()

    if(!resJson.id){
        return {
            notFound:true
        }
    }

    return {

        props: {
            posts: resJson
        }

    }

}