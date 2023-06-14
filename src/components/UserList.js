import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function UserList() {
    const [users, setusers] = useState([]);
    useEffect(() => {
      try {
        axios.get("https://jsonplaceholder.typicode.com/users").then((res)=> {
            setusers(res.data)});
      } catch (error) {
        console.log(error);
      }
    }, []);
    console.log(users)
    
  return (
    <div>
       {users ? users.map((el)=>(
       <div>
        <div>
    
      <Card className='container'>
        <h3>{el.name}</h3>
        <h3>
          <h3>{el.username}</h3>
          <h3>{el.email}</h3>
        </h3>
        <Button> See more</Button>
      </Card>
    </div>
         </div>)):(<img src='https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921' alt='img'/>) } 
    </div>
  )
}

export default UserList