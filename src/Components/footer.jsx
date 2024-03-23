import React from 'react';
import '../index.css';

const Footer = ({length}) => {
    return ( 
        <footer>
            <h1>{length} List {(length === 1) ? "Item" : "Items" }</h1>
        </footer>
    );
}
 
export default Footer;