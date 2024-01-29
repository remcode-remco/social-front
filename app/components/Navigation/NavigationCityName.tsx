

const NavigationCityName = ({setShowCitySelect,name}:{setShowCitySelect:(showCitySelect:boolean)=>void,name:string}) => {

  return (
    <div className="cursor-pointer" onClick={()=>setShowCitySelect(true)}>
      {name}
    </div>
  )
}

export default NavigationCityName