import React from 'react'

const SearchItem = ({search, SetSearch}) => {
  return (
    <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="search">Search</label>
        <input 
        id='search'
        role='searchbox'
        type="text" 
        placeholder='Search'
        value={search}
        onChange={(e)=>SetSearch(e.target.value)}
        />
    </form>
  )
}

export default SearchItem