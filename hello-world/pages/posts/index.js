import Posts from "@/components/postComponent/Posts"

const index = ({posts}) => {
    return (
        <>

        {posts.map(post => <Posts key={post.id} id={post.id} title={post.title} body={post.body}/>)}

        </>
    )
}

export default index

export const getStaticProps = async () => {

    const response = await fetch('https://jsonplaceholder.typicode.com/posts')

    const resJson = await response.json()

    return {

        props: {
            posts: resJson
        }

    }

}