

const NavigationCityName = ({setShowCitySelect,city}:{setShowCitySelect:(showCitySelect:boolean)=>void,city:string}) => {

  return (
    <div onClick={()=>setShowCitySelect(true)}>
      {city}
    </div>
  )
}

export default NavigationCityName