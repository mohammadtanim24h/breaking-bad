import React from 'react';
import banner from '../../images/banner.jpg';
import './Home.css';

const Home = () => {
    return (
        <div className='banner'>
            <img src={banner} alt="walterandjesse" />
        </div>
    );
};

export default Home;