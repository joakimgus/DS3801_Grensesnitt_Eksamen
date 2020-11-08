import React from 'react';

const Text = (user) => {

    return (
        <div className="productCard">
            {user.user.firstName}
            <img src={user.user.userimg} />
        </div>
    )
}

export default Text;