
import React,{use}from 'react';

const Users = ({usersPromise}) => {

    const users = use(usersPromise());
    return (
        <div>
            {users.map(user => 
                <li key={user.id}>{user.name}-{user.email}</li>
            )}
        </div>
    );
};
export default Users;