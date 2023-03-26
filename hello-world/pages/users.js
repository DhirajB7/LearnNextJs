import Users from "@/components/userComponent/Users";
import Link from "next/link";
import { useRouter } from "next/router";

const UserList = ({ users }) => {
  const router = useRouter();

  return (
    <>
      <button onClick={() => router.push("/")}>Back to homepage</button>
      <div>
        {users.map((user) => (
          <Users key={user.id} name={user.name} email={user.email} />
        ))}
      </div>
    </>
  );
};

export default UserList;

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  const resJson = await res.json();

  return {
    props: {
      users: resJson,
    },
  };
};
