import React from 'react';
import User from './User';

const Users = (props) => {
    return (
        <div>
            {
                props.usersData.map((user) => {
                    return <User
                        userInfo={user}
                        key={user.id}
                        deleteUser={props.deleteUser}
                        editUser = {props.editUser}
                    />
                })
            }

        </div>
    );
}

export default Users;

