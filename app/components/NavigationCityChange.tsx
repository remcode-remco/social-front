import NavigationCityName from "./NavigationCityName"
import NavigationInputText from "./NavigationInputText"

const NavigationCityChange = ({setShowCitySelect,city}:{setShowCitySelect:(showCitySelect:boolean)=>void,city:string}) => {

  return (
    <>
      {/* <NavigationCityName setShowCitySelect={setShowCitySelect} city={city} /> */}
      {/* <NavigationInputText value={country} /> */}
      <NavigationInputText city={city} />
    </>
  )
}

export default NavigationCityChange