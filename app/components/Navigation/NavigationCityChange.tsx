import { useContext } from "react"
import NavigationInputText from "./NavigationInputText"
import { NearlyContext } from "@/app/context/context"
import NavigationTitle from "./NavigationTitle"

const NavigationCityChange = ({setShowCitySelect,name}:{setShowCitySelect:(showCitySelect:boolean)=>void,name:string}) => {
  const { userData } = useContext(NearlyContext)

  return (
    <div className="max-w-lg mx-auto fixed top-0 bottom-0 left-0 right-0 bg-blue-50 flex flex-col items-center">
      <div onClick={()=>setShowCitySelect(false)}>
        <NavigationTitle />
      </div>
      <NavigationInputText name={name} setShowCitySelect={setShowCitySelect} />
    </div>
  )
}

export default NavigationCityChange