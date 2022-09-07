import React from 'react';
import Nav from '../Components/Nav/Nav';
import StartNetworking from './StartNetworking';
function Home(props) {
    return (
        <div>
            <Nav />
            <div className="container main">
                <StartNetworking />
            </div>
        </div>
    );
}

export default Home;