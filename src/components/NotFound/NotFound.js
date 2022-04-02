import React from 'react';

const NotFound = () => {
    return (
        <div className='d-flex flex-column justify-content-center align-items-center'>
            <h1><span className='display-2 text-danger'>404</span> <span className='font-serif'>Page Not Found</span> </h1>
            <h3 style={{fontFamily: 'serif'}}>The page you are looking for is Unavailable</h3>
        </div>
    );
};

export default NotFound;