import React from 'react';
import './index.css';

function Body (props) {
    return (
        <div className="container-fluid">
            {props.children}
        </div>
    )
}

export default Body;