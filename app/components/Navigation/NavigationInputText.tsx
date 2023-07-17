import { useContext, useEffect, useRef, useState } from 'react'
import AsyncSelect from 'react-select/async'
import { NearlyContext } from '../../context/context'

const NavigationInputText = () => {
  const { userData, setSelectedArea } = useContext(NearlyContext)
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  
  const dropdownRef = useRef<HTMLUListElement>();

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    // Fetch search results from the API using value as a query parameter
    // Replace 'YOUR_API_ENDPOINT' with your actual API endpoint

  // const url:string = "https://api.nearly.site/locations/search?search="
  const url:string = "http://localhost:3001/locations/search?search="
  

    fetch(url+value)
      .then(response => response.json())
      .then(data => setSearchResults(data))
      .catch(error => console.error(error));
  };

  const handleSelect = (area) => {
    setSelectedArea(area);
    setSearchTerm(area.name);
    setSearchResults([]);
  };

  return (
    <div className="relative">
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search for areas..."
        className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 w-64"
     
      />
      {searchResults.length > 0 && (
        <ul
        ref={dropdownRef}
        className={`absolute z-10 mt-1 bg-white border border-gray-300 rounded-md w-64 ${
          searchResults.length === 0 ? 'hidden' : 'block'
        }`}
        >
          {searchResults.slice(0, 5).map((area,index) => (
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-black" key={index} onClick={() => handleSelect(area)}>
              {area.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavigationInputText;
