

const NavigationCityName = ({setShowCitySelect,name}:{setShowCitySelect:(showCitySelect:boolean)=>void,name:string}) => {
console.log(name)
  return (
    <div onClick={()=>setShowCitySelect(true)}>
      {name}
    </div>
  )
}

export default NavigationCityName