import { useContext, useState } from "react"
import { NearlyContext } from "../context/context"
import NavigationCityChange from "./NavigationCityChange"
import NavigationCityName from "./NavigationCityName"


const NavigationCity = () => {
  const { userData } = useContext(NearlyContext)
  const [showCitySelect,setShowCitySelect]=useState<boolean>(false)

  if (userData) {
    if (showCitySelect) {
      return (
        <NavigationCityChange setShowCitySelect={setShowCitySelect} city={userData.selectedArea.city} />
      )
    } else {
      return (
        <NavigationCityName setShowCitySelect={setShowCitySelect} city={userData.selectedArea.city} />
      )
    }
  }
}

export default NavigationCity