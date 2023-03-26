import Posts from "@/components/postComponent/Posts";
import { useRouter } from "next/router";

const index = ({ posts }) => {
  const router = useRouter();

  return (
    <>
      <button onClick={() => router.push("/")}>Back to homepage</button>

      <div>
        {posts.map((post) => (
          <Posts
            key={post.id}
            id={post.id}
            title={post.title}
            body={post.body}
          />
        ))}
      </div>
    </>
  );
};

export default index;

export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  const resJson = await response.json();

  return {
    props: {
      posts: resJson,
    },
  };
};
