import React from 'react';
import '../css/App.css';
import Text from './components/Text';
import {users, coffee, drinks, food} from './database';
import Coffee from './components/Coffee';

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
                    coffee.map(coffee => {
                        return <Coffee coffee={coffee.hot}/>
                    })
                }
            </div>
        </div>
    );
}

export default App;
