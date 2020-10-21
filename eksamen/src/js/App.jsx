import React from 'react';
import '../css/App.css';
import Text from './components/Text';
import Menu from './components/Menu';

import {menu, users} from './database';

function App() {


    return (
        <div>
            <div>
                {
                    users.map(user => {
                        return <Text user={user}/>
                    })
                }
            </div>
            <div>
                {
                    menu.map(menu => {
                        return <Menu menu={menu}/>
                    })
                }
            </div>
        </div>
    );
}

export default App;
