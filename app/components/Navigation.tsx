import { useContext } from "react"
import NavigationButton from "./NavigationButton"
import NavigationCity from "./NavigationCity"
import NavigationKeywords from "./NavigationKeywords"
import NavigationTitle from "./NavigationTitle"

const NavigationBurger = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
)

const NavigationPlus = () => (
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>
)

const Navigation = () => {

  return (
    <div className="flex flex-col items-center">
      <div className="flex">
        <NavigationTitle />
      </div>
      <div className="flex justify-between w-full">
        <NavigationButton color={0}>
          <NavigationBurger />  
        </NavigationButton>
        <NavigationCity />
        <NavigationButton color={0}>
          <NavigationPlus />  
        </NavigationButton>
      </div>
      <NavigationKeywords />
    </div>
  )
}

export default Navigation