import React from 'react';
import '../index.css';

const Header = (props) => {
    return (
        <header>
            <h1>{props.tittle}</h1>
        </header>
    );
}
 
export default Header;