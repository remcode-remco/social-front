import { useContext, useEffect, useRef, useState } from 'react'
import { NearlyContext } from '../../context/context'
import { SelectedArea } from '@/app/typings/typings'
import NavigationInputLabel from './NavigationInputLabel'

const NavigationInputText = ({selectedArea,setSelectedAreaChanges}:{selectedArea:SelectedArea,setSelectedAreaChanges:(selectedArea:SelectedArea)=>void}) => {
  const [searchTerm, setSearchTerm] = useState(selectedArea.name)
  const [searchResults, setSearchResults] = useState([])

  const dropdownRef = useRef<HTMLUListElement>()

  const handleChange = (e: { target: { value: string } }) => {
    const value = e.target.value
    setSearchTerm(value)

    const url:string = "https://api.nearly.site/locations/search?search="
    // const url:string = "http://localhost:3001/locations/search?search="
  
    fetch(url+value)
      .then(response => response.json())
      .then(data => setSearchResults(data))
      .catch(error => console.error(error))
  };

  const handleSelect = (area:SelectedArea) => {
    setSelectedAreaChanges(area)
    setSearchTerm(area.name)
    setSearchResults([])
  }

  const handleInputClick = () => {
    setSearchTerm('')
  }

  return (
    <div className="relative">
      <NavigationInputLabel label="City" />
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search..."
        className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 w-64"
        onClick={handleInputClick}
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
  )
}

export default NavigationInputText
