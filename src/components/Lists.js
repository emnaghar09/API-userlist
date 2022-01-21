import React, {useEffect,useState} from 'react';
import axios from 'axios';
import UserList from './UsersList'
function List() {
// we put the extracted data from api in the hook so we can use it later
    const [users, setUsers]= useState([])
// axios is places before return, axios is a librairy used to send a request
const getData =()=> {axios
    .get('https://jsonplaceholder.typicode.com/users')
    // .then(response => console.log(response)) avec ceci on a su que les donnees array sont stockee dans data
    .then(response => setUsers(response.data))
    .catch(erreur => console.log(erreur))
}

useEffect(() => {  getData()  },[])
  
  return( <div className="user-list">
    
  {users.map(user => <UserList key={`UserList_${user.id}`} user={user} />)}
</div>
)
}

export default List;

// <img src='https://static.vecteezy.com/system/resources/previews/002/787/929/non_2x/cute-cat-waving-paw-cartoon-illustration-vector.jpg' width="100" height="50" />