import { useContext, useEffect, useState } from "react"
import { NearlyContext } from "../../context/context"
import NavigationCityChange from "./NavigationCityChange"
import NavigationCityName from "./NavigationCityName"


const NavigationCity = () => {
  const { userData, selectedArea } = useContext(NearlyContext)
  const [showCitySelect,setShowCitySelect]=useState<boolean>(false)

  if (showCitySelect) {
    return (
      <NavigationCityChange setShowCitySelect={setShowCitySelect} name={selectedArea.name} />
    )
  } else {
    return (
      <NavigationCityName setShowCitySelect={setShowCitySelect} name={selectedArea.name} />
    )
  }
}

export default NavigationCity