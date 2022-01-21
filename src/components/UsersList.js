import React from 'react';
import UserCard from './UserCArd';

function UserList({user}) {
  return(
   <div>
    <UserCard user={user}/>
    
   
  </div>
  ) 
}

export default UserList;
