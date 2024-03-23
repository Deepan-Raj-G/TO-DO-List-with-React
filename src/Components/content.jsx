import React, { Component } from 'react'
import ListItems from './listItems';

const Content = ({items, handleDelete, handleSelect}) => {
    return (
        <main>
            {(items.length) ? (
            <ul>
                { items.map(item => (
                    <ListItems
                    item = {item}
                    handleDelete = {handleDelete}
                    handleSelect = {handleSelect}
                    />
                ) )}
            </ul>
            ) : (
                <h2>List is empty</h2>
            )}       
        </main>
    )
}

export default Content