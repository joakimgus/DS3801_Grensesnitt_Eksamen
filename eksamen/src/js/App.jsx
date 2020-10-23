import React from 'react';
import '../css/App.css';
import Text from './components/Text';
import {users, hotcoffee, coldcoffee, drinks, food} from './database';
import HotCoffee from './components/HotCoffee';
import Footer from './components/Footer';

function App() {

    return (
        <div>
            {/*
            <div>
                {
                    users.map(user => {
                        return <Text user={user}/>
                    })
                }
            </div>
            */}
            <div>
                {
                    hotcoffee.map(hotcoffee => {
                        return <HotCoffee hotcoffee={hotcoffee}/>
                    })
                }
            </div>
            <Footer />
        </div>
    );
}

export default App;
