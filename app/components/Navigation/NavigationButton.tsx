import { ReactNode } from "react"


const NavigationButton = ({color,children}:{color:number,children:ReactNode}) => {

  return (
    <button>{children}</button>
  )
}

export default NavigationButton