import React from 'react'

const UsersList = (props) => {


    let selectedUser = (user)=>{
        props.method(user)
    }
    return (
        <>
            <h1>UsersList</h1>
            <pre>{JSON.stringify(props)}</pre>
            <table className='table table-hover'>
                <thead className="bg-info text-white">
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Email</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.users.map((user)=>{
                            return <tr key={user.id} onMouseOver={selectedUser.bind(this,user)}>
                                <td>{user.id}</td>
                                <td>{user.firstName}</td>
                                <td>{user.email}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default UsersList
