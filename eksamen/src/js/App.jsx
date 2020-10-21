import React from 'react';
import '../css/App.css';
import Text from './components/Text';

import {menu, users} from './database';

function App() {


    return (
        <div>
            {
                users.map(user => {
                    return <Text user={user}/>
                })
            }
        </div>
    );
}

export default App;
