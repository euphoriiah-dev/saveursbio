import React, { useState } from 'react';
import '../style/components/searchbar.css'

function SearchBar({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearch = () => {
        onSearch(searchTerm);
    };

    return (
        <div className='input-01'>
            <input
                type="text"
                value={searchTerm}
                onChange={handleInputChange}
                placeholder="Rechercher par nom de produits, marque, catégorie ..."
            />
            <button onClick={handleSearch}>Rechercher</button>
        </div>
    );
}

export default SearchBar;