import React, { useState } from 'react';
import '../style/components/searchbar.css'
//Font Awesome Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';


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
         <button onClick={handleSearch}><FontAwesomeIcon icon={faMagnifyingGlass} className="icons header-icon" /></button>   
            <input
                type="text"
                value={searchTerm}
                onChange={handleInputChange}
                placeholder="Rechercher par nom de produit, marque, catégorie ..."
            />
        </div>
    );
}

export default SearchBar;