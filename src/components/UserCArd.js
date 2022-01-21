import React from 'react';
import {Card, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom'

function UserCArd({user}) {

return (
<div className="usercard">
<Card style={{ width: '18rem' }}>
<Card.Img variant="top" src="https://icon-library.com/images/facebook-user-icon/facebook-user-icon-17.jpg" />
<Card.Body>
<Card.Title>{user.name}</Card.Title>
<Card.Text>
            {user.username}
            </Card.Text>
            <Card.Text>
            {user.email}
            </Card.Text>
           <Link to={`/user/${user.id}`}><Button variant="primary">Details</Button></Link> 
   
</Card.Body>
</Card>

</div>
);
}

export default UserCArd;
