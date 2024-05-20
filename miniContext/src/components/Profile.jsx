import React,{useContext} from 'react'
import UserContext from '../context/UserContext'
function Profile() {
    const {user} = useContext(UserContext)
  
    if(!user) return <div> <h2>Please Login</h2></div>
    return <div> <h2>Username : {user.username}</h2></div>
}

export default Profile