import Users from "@/components/userComponent/Users"

const UserList = ({users}) => {
    return (
        <>
            <div>
                {users.map(user => <Users key={user.id} name={user.name} email = {user.email}/>)}
            </div>            
        </>
    )
}

export default UserList

export const getStaticProps = async () => {

    const res = await fetch("https://jsonplaceholder.typicode.com/users")

    const resJson = await res.json()

   return {

    props:{
        users:resJson
    }

   }

}