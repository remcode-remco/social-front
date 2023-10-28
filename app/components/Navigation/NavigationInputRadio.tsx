import { SelectedArea } from '@/app/typings/typings'
import NavigationInputLabel from './NavigationInputLabel'

const NavigationInputRadio = ({selectedAreaChanges,setSelectedAreaChanges}:{selectedAreaChanges:SelectedArea,setSelectedAreaChanges:(selectedArea:SelectedArea)=>void}) => {
  
  const handleOptionChange = (distance:number) => {
    setSelectedAreaChanges({...selectedAreaChanges, radius:distance})
  }

  const DistanceOption = ({distance}:{distance:number}) => (    
    <label 
      className={`py-3 px-5 cursor-pointer shadow
      ${distance === 0 && "rounded-l-full"}
      ${distance === 50000 && "rounded-r-full"}
      ${selectedAreaChanges.radius === distance
        ? 'bg-blue-300 shadow-black'
        : 'bg-gray-300 shadow-gray-600'
      }`}
    >
      <input
        type="radio"
        defaultValue={selectedAreaChanges.radius}
        checked={selectedAreaChanges.radius === distance}
        onChange={()=>handleOptionChange(distance)}
        className="hidden"
      />
      <span>{distance/1000}</span>
    </label>
  )
  
  return (
    <div className='relative'>
      <NavigationInputLabel label="Distance" />
      <div className="flex items-center space-x-">
        <DistanceOption distance={0} />
        <DistanceOption distance={10000} />
        <DistanceOption distance={20000} />
        <DistanceOption distance={50000} />
      </div>
    </div>
  )
}

export default NavigationInputRadio
