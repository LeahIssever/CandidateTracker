import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

const Home = () => {

    const [count, setCount] = useState(0);

    const onButtonClick = () => {
        setCount(count + 1);
    }

    return (
        <div className="app-container">
            <div className="d-flex flex-column justify-content-center align-items-center">
                <div className="container" style={{ margintop: 80 }}>
                    <h1>Welcome to the Candidate Tracker. Use the links above to navigate.</h1>
                </div>
            </div>
        </div>
    );
};

export default Home;