import { useContext, useState } from 'react';

import AsyncSelect from 'react-select/async';
import { NearlyContext } from '../context/context';
type LocationSearchResult = {
  location_id:number;
  city:string;
  postcode:string;
}


const NavigationInputText = ({city}:{city:string}) => {  
  const { userData, setUserData } = useContext(NearlyContext)

  
  const [inputValue, setValue] = useState('');
  const [selectedValue, setSelectedValue] = useState(null);

  // handle input change event
  const handleInputChange = value => {
    setValue(value);
  };

  // handle selection
  const handleChange = value => {
    setSelectedValue(value);
    setUserData(prevUserData => ({
      ...prevUserData,
      selectedArea: {...prevUserData.selectedArea, location_id:value.id, city:value.name }}))

  }

  // load options using API call
  const loadOptions = (inputValue) => {
      return fetch(`https://api.nearly.site/locations/search?search=${inputValue}`).then(res => res.json())
  };
  
  return (
    <AsyncSelect
      cacheOptions
      defaultOptions
      value={selectedValue}
      getOptionLabel={e => e.name}
      getOptionValue={e => e.location_id}
      loadOptions={loadOptions}
      onInputChange={handleInputChange}
      onChange={handleChange}
    />
  );
}

























// const NavigationInputText = ({city}:{city:string}) => {  
//   const [inputValue, setInputValue] = useState<string|null>('')
//   const [selectedValue, setSelectedValue] = useState<LocationSearchResult>();

//   const handleInputChange = (value:string) => {
//     setInputValue(value);
//   };

//   const handleChange = (value:string) => {
//     setSelectedValue(value);
//   }

//   const loadOptions = (inputValue:string) => {
//     return fetch(`https://api.nearly.site/locations?search=${inputValue}`).then(res => res.json());
//   };


//   return (
//     <div>
//       {inputValue}
//       <SelectSearch
//         options={[]}
//         defaultValue="15997"
//         getOptions={(query) => {
//             return new Promise((resolve, reject) => {
//                 fetch(
//                     `https://api.nearly.site/locations?search=${query}`,
//                 )
//                     .then((response) => response.json())
//                     .then(({ drinks }) => {
//                         resolve(
//                             drinks.map(({ idDrink, strDrink }) => ({
//                                 value: idDrink,
//                                 name: strDrink,
//                             })),
//                         );
//                     })
//                     .catch(reject);
//             });
//         }}
//         search
//         placeholder="Your favorite drink"
//     />
//     </div>
//   )
// }

export default NavigationInputText