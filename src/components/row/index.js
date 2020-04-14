import React from 'react';

function Row (props) {
    return (
        <div className={`row ${props.className !== undefined ? props.className : "" }`}>
        {props.children}
        </div>
    )
}

export default Row;