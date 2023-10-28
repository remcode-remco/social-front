import { useContext, useEffect, useState } from "react"
import NavigationInputText from "./NavigationInputText"
import { NearlyContext } from "@/app/context/context"
import NavigationTitle from "./NavigationTitle"
import NavigationInputRadio from "./NavigationInputRadio"
import { SelectedArea } from "@/app/typings/typings"
import NavigationInputButton from "./NavigationInputButton"

const NavigationCityChange = ({setShowCitySelect}:{setShowCitySelect:(showCitySelect:boolean)=>void}) => {
  const { userData, selectedArea, setSelectedArea } = useContext(NearlyContext)
  const [selectedAreaChanges, setSelectedAreaChanges]=useState<SelectedArea>(selectedArea)

const submitAreaChanges = () => {
  setSelectedArea(selectedAreaChanges)
  setShowCitySelect(false)
}

  return (
    <div className="max-w-lg mx-auto fixed top-0 bottom-0 left-0 right-0 bg-blue-50 flex flex-col items-center">
      <div onClick={()=>setShowCitySelect(false)}>
        <NavigationTitle />
      </div>
      <NavigationInputText setSelectedAreaChanges={setSelectedAreaChanges} selectedArea={selectedArea} />
      <NavigationInputRadio selectedAreaChanges={selectedAreaChanges} setSelectedAreaChanges={setSelectedAreaChanges} />
      <NavigationInputButton submitAreaChanges={submitAreaChanges} />
    </div>
  )
}

export default NavigationCityChange