import React, { useState } from "react";

const  Search = ( {onSearch} ) => {
        const [ query, setQuery ] = useState('');

        return (
            <div className="search">
            <label htmlFor="query">Buscar</label>
            <input 
                    type="search" 
                    name="query" 
                    id="query"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)} />
            <button className='btn' onClick={(e) => onSearch(query)}>Buscar</button>
        </div>

        )
}

export default Search;