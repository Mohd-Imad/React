import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Axios from 'axios'
import UsersList from './UsersList'
import UserDetails from './UserDetails'

const UserApp = () => {
  let [users, setUsers] = useState({})
  let [selUser,setSelUser]=useState({})
  useEffect(() => {
    Axios.get("https://dummyjson.com/users").then((res) => { setUsers({ users: res.data }) }).catch(() => { })
  }, [])
  
  let selectedUser=(user)=>{       //user---argument receving from UserList
    setSelUser({selUser:user})
  }


  return (
    <>
      <h1>UserApp</h1>
      <pre>{JSON.stringify(users)}</pre>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            {
              Object.keys(users).length > 0 ? <>
                <UsersList users={users.users.users} method={selectedUser}/>
              </> : <h1>No Users</h1>
            }
          </div>
          <div className="col-md-4">
            {
              Object.keys(selUser).length > 0 ? <>
                <UserDetails  data={selUser}/>
              </> : null
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default UserApp
